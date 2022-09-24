import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./PracticeForm.scss";
import ButtonBar from "../ButtonBar/ButtonBar";

function PracticeForm() {
  //   const { REACT_APP_API_SERVER_URL } = process.env;
  //refresh page function
  const refreshPage = () => {
    window.location.reload();
  };
  //event handler for creating new comment
  const handleComment = (event) => {
    event.preventDefault();
    const business = event.target.business.value;
    const address = event.target.streetAddress.value;
    const city = event.target.city.value;

    axios
      .post(`http://localhost:8080/recycling`, {
        business: business,
        address: address,
        city: city,
      })
      .then((response) => {
        if (business !== "" && address !== "" && city !== "") {
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
          <ButtonBar text={"Add E-Waste Center"} />
          <div className="form">
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
              + Add to Database
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
}
export default PracticeForm;
