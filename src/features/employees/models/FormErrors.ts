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