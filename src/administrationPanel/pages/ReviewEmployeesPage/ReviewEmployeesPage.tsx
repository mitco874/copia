import { Box, Grid, Typography } from "@mui/material";

import { EmployeesTable, FilterEmployeesOptions } from "../../components";

export const ReviewEmployeesPage = () => {

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
