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