import * as Yup from "yup";

const signUpValidationSchema = Yup.object().shape({
  username: Yup.string().required("This filed is required"),
  first_name: Yup.string().required("This filed is required"),
  last_name: Yup.string().required("This filed is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("This filed is required"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Password must be 8 or more characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])\w+/,
      "Password should contain at least one uppercase and lowercase character"
    )
    .matches(/\d/, "Password should contain at least one number")
    .matches(
      /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
      "Password should contain at least one special character"
    ),
  confirm_password: Yup.string().when("password", (password, field) => {
    if (password) {
      return field
        .required("The password do not match")
        .oneOf([Yup.ref("password")], "The passwords do not match");
    }
  }),
});

export default signUpValidationSchema;
