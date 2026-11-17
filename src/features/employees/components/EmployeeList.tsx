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