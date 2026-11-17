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