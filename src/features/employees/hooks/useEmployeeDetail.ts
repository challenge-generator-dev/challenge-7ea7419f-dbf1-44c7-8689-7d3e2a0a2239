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