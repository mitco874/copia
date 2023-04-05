import { FC, useReducer, useEffect } from 'react';
import { FilterContext, FilterReducer } from '../';
import { employeesApi } from '../../api';

export interface FilterState {
    vaccinationState: string ,
    vaccineType: string ,
    startDate: string ,
    endDate: string 
}

const FILTER_INITIAL_STATE: FilterState={
    vaccinationState: "",
    vaccineType: "",
    startDate: "",
    endDate: ""
}

interface Props{
     children: React.ReactNode
}

export const FilterProvider:FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( FilterReducer, FILTER_INITIAL_STATE );

    const updateVaccineState = (newState: string) => {
        dispatch({ type: '[Filter] - update vaccine state' , payload: newState});
    }

    const updateVaccineType = (newType: string) => {
        dispatch({ type: '[Filter] - update vaccine type' , payload: newType});
    }

    const updateStartDate = (newDate: string) => {
        dispatch({ type: '[Filter] - update start date' , payload: newDate});
    }

    const updateEndDate = (newDate: string) => {
        dispatch({ type: '[Filter] - update end date' , payload: newDate});
    }

    const clearRangeDate = () => {
        dispatch({ type: '[Filter] - clear range date'});
    }

    const fetchEmployeesData = async () => {
        const apiResponse = await employeesApi.get("");
        console.log(apiResponse)
    }


    useEffect(() => {
        fetchEmployeesData();

        const { vaccinationState, vaccineType, startDate, endDate } = state;

        let query = `` 
        if(vaccinationState !== ""){
            query=query + `vac-state=${vaccinationState}&`
        }

        if(vaccineType !== ""){
            query=query + `vac-type=${vaccineType}&`
        }
        if(startDate !=="" && endDate !== ""){
            query=query + `start-date=${startDate}&end-date=${endDate}`
        }
 
        console.log(`${process.env.REACT_APP_BACKEND_URL}/api/v1/employee?${query}`)

    }, [ state ])
    
    return (
        <FilterContext.Provider value={{ 
            ...state, 
            updateVaccineState,
            updateVaccineType,
            updateStartDate,
            updateEndDate,
            clearRangeDate
            }} >
            {children}
        </FilterContext.Provider>
    )
}

