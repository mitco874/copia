import { AppBar, Toolbar, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
    title: string
}

export const NavBar: FC<Props>= ({title}) => {
  return (
    <AppBar position="sticky">
        <Toolbar >

            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0zoEI0fhI8N5-2qC35jCUOfpXBZz9FjBEJxqY80CvzdRX8Zrzo6CC-C0MQQpkz8aYDIM&usqp=CAU" 
                alt="system logo" 
                height="50" 
                width="50"
            />

            <Typography mr="20px" variant="h3" >
                {title}
            </Typography>
        </Toolbar>
    </AppBar>
  )
}
