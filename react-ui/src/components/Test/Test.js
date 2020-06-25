import React, { Component, useState } from "react";
import OtpInput from "react-otp-input";
import { TextField, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function Test() {
  function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
      setValue(e.target.value);
    }
    return {
      value: value,
      onChange: handleChange,
    };
  }

  function useFormInput(initialValue, type = "text") {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState("");
    const typeForField = type;
    function handleChange(e) {
      setError(false);
      setHelperText("");
      setValue(e.target.value);
    }
    return {
      typeForField: typeForField,
      value: value,
      onChange: handleChange,
      error: error,
      setError: setError,
      helperText: helperText,
      setHelperText: setHelperText,
    };
  }

  const organizationName = useFormInput("");
  const registererName = useFormInput("");
  const [orgState, setOrgState] = React.useState(true);
  const [org, setOrgName] = React.useState({
    name: "",
  });

  const top100Films = [{ name: "The Shawshank Redemption" }];

  const Testing = (props) => {
    console.log(props.orgState);
    if (props.orgState) {
      return (
        <div>
          {console.log(
            "Render function ran ",
            organizationName.value,
            registererName.value
          )}
          <Grid container spacing={2}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <TextField
                {...registererName}
                variant="outlined"
                required
                fullWidth
                id="registererName"
                label="Name of Registerer"
                name="registererName"
                autoComplete="registererName"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                id="combo-box-demo"
                value={org}
                onChange={(event, value, reason) => {
                  setOrgName(value);
                }}
                options={top100Films}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    error={true}
                    helperText={"adas"}
                    label="Combo box"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
        </div>
      );
    }
  };

  return <div>{Testing({ orgState })}</div>;
}

export default Test;
