import { Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../assets";
import AuthFormInput from "../../components/Inputs/Auth/AuthFormInput";
import authHttpRequest from "../../services/Auth.services";
import signUpValidationSchema from "./schema/signUpValidationSchema";

const initialSignUpFields = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
  username: "",
};

function SignUp() {
  const [signUpFormInputValues, setSignUpFormInputValues] =
    useState(initialSignUpFields);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { first_name, last_name, email, password, confirm_password, username } =
    signUpFormInputValues;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpFormInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSignUpForm(values, { resetForm }) {
    try {
      setLoading(true);
      const data = await authHttpRequest.signUp(values);
      toast.success(data);
      resetForm();
      navigate("/auth/signin");
    } catch (error) {
      toast.error(error?.response?.data?.error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <h1 className="text-3xl text-center font-semibold text-[var(--text-color)] my-10">
        Sign Up
      </h1>
      <div className="max-w-6xl items-center mx-4 lg:mx-auto grid grid-cols-1  lg:grid-cols-2 gap-6 my-10 bg-white p-10 rounded-xl shadow-md">
        {/* img */}
        <div>
          <img src={images.reg} alt="" />
        </div>

        {/* form */}

        <Formik
          initialValues={{
            first_name,
            last_name,
            username,
            password,
            email,
            confirm_password,
          }}
          validationSchema={signUpValidationSchema}
          onSubmit={handleSignUpForm}
          enableReinitialize
        >
          {({ errors, touched, values, handleBlur }) => (
            <Form className="flex flex-col space-y-5">
              <label htmlFor="username" className="relative flex flex-col">
                <AuthFormInput
                  value={values.username}
                  onBlur={handleBlur}
                  id="username"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Username"
                  name="username"
                  styles={
                    errors.username &&
                    touched.username &&
                    "border-red-500 focus:border-red-500 border-2"
                  }
                />
                {errors.username && touched.username && (
                  <span className="absolute -bottom-4 text-xs text-red-500">
                    {errors.username}
                  </span>
                )}
              </label>
              <label htmlFor="first_name" className="relative flex flex-col">
                <AuthFormInput
                  value={values.first_name}
                  onBlur={handleBlur}
                  id="first_name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  styles={
                    errors.first_name &&
                    touched.first_name &&
                    "border-red-500 focus:border-red-500 border-2"
                  }
                />
                {errors.first_name && touched.first_name && (
                  <span className="absolute -bottom-4 text-xs text-red-500">
                    {errors.first_name}
                  </span>
                )}
              </label>
              <label htmlFor="last_name" className="relative flex flex-col">
                <AuthFormInput
                  value={values.last_name}
                  onBlur={handleBlur}
                  id="last_name"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  styles={
                    errors.last_name &&
                    touched.last_name &&
                    "border-red-500 focus:border-red-500 border-2"
                  }
                />
                {errors.last_name && touched.last_name && (
                  <span className="absolute -bottom-4 text-xs text-red-500">
                    {errors.last_name}
                  </span>
                )}
              </label>
              <label htmlFor="email" className="relative flex flex-col">
                <AuthFormInput
                  value={values.email}
                  onBlur={handleBlur}
                  id="email"
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Email"
                  name="email"
                  styles={
                    errors.email &&
                    touched.email &&
                    "border-red-500 focus:border-red-500 border-2"
                  }
                />
                {errors.email && touched.email && (
                  <span className="absolute -bottom-4 text-xs text-red-500">
                    {errors.email}
                  </span>
                )}
              </label>
              <label htmlFor="password" className="relative flex flex-col">
                <AuthFormInput
                  value={values.password}
                  onBlur={handleBlur}
                  id="password"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Password"
                  name="password"
                  styles={
                    errors.password &&
                    touched.password &&
                    "border-red-500 focus:border-red-500 border-2"
                  }
                />
                {errors.password && touched.password && (
                  <span className="absolute -bottom-4 text-xs text-red-500">
                    {errors.password}
                  </span>
                )}
              </label>
              <label
                htmlFor="confirm_password"
                className="relative flex flex-col"
              >
                <AuthFormInput
                  value={values.confirm_password}
                  onBlur={handleBlur}
                  id="confirm_password"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  styles={
                    errors.confirm_password &&
                    touched.confirm_password &&
                    "border-red-500 focus:border-red-500 border-2"
                  }
                />
                {errors.confirm_password && touched.confirm_password && (
                  <span className="absolute -bottom-4 text-xs text-red-500">
                    {errors.confirm_password}
                  </span>
                )}
              </label>

              <p>
                Already have an account ?{" "}
                <Link className="btn btn-link p-0" to="/auth/signin">
                  Sign In
                </Link>
              </p>
              {loading ? (
                <button className="btn btn-success text-white">
                  <span className="loading loading-spinner "></span>
                  loading
                </button>
              ) : (
                <button
                  disabled={loading}
                  className="btn btn-success text-white"
                  type="submit"
                >
                  Sign up
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}

export default SignUp;
