import { Box, Grid, Typography } from "@mui/material";

import { EmployeesTable, FilterEmployeesOptions } from "../../components";
import { useContext, useEffect } from "react";
import { EmployeeContext } from "../../../context";

export const ReviewEmployeesPage = () => {

  const { loadEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    loadEmployees()
  }, [loadEmployees])
  
  return (
    <Box  >
        <Typography variant='h3' component='h2' my="10px">Employees</Typography>
        <Grid container >
            <Grid item xs={12} display="flex" flexDirection="column" alignItems="center">
                <FilterEmployeesOptions/>
                <EmployeesTable/>
            </Grid>
        </Grid>
    </Box>
  )
}
