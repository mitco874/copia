import { FC, useReducer } from 'react';
import { EmployeeContext, EmployeeReducer } from '../';
import { Employee } from '../../interfaces';
import { apiMethods } from '../../utils';

export interface EmployeeState {
    employees: Employee[];
}

const EMPLOYEE_INITIAL_STATE: EmployeeState={
    employees: []
}

interface Props{
     children: React.ReactNode
}

export const EmployeeProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( EmployeeReducer, EMPLOYEE_INITIAL_STATE );

    const loadEmployees = async() => {
        const { data } = await apiMethods.get("/api/v1/employee");
        dispatch({ type: "[Employee] - load employees" , payload: data});
    }

    const removeEmployee = async( employeeId: number ): Promise<void>=> {
        await apiMethods.remove(`/api/v1/employee/${employeeId}`);
    }

    const updateEmployee = async( employeeId: number, updateEmployeeBody: any): Promise<void>=> {
        await apiMethods.put(`/api/v1/employee/${employeeId}`,updateEmployeeBody);
    }

    return (
        <EmployeeContext.Provider value={{ 
            ...state, 
            loadEmployees,
            removeEmployee,
            updateEmployee
            }} >
            {children}
        </EmployeeContext.Provider>
    )
}

