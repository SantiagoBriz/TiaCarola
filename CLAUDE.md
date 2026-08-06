# TiaCarola — instrucciones del proyecto

Sitio web para un hospedaje familiar en San Francisco, Valle Grande, Jujuy.

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
