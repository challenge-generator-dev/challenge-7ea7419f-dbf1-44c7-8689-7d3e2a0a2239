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