# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Desarrollo de un directorio de empleados en React**.

| | |
|---|---|
| Tema | Directorio de empleados |
| Nivel | advanced-l2 |
| Chapter | Frontend |
| Especialidad | React |
| Stack | TypeScript / React 19 |
| Patron arquitectonico | patrón contenedor/presentacional con hooks personalizados |
| Tiempo estimado | 15 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, vite.config.ts y tsconfig.json en la raiz`
- `src/main.tsx como entry point`
- `src/app con el arbol de rutas`
- `src/features con componentes contenedores y sus hooks`
- `src/shared con componentes presentacionales`
- `src/services con los clientes HTTP`

Trampas conocidas:

- No inventes versiones de npm: una version inexistente hace fallar `npm install` con ETARGET. `@types/react-router-dom` ya no se publica para v6+, React Router trae sus tipos.
- El `package.json` tiene que ser JSON valido y UNICO: nada despues de la llave de cierre.

Dependencias:

- @mui/material 5.18.0
- axios 1.21.1
- react 18.3.1
- react-dom 18.3.1
- @types/react 18.3.31
- @types/react-dom 18.3.7
- @vitejs/plugin-react 4.7.0
- typescript 5.7.3
- vite 5.4.21

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install --no-audit --no-fund && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install --no-audit --no-fund && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Listado paginado de empleados**: Componente React que muestra una lista paginada de empleados.
- **Fase 2 — Buscador de empleados**: Componente React que permite buscar empleados por nombre.
- **Fase 3 — Detalle de empleado**: Componente React que muestra el detalle de un empleado.
- **Fase 4 — Formulario de alta de empleado**: Componente React que permite añadir nuevos empleados.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Superficie de practica (NO completes)

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs. No toques la logica que el reto pide completar.

- [ ] `src/features/employees/hooks/useEmployeeList.ts` — La pieza p1 (Manejo de estado y consumo de API para listados paginados, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/employees/components/EmployeeList.tsx` — La pieza p2 (Renderizado condicional y manejo de estados en componentes React, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/employees/hooks/useEmployeeSearch.ts` — La pieza p3 (Implementación de lógica de búsqueda en tiempo real, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/employees/hooks/useEmployeeDetail.ts` — La pieza p4 (Consumo de API para detalles de un recurso, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/employees/hooks/useEmployeeForm.ts` — La pieza p5 (Validación de formularios y manejo de envío, fase f4) vive aqui: este archivo es su unico dueno (blueprint v2).
- [ ] `src/features/employees/services/EmployeeApiClient.ts` — La pieza p6 (Implementación de cliente HTTP para consumir una API REST, fase f4) vive aqui: este archivo es su unico dueno (blueprint v2).

## Mapa de fases

La **Fase 0** es clonar el repositorio, instalar dependencias y correr las pruebas de aceptacion: todas fallan porque la logica de cada pieza esta pendiente.

| Fase | Pieza (skill) | Archivo:simbolo | Criterios | Prueba | Comando |
|------|---------------|-----------------|-----------|--------|---------|
| f1 — Listado paginado de empleados | Manejo de estado y consumo de API para listados paginados | `src/features/employees/hooks/useEmployeeList.ts:useEmployeeList` | El componente muestra una lista de empleados con nombre, email y puesto.; La lista es paginada con controles para navegar entre páginas.; Se muestra un estado de carga mientras se obtienen los datos.; Se muestra un mensaje de error si la API falla. | — | — |
| f1 — Listado paginado de empleados | Renderizado condicional y manejo de estados en componentes React | `src/features/employees/components/EmployeeList.tsx:EmployeeList` | El componente muestra una lista de empleados con nombre, email y puesto.; La lista es paginada con controles para navegar entre páginas.; Se muestra un estado de carga mientras se obtienen los datos.; Se muestra un mensaje de error si la API falla. | — | — |
| f2 — Buscador de empleados | Implementación de lógica de búsqueda en tiempo real | `src/features/employees/hooks/useEmployeeSearch.ts:useEmployeeSearch` | El componente permite buscar empleados por nombre.; La búsqueda actualiza el listado paginado en tiempo real.; Se muestra un mensaje cuando no hay resultados para la búsqueda. | — | — |
| f3 — Detalle de empleado | Consumo de API para detalles de un recurso | `src/features/employees/hooks/useEmployeeDetail.ts:useEmployeeDetail` | El componente muestra todos los campos del empleado seleccionado.; Se muestra un estado de carga mientras se obtienen los datos.; Se muestra un mensaje de error si el empleado no existe o la API falla. | — | — |
| f4 — Formulario de alta de empleado | Validación de formularios y manejo de envío | `src/features/employees/hooks/useEmployeeForm.ts:useEmployeeForm` | El formulario permite ingresar nombre, email y puesto.; Valida que el email sea válido y el nombre no esté vacío.; Envía los datos a la API y maneja errores de validación o fallos de la API. | — | — |
| f4 — Formulario de alta de empleado | Implementación de cliente HTTP para consumir una API REST | `src/features/employees/services/EmployeeApiClient.ts:EmployeeApiClient` | El formulario permite ingresar nombre, email y puesto.; Valida que el email sea válido y el nombre no esté vacío.; Envía los datos a la API y maneja errores de validación o fallos de la API. | — | — |

## Pruebas de aceptacion y ubicacion de la logica

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

La logica de cada pieza va en su archivo; no la muevas a otro.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| El formulario debe validar que el email sea válido y que el nombre no esté vacío | sin ubicar | Restriccion no verificada en sin ubicar |
| La paginación debe manejar casos donde no hay empleados para mostrar | sin ubicar | Restriccion no verificada en sin ubicar |

## Lo que falta y tenes que completar

No se detectaron huecos: estan los archivos declarados, el boilerplate del stack y ninguna referencia quedo colgando. Igual corre el comando de verificacion — que los archivos existan no garantiza que compilen.

### Presentes (20)

- `src/main.tsx`
- `package.json`
- `tsconfig.json`
- `vite.config.ts`
- `index.html`
- `src/vite-env.d.ts`
- `src/features/employees/models/Employee.ts`
- `src/features/employees/models/EmployeeFormData.ts`
- `src/features/employees/models/FormErrors.ts`
- `src/features/employees/hooks/useEmployeeList.ts`
- `src/features/employees/components/EmployeeList.tsx`
- `src/features/employees/hooks/useEmployeeSearch.ts`
- `src/features/employees/hooks/useEmployeeDetail.ts`
- `src/features/employees/hooks/useEmployeeForm.ts`
- `src/features/employees/services/EmployeeApiClient.ts`
- `src/config/axios.ts`
- `src/app/router.tsx`
- `src/app/theme.ts`
- `src/features/employees/components/EmployeeForm.tsx`
- `src/features/employees/components/EmployeePagination.tsx`

### Capas del patron declarado

Son las capas que la propuesta arquitectonica plantea, marcadas segun existan hoy en el repo. Orientan donde poner el codigo nuevo; no son una condicion para compilar.

- `src/features/employees` (presente)
- `src/features/employees/components` (presente)
- `src/features/employees/hooks` (presente)
- `src/features/employees/models` (presente)
- `src/features/employees/ports` (ausente)
- `src/features/employees/services` (presente)
- `src/features/employees/utils` (ausente)
- `src/shared/components` (ausente)
- `src/shared/hooks` (ausente)
- `src/shared/models` (ausente)
- `src/shared/utils` (ausente)

## Verificacion

```bash
npm install --no-audit --no-fund && npm run build
```

El comando tiene que pasar SIN implementar los archivos de la superficie de practica: solo andamiaje.

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **patrón contenedor/presentacional con hooks personalizados**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Frontend, Especialidad Desarrollador, Tecnología React, Advanced L2
- Brecha que el reto ataca: Aplicacion React con listado paginado de empleados, buscador, detalle y formulario de alta que consume una API REST

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
