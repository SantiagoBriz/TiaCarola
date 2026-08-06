# Stack, infraestructura y convenciones — TiaCarola

Definición técnica del proyecto. Complementa [`flujo-de-ramas.md`](flujo-de-ramas.md), que define cómo se trabaja con ramas.

## Qué es el producto

Sitio del hospedaje familiar de Lucy y Fredy en San Francisco, Valle Grande, Jujuy.

Primera versión: **landing informativa con backend mínimo**.

- Presentación del lugar: fotos, ubicación, servicios, cómo llegar.
- **Consultas de reserva por WhatsApp.** El huésped completa un formulario y se abre WhatsApp con el mensaje ya escrito hacia el teléfono de siempre de los dueños. La consulta además queda guardada en la base.
- **Comentarios de huéspedes con moderación previa.** Se cargan desde el sitio, quedan pendientes y no se publican hasta que un admin los aprueba.
- **Panel de administración** con CRUD completo de comentarios y lectura de las consultas de reserva.

## Stack

| Capa | Herramienta | Por qué |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | Nativo de Vercel, SSR/SSG para SEO, y permite el backend mínimo con Route Handlers sin sumar un servidor aparte |
| Estilos | **Tailwind CSS** | Iteración rápida, sin CSS suelto |
| Base de datos | **Supabase (Postgres)** | Postgres gestionado, plan gratis suficiente para esta escala |
| Autenticación | **Supabase Auth** | Login de admins y roles, sin sumar otra herramienta |
| Deploy | **Vercel** | `main` → producción, `staging` → URL fija, `dev` → previews |
| Runtime local | **Node 24 LTS**, npm | Lo instalado en la máquina de trabajo |

### Decisión sobre WhatsApp

Se usa **link `wa.me` con mensaje prearmado**, *no* la WhatsApp Business Cloud API de Meta.

Motivo: la Cloud API exige un número dedicado que deja de funcionar en la app normal de WhatsApp, verificación de Meta Business, plantillas aprobadas y costo por conversación. Los dueños atienden las reservas desde su WhatsApp de siempre, y la Cloud API les cambiaría esa forma de trabajar. El link `wa.me` les hace llegar un mensaje común al teléfono que ya usan.

Las consultas se guardan igual en `booking_requests`, con una estructura que permite enchufar la Cloud API más adelante sin rehacer el formulario ni el modelo de datos.

## Modelo de datos inicial

### `comments`
Comentarios de huéspedes. Nunca se publican sin aprobación.

| Campo | Tipo | Notas |
|---|---|---|
| `id` | uuid | PK |
| `author_name` | text | Nombre del huésped |
| `body` | text | El comentario |
| `rating` | int | 1 a 5, opcional |
| `status` | enum | `pending` \| `approved` \| `rejected`. Arranca en `pending` |
| `created_at` | timestamptz | |
| `moderated_at` | timestamptz | Cuándo se aprobó o rechazó |
| `moderated_by` | uuid | FK al admin que moderó |

### `booking_requests`
Consultas de reserva enviadas desde el formulario.

| Campo | Tipo | Notas |
|---|---|---|
| `id` | uuid | PK |
| `guest_name` | text | |
| `contact` | text | Teléfono o mail |
| `check_in` / `check_out` | date | |
| `guests_count` | int | |
| `message` | text | Texto libre del huésped |
| `created_at` | timestamptz | |

### `admin_users`
Quiénes pueden moderar. Rol `admin` sobre usuarios de Supabase Auth.

## Reglas de seguridad

1. **RLS activo en todas las tablas.** Sin excepción.
2. **Lectura pública solo de `comments` con `status = 'approved'`.** Nada más es visible sin autenticar.
3. **`booking_requests` no es legible públicamente.** Solo admins autenticados.
4. **La service role key de Supabase nunca toca el cliente.** Vive solo en variables de entorno del servidor y se usa únicamente en Route Handlers o Server Actions.
5. **El formulario público valida en el servidor**, no solo en el navegador. Nunca confiar en la validación de cliente.
6. **Ningún secreto en el repo.** Todo por variables de entorno; `.env.local` va en `.gitignore`.

## Variables de entorno

| Variable | Dónde | Notas |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | cliente + servidor | Pública |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | cliente + servidor | Pública, limitada por RLS |
| `SUPABASE_SERVICE_ROLE_KEY` | **solo servidor** | Secreta. Nunca con prefijo `NEXT_PUBLIC_` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | cliente | Número destino del link `wa.me`, formato internacional sin `+` |

Se cargan en Vercel por separado para producción, staging y preview.

## Convenciones de código

1. **TypeScript en modo `strict`.** Prohibido `any`; si algo es realmente desconocido, `unknown` y se acota.
2. **Código en inglés, contenido en español.** Nombres de variables, funciones, archivos, tablas y columnas en inglés. Todo el texto visible para el usuario en español rioplatense.
3. **Server Components por defecto.** `"use client"` solo cuando hace falta estado, efectos o eventos del navegador.
4. **Nada de fetch a Supabase desde componentes de cliente con datos sensibles.** Las escrituras pasan por Route Handlers o Server Actions.
5. **Componentes en `PascalCase`, archivos de componente igual.** Hooks con prefijo `use`. Utilidades en `camelCase`.
6. **Validación de entrada con un esquema** (Zod), compartido entre cliente y servidor.
7. **Accesibilidad no es opcional:** imágenes con `alt`, formularios con `label`, foco visible. Los usuarios del sitio son de todas las edades.
8. **Imágenes siempre con `next/image`.** El sitio va a ser mayormente fotos y es la mayor fuente de peso.

## Estructura de carpetas

```
src/
  app/
    (public)/          # landing, comentarios, formulario de reserva
    admin/             # panel, requiere sesión
    api/               # Route Handlers
  components/          # componentes reutilizables
  lib/
    supabase/          # clientes de browser y server
    validation/        # esquemas Zod
  types/
docs/                  # esta documentación
supabase/migrations/   # SQL versionado
```

## Herramientas de calidad

Etapa actual: **base + CI**.

- **ESLint** — config de Next.js más reglas de TypeScript.
- **Prettier** — formato único, sin discusiones de estilo.
- **`tsc --noEmit`** — chequeo de tipos como paso propio.
- **GitHub Actions** — corre en cada PR hacia `dev`, `staging` y `main`:
  1. `npm ci`
  2. `npm run lint`
  3. `npm run typecheck`
  4. `npm run build`

Si el CI falla, el PR no se mergea. Esto es lo que evita que llegue a staging algo que ni compila.

### Pendiente para la etapa siguiente

Cuando el proyecto tenga lógica que valga la pena cubrir:

- **Vitest** para unitarios (validaciones, utilidades, armado del link de WhatsApp).
- **Playwright** para end-to-end del flujo de reserva y de moderación.
- **Husky + lint-staged** para correr lint y formato antes de cada commit.

## Para agentes de IA trabajando en este repo

Además de las reglas de [`flujo-de-ramas.md`](flujo-de-ramas.md):

- No agregues dependencias nuevas sin preguntar. El stack de arriba es la base acordada.
- No expongas nunca `SUPABASE_SERVICE_ROLE_KEY` al cliente ni la escribas en un archivo commiteado.
- No desactives reglas de ESLint ni uses `@ts-ignore` para hacer pasar el build. Si algo no tipa, arreglá la causa o preguntá.
- Antes de dar por terminada una tarea, corré `npm run lint`, `npm run typecheck` y `npm run build`.
