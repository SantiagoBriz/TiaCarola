# Flujo de Ramas — TiaCarola

Este documento define el flujo de trabajo con ramas del repositorio.
**Regla de oro: nunca se commitea directo a `main` ni a `staging`. Todo pasa por Pull Request.**

## Las tres ramas

| Rama | Propósito | Deploy |
|---|---|---|
| `main` | Producción. Código estable, lo que ve el usuario final. | Vercel — producción |
| `staging` | Preproducción. Donde se prueba todo antes de pasar a producción. | Vercel — URL fija de staging |
| `dev` | Desarrollo. Integración de features en curso. | Sin deploy fijo (preview automático de Vercel por push) |

## Flujo obligatorio

```
feature/nombre-descriptivo
        │
        │  PR →
        ▼
       dev
        │
        │  PR →
        ▼
     staging   ← acá se ve el deploy de preproducción en Vercel
        │
        │  PR →
        ▼
      main     ← producción
```

**Nunca se saltan pasos.** Una rama `feature/*` no mergea directo a `staging` ni a `main`. Todo cambio recorre `dev → staging → main` en ese orden, uno a la vez.

## Paso a paso

### 1. Crear una rama de trabajo
Siempre parte desde `dev` actualizado:

```bash
git checkout dev
git pull origin dev
git checkout -b feature/nombre-descriptivo
```

### 2. Mergear a `dev`
Cuando la feature está lista:
- Push de la rama y **Pull Request hacia `dev`** (no hacia `main`, que es la base por defecto de GitHub — hay que cambiarla manualmente en el PR).
- Revisar y mergear.

### 3. Promover `dev` → `staging`
Cuando `dev` acumula cambios listos para probar:
- Crear **Pull Request de `dev` hacia `staging`**.
- Al mergear, Vercel deploya automáticamente a la URL fija de staging. Ahí se prueba todo antes de producción.

### 4. Promover `staging` → `main`
Una vez validado en staging y sin bugs:
- Crear **Pull Request de `staging` hacia `main`**.
- Al mergear, Vercel deploya a producción.

## Reglas fijas

1. **`main` es siempre lo que está en producción.** Si algo está en `main`, es porque ya pasó por `staging` y fue validado ahí.
2. **`staging` es siempre lo próximo a salir a producción.** Es el ambiente de preproducción — todo lo que se ve ahí es candidato a ir a `main` en el corto plazo.
3. **Nunca commitear directo a `main` ni a `staging`.** Todo cambio entra por PR, sin excepción, incluso para arreglos chicos.
4. **Las ramas `feature/*` son de vida corta, pero no se borran.** Se crean desde `dev` y se mergean a `dev`. Una vez mergeadas se dejan de usar, pero la rama queda: en este repo **no se borra ninguna rama**, ni local ni en el remoto.
5. **El orden de promoción es siempre `dev → staging → main`.** Nunca al revés, nunca salteando una rama.
6. **Si hay que revertir algo en producción urgente**, se hace el fix en una rama desde `main`, se mergea a `main` primero, y después se propaga hacia atrás a `staging` y `dev` para que no se pierda en la próxima promoción.

## Para agentes de IA trabajando en este repo

Si estás generando código o haciendo commits en este repositorio:
- Nunca hagas `push` directo a `main` o `staging`.
- Si te piden implementar algo, creá la rama desde `dev` con el prefijo `feature/`.
- No mergees ninguna rama vos mismo salvo que se te pida explícitamente — dejá el PR creado y pedí confirmación antes de mergear.
- **Nunca borres una rama**, ni siquiera una `feature/*` ya mergeada. Tampoco lo sugieras.
- Si no está claro desde qué rama partir, preguntá antes de asumir.
