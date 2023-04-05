
import { Box} from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams} from '@mui/x-data-grid';

import { employeesDataDB } from "../../../db/employees";
import { Employee } from "../../../interfaces"
import { EmployeeBasicInfo, EmployeeContactInfo, EmployeOptions, EmployeeVacStatus } from "../";
import "./EmployeesTable.css"

const employeesData: Employee[] = employeesDataDB as Employee[];

const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width:10 },
    { 
        field: "basicInfo", 
        headerName: "Basic information", 
        width: 200,
        sortable: false,  
        renderCell: (params: GridRenderCellParams) => (
                <EmployeeBasicInfo 
                    identityCard={params.row.basicInfo.identityCard} 
                    fullName={params.row.basicInfo.fullName} 
                    address={params.row.basicInfo.address} 
                />
            )
    },
    { 
        field: "contactInfo", 
        headerName: "Contact", 
        width: 200,
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <EmployeeContactInfo 
                email={params.row.contactInfo.email} 
                phone={params.row.contactInfo.phone}
            />
        )
    },
    { 
        field: "vaccinationStatus",
        headerName: "Vaccination status", 
        width: 160, 
        sortable: false,
        renderCell: (params: GridRenderCellParams) => (
            <EmployeeVacStatus status={params.row.vaccinationStatus} />
        )
    },
    { field: "typeOfVaccine", headerName: "Type of vaccine", width: 150, sortable: false },
    { field: "numberOfDoses", headerName: "Doses", width: 80, sortable: false },
    { field: "vaccinationDate", headerName: "Vaccination date", width: 150, sortable: false },
    { 
        field: "options", 
        headerName: "Options", 
        width: 140,
        renderCell: (params: GridRenderCellParams) => (
            <EmployeOptions employeId={params.row.basicInfo.identityCard} />
        )
    }
];


export const EmployeesTable = () => {
    const rows = employeesData.map( (employee:Employee) => ({
        id: employee.id,
        basicInfo: { 
            fullName: employee.fullName,
            identityCard: employee.identityCard,
            address: employee.address
        },
        contactInfo: {
            email: employee.email,
            phone: employee.phone
        },
        vaccinationStatus: employee.vaccinationStatus,
        typeOfVaccine: employee.typeOfVaccine,
        vaccinationDate: employee.vaccinationDate,
        numberOfDoses: employee.numberOfDoses
    }))

  return (
    <Box className="employees-table">
        <DataGrid 
            
            rows={ rows }
            columns={ columns }
            rowHeight={80}
            pageSizeOptions={[]}
        />
    </Box>
  )
}
