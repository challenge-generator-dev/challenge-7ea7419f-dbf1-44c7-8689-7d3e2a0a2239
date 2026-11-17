import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { Employee } from '../models/Employee';

interface EmployeeFormProps {
  onSubmit: (employee: Omit<Employee, 'id'>) => void;
  initialData?: Employee;
}

export const EmployeeForm: React.FC<EmployeeFormProps> = ({ onSubmit, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [position, setPosition] = useState(initialData?.position || '');
  const [department, setDepartment] = useState(initialData?.department || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validate = (): boolean => {
    const newErrors: { name?: string; email?: string } = {};
    
    if (!name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(email)) {
      newErrors.email = 'El email no es válido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    onSubmit({
      name: name.trim(),
      email: email.trim(),
      position: position.trim(),
      department: department.trim(),
      phone: phone.trim(),
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6">{initialData ? 'Editar' : 'Nuevo'} Empleado</Typography>
      
      <TextField
        label="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        required
      />
      
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        required
      />
      
      <TextField
        label="Cargo"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        fullWidth
      />
      
      <TextField
        label="Departamento"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        fullWidth
      />
      
      <TextField
        label="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
      />
      
      <Button type="submit" variant="contained" color="primary">
        {initialData ? 'Actualizar' : 'Crear'}
      </Button>
    </Box>
  );
};