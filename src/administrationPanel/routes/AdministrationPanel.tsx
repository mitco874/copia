import { Grid } from "@mui/material"
import { Routes, Route } from "react-router-dom"

import { NavBar } from "../../ui/components"
import { RegisterEmployeePage, ReviewEmployeesPage } from "../pages"
import { AdministrationSideBar } from "../components";

export const AdministrationPanel = () => {
  return (
    <>      
        <NavBar title="Control system app"/>
        <Grid container spacing={1} >
          <Grid item xs={12} sm={3} md={2}>
              <AdministrationSideBar/>  
          </Grid>
          
          <Grid item xs={12} sm={9} md={10}>
            <Routes>
                <Route path="/register-employee" element={<RegisterEmployeePage/>} />
                <Route path="/employees" element={<ReviewEmployeesPage/>} />
            </Routes>
          </Grid>
        </Grid>
    </>
  )
}
