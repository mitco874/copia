import { createContext } from 'react';
import { Employee } from '../../interfaces';

interface ContextProps{
    employees: Employee[];
    loadEmployees: () => Promise<void>;
    removeEmployee: (employeeId: number) => Promise<void>;
    updateEmployee: (employeeId: number, updateEmployeeBody: any) => Promise<void>;   
}

export const EmployeeContext =createContext({} as ContextProps );