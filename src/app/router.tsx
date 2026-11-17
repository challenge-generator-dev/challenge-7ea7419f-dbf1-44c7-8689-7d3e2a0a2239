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