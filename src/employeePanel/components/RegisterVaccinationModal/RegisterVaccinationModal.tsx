import { FC, useState} from "react"
import { Button, Grid, InputLabel, Modal, TextField, Typography } from "@mui/material";
import { Selector } from "../../../ui/components";
import { vaccinationTypeOptions } from "../../../db/vaccinationType";

import "./RegisterVaccinationModal.css"

interface Props {
    isOpen: boolean;
    handleClose?: ()=> void; 
}

export const RegisterVaccinationModal: FC<Props> = ({ isOpen = false, handleClose }) => {

    const [vaccineType, setVaccineType] = useState("");

    const onVacTypeChange = ( newValue: string ): void => {
        setVaccineType(newValue);
      }

  return (
      <Modal
        open={isOpen}
        onClose={handleClose}
      >

        <Grid container 
          className="register-vaccination-modal" 
          width="400px"
          display="flex" 
          padding="20px"
          spacing={1}
        >
            <Grid item xs={8}>
                <Typography variant="h4" component="h2" > 
                    Enter the following data: 
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Selector 
                    label='Vaccine type*:' 
                    options={vaccinationTypeOptions} 
                    value={vaccineType}
                    onValueChange={onVacTypeChange}
                />
            </Grid>

            <Grid item xs={6}>
                <InputLabel>
                    Vaccination date*:
                </InputLabel>
                <TextField
                    fullWidth
                    variant="outlined"
                    type="date"
                    size="small"
                />
            </Grid>

            <Grid item xs={6}>
                <InputLabel>
                    Number of doses*:
                </InputLabel>
                <TextField
                    variant="outlined"
                    fullWidth
                    size="small"
                    placeholder="Number of doses*:" 
                    type="number" 
                    inputProps={{ min:1, max:5 }}
                />
            </Grid>

            <Grid item >
                <Button 
                    variant="contained" 
                    size="small"
                    onClick={handleClose}
                >
                    Accept
                </Button>
            </Grid>

            <Grid item display="flex">
                <Button 
                    variant="contained" 
                    color="error" 
                    onClick={handleClose}
                    size="small"
                >
                    Cancel
                </Button>
            </Grid>

        </Grid>
      </Modal>

  )
}
