import React from "react";
import { Formik, Form, Field } from "formik";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import axios from "axios";
import "./PracticeForm.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "react-bootstrap/Modal";
import Button1 from "react-bootstrap/Button";

function PracticeForm() {
  //   const { REACT_APP_API_SERVER_URL } = process.env;
  //refresh page function
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          // alert("Thanks for adding to our list!");
          setShow(true);
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
    <section className="form__section">
      <Formik
        initialValues={{ name: "", street: "", city: "", country: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="form" method="post" onSubmit={handleComment}>
          <h1 className="form__header">Add a E-waste Center</h1>
          <div className="form__form">
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
            <Link to="/">
              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Go to HomePage
              </Button>
            </Link>
          </div>
        </Form>
      </Formik>

      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>Thanks!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Recycling e-waste is important and we thank-you!
        </Modal.Body>
        <Modal.Footer>
          <Button1 variant="primary" onClick={handleClose}>
            Ok👌
          </Button1>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
export default PracticeForm;
