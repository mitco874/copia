export interface Employee{
    id: number;
    fullName: string;
    identityCard: number; 
    email: string;
    dateBirth: string;    //ToDo: check type
    address: string;
    phone: string;
    vaccinationStatus: boolean;
    typeOfVaccine: typeOfVaccine | null;
    vaccinationDate: string | null;  //ToDo: check type
    numberOfDoses: number | null;
}

type typeOfVaccine = "Sputnik" | "AstraZeneca" | "Pfizer" | "Jhonson&Jhonson";