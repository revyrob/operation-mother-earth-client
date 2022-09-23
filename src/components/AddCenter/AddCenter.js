import { Formik, Field, Form } from "formik";
import "./AddCenter.scss";

function AddCenter() {
  return;
  // <Grid container>
  //   <Grid item xs={12}>
  //     <h3 className="addCenter__title" id="addCenter">
  //       Add a Center
  //     </h3>
  //     <Grid item xs={12}>
  //       <Container maxWidth="md">
  //         <div className="addCenter__wrapper"></div>
  //       </Container>
  //     </Grid>
  //   </Grid>
  // </Grid>
  // <Formik
  //   initialValues={{ name: "", street: "", city: "", country: "" }}
  //   onSubmit={async (values) => {
  //     await new Promise((resolve) => setTimeout(resolve, 500));
  //     alert(JSON.stringify(values, null, 2));
  //   }}
  // >
  //   <Form className="form__div">
  //     <label>
  //       Business Name:
  //       <Field name="name" type="text" placeholder="..." />
  //     </label>
  //     <label>
  //       Street:
  //       <Field name="street" type="text" placeholder="Street and number" />
  //     </label>
  //     <label>
  //       City:
  //       <Field name="city" type="text" placeholder="..." />
  //     </label>
  //     <label>
  //       Country:
  //       <Field name="country" type="text" placeholder="..." />
  //     </label>
  //     <button type="submit">Submit</button>
  //   </Form>
  // </Formik>
}

export default AddCenter;
