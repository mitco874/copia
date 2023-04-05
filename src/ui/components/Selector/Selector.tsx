import { FC, ChangeEvent } from "react"

import { Box, InputLabel, MenuItem, TextField } from "@mui/material"
import { FilterOptions } from "../../../interfaces";

interface Props {
    value: string
    label: string;
    options: FilterOptions[];
    onValueChange: ( newValue: string ) => void;
}

export const Selector: FC<Props> = ({ value, label, options, onValueChange }) => {

    const updateValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        onValueChange(event.target.value);
    }
    
  return (
  <Box display="flex" flexDirection="column">
    <InputLabel>
        {label}
    </InputLabel>
    <TextField
        select
        variant="outlined"
        size="small"
        defaultValue={value}
        onChange={updateValue}
    >
        {
        options.map(
            (option, index)=>(
                <MenuItem key={index} value={option.value} >
                    {option.name}
                </MenuItem>
        ))
        }

    </TextField>
  </Box>

  )
}
