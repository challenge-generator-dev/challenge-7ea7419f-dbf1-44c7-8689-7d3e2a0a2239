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