# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/features/employees/hooks/useEmployeeList.ts` — La pieza p1 (Manejo de estado y consumo de API para listados paginados, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/employees/components/EmployeeList.tsx` — La pieza p2 (Renderizado condicional y manejo de estados en componentes React, fase f1) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/employees/hooks/useEmployeeSearch.ts` — La pieza p3 (Implementación de lógica de búsqueda en tiempo real, fase f2) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/employees/hooks/useEmployeeDetail.ts` — La pieza p4 (Consumo de API para detalles de un recurso, fase f3) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/employees/hooks/useEmployeeForm.ts` — La pieza p5 (Validación de formularios y manejo de envío, fase f4) vive aqui: este archivo es su unico dueno (blueprint v2).
- `src/features/employees/services/EmployeeApiClient.ts` — La pieza p6 (Implementación de cliente HTTP para consumir una API REST, fase f4) vive aqui: este archivo es su unico dueno (blueprint v2).

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Frontend, Especialidad Desarrollador, Tecnología React, Advanced L2

### Brecha de conocimiento
Aplicacion React con listado paginado de empleados, buscador, detalle y formulario de alta que consume una API REST

### Reto
- Tema: Directorio de empleados
- Seniority: advanced-l2
- Tipo: practical
- Título: Desarrollo de un directorio de empleados en React
- Tiempo estimado: 15 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Listado paginado de empleados — objetivo: Mostrar una lista paginada de empleados con información básica. — entregable (NO resolver): Componente React que muestra una lista paginada de empleados.
- Fase 2: Buscador de empleados — objetivo: Permitir al usuario buscar empleados por nombre. — entregable (NO resolver): Componente React que permite buscar empleados por nombre.
- Fase 3: Detalle de empleado — objetivo: Mostrar el detalle de un empleado seleccionado. — entregable (NO resolver): Componente React que muestra el detalle de un empleado.
- Fase 4: Formulario de alta de empleado — objetivo: Permitir al usuario añadir nuevos empleados. — entregable (NO resolver): Componente React que permite añadir nuevos empleados.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/main.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { router } from './app/router';
import { theme } from './app/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// === ARCHIVO: package.json ===
{
  "name": "reto-react",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "tsc --noEmit && vite build"
  },
  "dependencies": {
    "@mui/material": "5.18.0",
    "@tanstack/react-query": "5.108.0",
    "axios": "1.21.1",
    "react": "18.3.1",
    "react-dom": "18.3.1",
    "react-router-dom": "7.18.5"
  },
  "devDependencies": {
    "@types/react": "18.3.31",
    "@types/react-dom": "18.3.7",
    "@vitejs/plugin-react": "4.7.0",
    "typescript": "5.7.3",
    "vite": "5.4.21"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "isolatedModules": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "useDefineForClassFields": true,
    "types": [
      "vite/client"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "src/**/*.test.ts",
    "src/**/*.test.tsx",
    "src/**/*.spec.ts",
    "src/**/*.spec.tsx"
  ]
}

// === ARCHIVO: vite.config.ts ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({ plugins: [react()] });

// === ARCHIVO: index.html ===
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reto</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>

// === ARCHIVO: src/vite-env.d.ts ===
/// <reference types="vite/client" />

// === ARCHIVO: src/features/employees/models/Employee.ts ===
/**
 * Modelo de datos para un empleado.
 * Representa la estructura de datos recibida desde la API.
 */
export interface Employee {
    id: string;
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
}

/**
 * Respuesta paginada de empleados.
 * @template T Tipo de dato contenido en la respuesta (Employee[]).
 */
export interface PaginatedResponse<T> {
    data: T;
    page: number;
    limit: number;
    total: number;
}

// === ARCHIVO: src/features/employees/models/EmployeeFormData.ts ===
/**
 * Modelo de datos para el formulario de creación/edición de empleados.
 * Contiene los campos necesarios para enviar a la API al crear un nuevo empleado.
 */
export interface EmployeeFormData {
    name: string;
    position: string;
    department: string;
    email: string;
    phone: string;
}

// === ARCHIVO: src/features/employees/models/FormErrors.ts ===
/**
 * Modelo para manejar errores de validación en formularios.
 * Cada clave corresponde a un campo del formulario y su valor es el mensaje de error.
 */
export interface FormErrors {
    name?: string;
    position?: string;
    department?: string;
    email?: string;
    phone?: string;
}

// === ARCHIVO: src/features/employees/hooks/useEmployeeList.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect, useCallback } from 'react';
import { Employee, PaginatedResponse } from '../models/Employee';
import { EmployeeApiPort } from '../services/EmployeeApiClient';

interface UseEmployeeListResult {
  employees: Employee[];
  loading: boolean;
  error: Error | null;
  totalPages: number;
  fetchEmployees: (page: number, pageSize: number) => Promise<void>;
}

export function useEmployeeList(apiPort: EmployeeApiPort): UseEmployeeListResult {
  throw new Error('TODO(reto): useEmployeeList');
}

// === ARCHIVO: src/features/employees/components/EmployeeList.tsx ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import React from 'react';
import { useEmployeeList } from '../hooks/useEmployeeList';
import { Employee } from '../models/Employee';
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography, Alert } from '@mui/material';

interface EmployeeListProps {
  apiPort: {
    getEmployees: (page: number, limit: number) => Promise<{ data: Employee[]; page: number; limit: number; total: number }>;
  };
}

