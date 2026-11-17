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