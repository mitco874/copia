export interface Employee{
    id: number;
    fullName: string;
    identityCard: number; 
    email: string;
    dateBirth: string;    //ToDo: check type
    address: string;
    phone: string;
    vaccinatedState: vaccinatedState;
    vaccineType: vaccineType;
    vaccinationDate: string | null;  //ToDo: check type
    doses: number | null;
}

export type vaccinatedState = boolean | -1;

export type vaccineType = "Sputnik" | "AstraZeneca" | "Pfizer" | "Jhonson&Jhonson" | -1;