export function EmployeeList({ apiPort }: EmployeeListProps): JSX.Element {
  throw new Error('TODO(reto): anonymous');
}

// === ARCHIVO: src/features/employees/hooks/useEmployeeSearch.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Employee } from '../models/Employee';

interface UseEmployeeSearchResult {
  query: string;
  setQuery: (query: string) => void;
  filteredEmployees: Employee[];
}

export function useEmployeeSearch(
  employees: Employee[],
  initialQuery: string = ''
): UseEmployeeSearchResult {
  throw new Error('TODO(reto): useEmployeeSearch');
}

// === ARCHIVO: src/features/employees/hooks/useEmployeeDetail.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState, useEffect, useCallback, useRef } from 'react';
import { Employee } from '../models/Employee';
import { EmployeeApiPort } from '../services/EmployeeApiClient';

interface UseEmployeeDetailResult {
  employee: Employee | null;
  loading: boolean;
  error: Error | null;
  fetchEmployee: (id: string) => Promise<void>;
}

const employeeCache = new Map<string, Employee>();

export function useEmployeeDetail(apiPort: EmployeeApiPort): UseEmployeeDetailResult {
  throw new Error('TODO(reto): useEmployeeDetail');
}

// === ARCHIVO: src/features/employees/hooks/useEmployeeForm.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import { useState } from 'react';
import { EmployeeFormData } from '../models/EmployeeFormData';
import { FormErrors } from '../models/FormErrors';
import { Employee } from '../models/Employee';

interface EmployeeApiPort {
  createEmployee(employee: EmployeeFormData): Promise<Employee>;
}

export function useEmployeeForm(apiPort: EmployeeApiPort): any {
  throw new Error('TODO(reto): useEmployeeForm');
}

// === ARCHIVO: src/features/employees/services/EmployeeApiClient.ts ===
// TODO(reto): archivo stubbeado; implementa los cuerpos.
import axios from '../../../config/axios';
import { Employee, PaginatedResponse } from '../models/Employee';
import { EmployeeFormData } from '../models/EmployeeFormData';

export interface EmployeeApiPort {
  getEmployees(page: number, pageSize: number): Promise<Employee[]>;
  getEmployee(id: string): Promise<Employee>;
  createEmployee(employee: EmployeeFormData): Promise<Employee>;
}

export class EmployeeApiClient implements EmployeeApiPort {
  private readonly baseUrl = '/api/employees';

  async getEmployees(page: number, pageSize: number): Promise<Employee[]> {
    throw new Error('TODO(reto): getEmployees');
  }

  async getEmployee(id: string): Promise<Employee> {
    throw new Error('TODO(reto): getEmployee');
  }

  async createEmployee(employee: EmployeeFormData): Promise<Employee> {
    throw new Error('TODO(reto): createEmployee');
  }
}

// === ARCHIVO: src/config/axios.ts ===
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('Error de respuesta:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Error de solicitud:', error.message);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;

// === ARCHIVO: src/app/router.tsx ===
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { EmployeeList } from '../features/employees/components/EmployeeList';
import { EmployeeApiClient } from '../features/employees/services/EmployeeApiClient';

const apiClient = new EmployeeApiClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <EmployeeList apiPort={apiClient} />,
  },
  {
    path: '/employees',
    element: <EmployeeList apiPort={apiClient} />,
  },
  {
    path: '/employees/:id',
    element: <EmployeeList apiPort={apiClient} />,
  },
  {
    path: '/employees/new',
    element: <EmployeeList apiPort={apiClient} />,
  },
]);

export { router };

// === ARCHIVO: src/app/theme.ts ===
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        fullWidth: true,
      },
    },
  },
});

export { theme };

// === ARCHIVO: src/features/employees/components/EmployeeForm.tsx ===
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Employee } from '../models/Employee';

interface EmployeeFormProps {
  onSubmit: (employee: Omit<Employee, 'id'>) => void;
  initialData?: Employee;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [position, setPosition] = useState(initialData?.position || '');
  const [department, setDepartment] = useState(initialData?.department || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(email)) {
      newErrors.email = 'El email no es válido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    onSubmit({
      name: name.trim(),
      email: email.trim(),
      position: position.trim(),
      department: department.trim(),
      phone: phone.trim(),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">{initialData ? 'Editar' : 'Nuevo'} Empleado</Typography>
      
      <TextField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        required
      />
      
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        required
      />
      
      <TextField
        label="Cargo"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        fullWidth
      />
      
      <TextField
        label="Departamento"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        fullWidth
      />
      
      <TextField
        label="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
      />
      
      <Button type="submit" variant="contained" color="primary">
        {initialData ? 'Actualizar' : 'Crear'}
      </Button>
    </Box>
  );
};

// === ARCHIVO: src/features/employees/components/EmployeePagination.tsx ===
import React from 'react';
import { Box, Pagination as MuiPagination, Typography } from '@mui/material';

interface EmployeePaginationProps {
  page: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

export const EmployeePagination: React.FC<EmployeePaginationProps> = ({
  page,
  total,
  limit,
  onPageChange,
}) => {
  const totalPages = Math.ceil(total / limit);

  if (total === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body1" color="text.secondary">
          No hay empleados para mostrar
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
      <MuiPagination
        count={totalPages}
        page={page}
        onChange={(_, value) => onPageChange(value)}
        color="primary"
        showFirstButton
        showLastButton
      />
    </Box>
  );
};
```
