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