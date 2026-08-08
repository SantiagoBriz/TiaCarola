# TiaCarola — instrucciones del proyecto

Sitio web para un hospedaje familiar en San Francisco, Valle Grande, Jujuy.
Landing informativa con backend mínimo: consultas de reserva por WhatsApp, comentarios de huéspedes con moderación previa y panel de administración.

## Stack y convenciones

Documento completo: [`docs/stack-y-convenciones.md`](docs/stack-y-convenciones.md). Lo esencial:

- **Next.js (App Router) + TypeScript `strict`**, **Tailwind CSS**, **Supabase** (Postgres + Auth), deploy en **Vercel**. Node 24, npm.
- **Reservas por link `wa.me` con mensaje prearmado**, no por la Cloud API de Meta. La consulta igual se guarda en `booking_requests`.
- **Comentarios con moderación previa**: entran en `pending` y no se publican hasta que un admin los aprueba.

### Reglas de código

1. **Prohibido `any`.** Si es desconocido, `unknown` y se acota.
2. **Código en inglés, texto visible en español rioplatense.**
3. **Server Components por defecto**; `"use client"` solo si hace falta estado, efectos o eventos.
4. **`SUPABASE_SERVICE_ROLE_KEY` nunca llega al cliente** ni se commitea. Ningún secreto en el repo.
5. **RLS activo en todas las tablas.** Público solo lee `comments` con `status = 'approved'`.
6. **Validar siempre en el servidor** (Zod), no solo en el navegador.
7. **No agregar dependencias nuevas sin preguntar.**
8. **No desactivar reglas de ESLint ni usar `@ts-ignore`** para hacer pasar el build — arreglar la causa o preguntar.
9. **Antes de dar una tarea por terminada**: `npm run lint`, `npm run typecheck` y `npm run build`.

## Flujo de ramas (OBLIGATORIO)

Documento completo: [`docs/flujo-de-ramas.md`](docs/flujo-de-ramas.md). Resumen operativo:

| Rama | Propósito | Deploy |
|---|---|---|
| `main` | Producción | Vercel — producción |
| `staging` | Preproducción, se valida acá antes de prod | Vercel — URL fija de staging |
| `dev` | Integración de features en curso | Preview automático de Vercel por push |

Promoción, siempre en este orden y de a un paso por vez:

```
feature/nombre-descriptivo → dev → staging → main
```

### Reglas que debo seguir en cada sesión

1. **Nunca commitear ni pushear directo a `main` ni a `staging`.** Todo entra por Pull Request, sin excepción, incluso arreglos chicos.
2. **Toda rama de trabajo se crea desde `dev` actualizado**, con prefijo `feature/`:
   `git checkout dev && git pull origin dev && git checkout -b feature/nombre-descriptivo`
3. **Nunca saltear ramas.** Una `feature/*` no va a `staging` ni a `main` directo.
4. **No mergear por mi cuenta.** Dejo el PR creado y pido confirmación antes de mergear.
5. **PRs hacia `dev`**: GitHub pone `main` como base por defecto — hay que cambiar la base explícitamente (`gh pr create --base dev`).
6. **Promover a staging** = PR de `dev` → `staging`. **Promover a prod** = PR de `staging` → `main`. Nunca al revés.
7. **Hotfix urgente de producción**: rama desde `main` → PR a `main` → después propagar el mismo cambio hacia atrás a `staging` y `dev`.
8. **Nunca borrar ramas**, ni siquiera una `feature/*` ya mergeada, ni local ni en el remoto. Tampoco sugerirlo.
9. **Si no está claro desde qué rama partir, preguntar antes de asumir.**

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
