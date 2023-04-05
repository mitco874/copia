import { Employee } from '../../interfaces';
import { EmployeeState } from '../';

type EmployeeAction=
| { type: '[Employee] - load employees', payload: Employee[]}

export const EmployeeReducer = ( state: EmployeeState , action: EmployeeAction ): EmployeeState => {

     switch ( action.type ) {
        case "[Employee] - load employees":
            return { 
                ...state,
                employees: action.payload
            };

          default:
               return state;
     }
}