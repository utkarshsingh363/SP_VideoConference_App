import React, { Component, useState } from 'react';
import OtpInput from "react-otp-input";
import { TextField, Grid } from '@material-ui/core';



function Test() {

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue)

        function handleChange(e) {
            setValue(e.target.value)
        }
        return {
            value: value,
            onChange: handleChange
        };
    }

    const organizationName = useFormInput("")
    const registererName= useFormInput("")

    if(true){
    return (
        
        <div>
            {console.log("Render function ran ",organizationName.value,registererName.value)}
            <Grid container spacing={2} >
            <Grid item xs={12}  >
            <TextField
                {...organizationName}
                autoComplete="organizationName"
                name="organizationName"
                variant="outlined"
                required
                fullWidth
                id="organizationName"
                label="Name of Organization"
            />
            </Grid>
            <Grid item xs={12}  >
              <TextField
                {...registererName  }
                variant="outlined"
                required
                fullWidth
                id="registererName"
                label="Name of Registerer"
                name="registererName"
                autoComplete="registererName"
              />
              </Grid>
            </Grid>

        </div>
        
    );
    }

}

export default Test;