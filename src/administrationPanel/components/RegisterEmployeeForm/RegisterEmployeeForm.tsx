import { Alert, Box, Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ApiResponse, RegisterUserForm } from "../../../interfaces";
import { apiMethods, validations } from "../../../utils";

const initialFormValues: RegisterUserForm = {
    identityCard: "",
    name: "",
    lastName: "",
    email: "",
}

interface RegisteEmployeeStatus {
    success: boolean;
    message: string;
}

export const RegisterEmployeeForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterUserForm>({ defaultValues: initialFormValues});
    
    const [registerStatus, setRegisterStatus] = useState<RegisteEmployeeStatus>({ success: false, message:"" }); 
    const [isNotificationOpen, setIsNotificationOpen] = useState<boolean>(false);
    const onOpenNotification = () => setIsNotificationOpen(true);
    const onCloseNotification = () => setIsNotificationOpen(false);

    const onRegisterEmployee = async( formValues: RegisterUserForm ) => {
        try {
            const { data } = await apiMethods.post("/api/v1/employee",formValues) as {data: ApiResponse};

            setRegisterStatus({ 
                success: true, 
                message: `The new user was created with email: ${data.data.email} \n and password: ${data.data.password} `
            })
            } 
        catch (error) {
            setRegisterStatus({ 
                success: false, 
                message: "Something happened, internal server error"
            })
        }
        finally{
            onOpenNotification();
        }
    }

  return (
    <form 
        className="register-employee-form" 
        noValidate
        onSubmit={ handleSubmit(onRegisterEmployee) }
    >
        <Box
            display="flex"
            flexDirection="column"
            margin="auto"
            width="60%"
        >

            <Snackbar 
                open={isNotificationOpen} 
                autoHideDuration={6000} 
            >
                <Alert 
                    onClose={onCloseNotification} 
                    severity={registerStatus.success? "success": "error"} 
                    sx={{ width: '100%' }}
                >
                    {registerStatus.message}
                </Alert>
            </Snackbar>


            <TextField 
                label="Identity card*:"
                variant='filled'
                type="text"
                size="small"
                { ...register("identityCard", {
                    required: "This field is required",
                    validate: validations.isIdentityCard,
                    maxLength: { value: 10, message: 'The identity card must contain ten characters' },
                    minLength: { value: 10, message: 'The identity card must contain ten characters' }
                })}
                error={!!errors.identityCard}
                helperText={ errors.identityCard?.message } 
            />


            <TextField 
                label="Email*:"
                variant='filled'
                type="email" 
                size="small"
                { ...register("email", {
                    required: "This field is required",
                    validate: validations.isEmail,
                })}
                error={!!errors.email}
                helperText={ errors.email?.message }
            />

            <TextField 
                label="Name*:" 
                variant='filled'
                type="text" 
                size="small"
                { ...register("name", {
                    required: "This field is required",
                    validate: validations.isNameOrLastName,
                })}
                error={!!errors.name}
                helperText={ errors.name?.message }
            />

            <TextField
                label="Last name*:"     
                variant='filled'
                type="text" 
                size="small"
                { ...register("lastName", {
                    required: "This field is required",
                    validate: validations.isNameOrLastName,
                })}
                error={!!errors.lastName}
                helperText={ errors.lastName?.message }
            />

            <Button variant="contained" type='submit' className="submit-btn">
                Register 
            </Button>

        </Box>
  </form>
  )
}
