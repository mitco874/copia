import { createContext } from 'react';

interface ContextProps{
    vaccinationState: string ;
    vaccineType: string ;
    startDate: string ;
    endDate: string ;
    updateVaccineState: (newState: string) => void;
    updateVaccineType: (newType: string) => void;
    updateStartDate: (newDate: string) => void;
    updateEndDate: (newDate: string) => void;
    clearRangeDate: () => void;
}

export const FilterContext =createContext({} as ContextProps );