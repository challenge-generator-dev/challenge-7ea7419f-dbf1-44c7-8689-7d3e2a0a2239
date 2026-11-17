# Desarrollo de un directorio de empleados en React

El sistema es un directorio de empleados para una empresa de tecnología. Los usuarios pueden ver una lista paginada de empleados, buscar por nombre, ver el detalle de un empleado y añadir nuevos empleados mediante un formulario. El sistema consume una API REST que proporciona los datos de los empleados.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Directorio de empleados |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 15 horas |

## Stack

- **Lenguaje:** TypeScript
- **Framework:** React 19
- **Version:** Node 20

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Tener el proyecto base del reto funcionando en tu máquina: clonar el repositorio, instalar las herramientas y verificar que compila y arranca antes de empezar a practicar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Instala las herramientas para ejecutar el proyecto: Node.js 18+ y npm.
- Clona el repositorio del reto (el enlace viene en la entrega del reto y en la sección "Repositorio del Proyecto" del PDF) y ábrelo en tu IDE.
- Instala las dependencias y compila ejecutando `npm install --no-audit --no-fund && npm run build` en la raíz del repositorio.
- Confirma que el comando termina sin errores: el proyecto arranca y sus pruebas corren.
- Ubica los archivos de práctica: son los que contienen `TODO(reto)` (búscalos en el repositorio). Lee el README.md y el AGENTS.md antes de empezar.

**Entregable:** El proyecto compila/arranca sin errores con `npm install --no-audit --no-fund && npm run build`.

<details>
<summary>Pistas de conocimiento</summary>

- Los archivos con `TODO(reto)` son el ejercicio: el resto del repositorio ya está resuelto y no hace falta tocarlo.
- Si el comando de verificación falla, revisa la versión de las herramientas instaladas antes de modificar código.
- AGENTS.md describe el reto, el comando de verificación y las reglas del repositorio.

</details>

### Fase 1: Listado paginado de empleados

**Objetivo:** Mostrar una lista paginada de empleados con información básica.

**Tiempo estimado:** 5 horas

**Instrucciones:**

- El sistema debe mostrar una lista de empleados con nombre, cargo y departamento. La lista debe ser paginada y mostrar 10 empleados por página.
- El sistema debe permitir al usuario navegar entre páginas.
- El sistema debe mostrar un mensaje cuando no hay más empleados para mostrar.

**Entregable:** Componente React que muestra una lista paginada de empleados.

<details>
<summary>Pistas de conocimiento</summary>

- Uso de hooks en React para manejar el estado y los efectos secundarios.
- Uso de componentes funcionales en React.

</details>

### Fase 2: Buscador de empleados

**Objetivo:** Permitir al usuario buscar empleados por nombre.

**Tiempo estimado:** 4 horas

**Instrucciones:**

- El sistema debe permitir al usuario buscar empleados por nombre. La búsqueda debe ser en tiempo real y mostrar los resultados mientras el usuario escribe.
- El sistema debe mostrar un mensaje cuando no se encuentran resultados.

**Entregable:** Componente React que permite buscar empleados por nombre.

<details>
<summary>Pistas de conocimiento</summary>

- Uso de eventos en React para manejar la entrada del usuario.
- Uso de efectos secundarios en React para realizar búsquedas en tiempo real.

</details>

### Fase 3: Detalle de empleado

**Objetivo:** Mostrar el detalle de un empleado seleccionado.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- El sistema debe mostrar el detalle de un empleado seleccionado, incluyendo nombre, cargo, departamento, email y teléfono.
- El sistema debe permitir al usuario volver a la lista de empleados.

**Entregable:** Componente React que muestra el detalle de un empleado.

<details>
<summary>Pistas de conocimiento</summary>

- Uso de rutas en React para navegar entre componentes.
- Uso de props en React para pasar datos entre componentes.

</details>

### Fase 4: Formulario de alta de empleado

**Objetivo:** Permitir al usuario añadir nuevos empleados.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- El sistema debe permitir al usuario añadir nuevos empleados mediante un formulario. El formulario debe incluir campos para nombre, cargo, departamento, email y teléfono.
- El sistema debe validar los datos del formulario antes de enviarlos a la API.
- El sistema debe mostrar un mensaje de éxito o error después de enviar los datos a la API.

**Entregable:** Componente React que permite añadir nuevos empleados.

<details>
<summary>Pistas de conocimiento</summary>

- Uso de formularios en React para manejar la entrada del usuario.
- Uso de validación en React para asegurar que los datos del formulario son correctos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente React y para qué se usa?
- **paraQueSirve**: ¿Para qué se usa el hook useState en React?
- **comoSeUsa**: ¿Cómo se usa el hook useEffect en React para realizar búsquedas en tiempo real?
- **erroresComunes**: ¿Cuáles son los errores comunes al manejar el estado en React?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de un formulario de alta de empleado en React?

## Criterios de Evaluacion

- Componente React que muestra una lista paginada de empleados.
- Componente React que permite buscar empleados por nombre.
- Componente React que muestra el detalle de un empleado.
- Componente React que permite añadir nuevos empleados.

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

## Pruebas de aceptacion

Las pruebas de aceptacion (columna "Prueba" de la tabla) son de **solo lectura**: definen que significa "listo". No las edites, no las borres y no les agregues `skip`; lo que se resuelve es el codigo de cada pieza.

## Restricciones del pedido

| Restriccion | Donde se cumple | Estado |
|-------------|-----------------|--------|
| El formulario debe validar que el email sea válido y que el nombre no esté vacío | sin ubicar | Restriccion no verificada en sin ubicar |
| La paginación debe manejar casos donde no hay empleados para mostrar | sin ubicar | Restriccion no verificada en sin ubicar |

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
