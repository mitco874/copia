import { FilterState } from '../';

type FilterAction=
| { type: '[Filter] - update vaccine state', payload: string}
| { type: '[Filter] - update vaccine type', payload: string}
| { type: '[Filter] - update start date', payload: string}
| { type: '[Filter] - update end date', payload: string }
| { type: '[Filter] - clear range date' }

export const FilterReducer = ( state: FilterState , action: FilterAction ): FilterState => {

     switch ( action.type ) {
        case "[Filter] - update vaccine state":
            return { 
                ...state,
                vaccinationState: action.payload
            };

        case "[Filter] - update vaccine type":
            return { 
                ...state,
                vaccineType: action.payload
            };

        case "[Filter] - update start date":
            return { 
                ...state,
                startDate: action.payload
            };

        case "[Filter] - update end date":
            return { 
                ...state,
                endDate: action.payload
            };
 
        case "[Filter] - clear range date":
            return { 
                ...state,
                startDate: "",
                endDate: ""
            };

          default:
               return state;
     }

}