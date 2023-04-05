import {useState} from "react";
import { useForm } from "react-hook-form";

import { Box, Button, TextField, Typography } from "@mui/material";

import { FormField } from "../../../ui/components";
import { RegisterVaccinationModal } from "../../components/RegisterVaccinationModal/RegisterVaccinationModal";
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';


type FormData = {
  birthdate: string;
  address: string;
  phone: string;
}

const initialFormValues = {
  birthdate: "",
  address: "",
  phone: "",
}

export const UpdateProfilePage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ defaultValues: initialFormValues});
  
  const [isRegisterVacModalOpen, setIsRegisterVacModal] = useState(false);
  const handleOpenModal = () => setIsRegisterVacModal(true);
  const handleCloseModal = () => setIsRegisterVacModal(false);

  const onSubmitLogin = ( data: FormData ) => {

  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      marginTop="10px"

    >
      <Typography 
        variant="h3" 
        component="h1"
        margin="auto"
        marginY="10px"
      > Update profile information</Typography>

          <form 
            className="register-employee-form" 
            noValidate
            onSubmit={ handleSubmit(onSubmitLogin) }
          >
            <Box  display="flex"  flexDirection="column" width="40%" margin="auto">
                  <TextField
                        label="Birth date*:"
                        variant="outlined"
                        type="date"
                        { ...register("birthdate", {
                          required: "This field is required",
                        })}
                        error={!!errors.birthdate}
                        helperText={ errors.birthdate?.message }
                  />

                  <TextField 
                      label="Address*:"
                      variant="outlined"
                      type="text" 
                      { ...register("address", {
                        required: "This field is required",
                      })}
                      error={!!errors.address}
                      helperText={ errors.address?.message }
                  />

                <TextField 
                    label="Phone*:"
                    variant='outlined'
                    type="text" 
                    { ...register("phone", {
                      required: "This field is required",
                    })}
                    error={!!errors.phone}
                    helperText={errors.phone?.message }
                />

                <Button 
                    startIcon={<MedicalInformationIcon/>}
                    type="submit"
                    variant="outlined"
                    color="info"
                    onClick={handleOpenModal}
                > 
                    Add immunization record 
                </Button>

              <Box marginTop="20px">

                  <Button type="submit" variant="contained">
                    Update
                  </Button>

              </Box>
        </Box>
      </form>

      <RegisterVaccinationModal
        isOpen={isRegisterVacModalOpen}
        handleClose={handleCloseModal}
      />  

    </Box>
  )
}
