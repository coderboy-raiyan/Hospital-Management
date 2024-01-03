import * as Yup from "yup";

const signInValidationSchema = Yup.object().shape({
  username: Yup.string().required("This filed is required"),
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
});

export default signInValidationSchema;
