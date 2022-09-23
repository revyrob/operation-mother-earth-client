import React from "react";
import { Formik, Form, Field } from "formik";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

function PracticeForm() {
  //   const { REACT_APP_API_SERVER_URL } = process.env;
  //refresh page function
  const refreshPage = () => {
    window.location.reload();
  };
  //event handler for creating new comment
  const handleComment = (event) => {
    event.preventDefault();
    const businessName = event.target.business.value;
    const address = event.target.streetAddress.value;
    const city = event.target.city.value;

    axios
      .post(`http://localhost:8080/recycling`, {
        businessName: businessName,
        address: address,
        city: city,
      })
      .then((response) => {
        if (businessName !== "" && address !== "" && city !== "") {
          alert("Thanks for adding to our list!");
        } else {
          alert("You have not filled out the required input.");
        }
      })
      .catch((err) => console.log(err));
    setTimeout(() => {
      refreshPage();
    }, "500");
  };
  return (
    <>
      <Formik
        initialValues={{ name: "", street: "", city: "", country: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form method="post" onSubmit={handleComment}>
          <h2>Add Center</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="business"
                required
                fullWidth
                id="business"
                label="Business Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="streetAddress"
                label="Street Address"
                name="streetAddress"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="city"
                label="City"
                name="city"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit Business
          </Button>
        </Form>
      </Formik>
    </>
  );
}
export default PracticeForm;
