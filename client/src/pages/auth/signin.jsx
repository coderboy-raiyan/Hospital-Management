/* eslint-disable react/no-unescaped-entities */
import { Form, Formik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { images } from "../../assets";
import AuthFormInput from "../../components/Inputs/Auth/AuthFormInput";
import authHttpRequest from "../../services/Auth.services";
import signInValidationSchema from "./schema/signInValidationSchema";

const initialSignInFields = {
  password: "",

  username: "",
};

function SignUp() {
  const [signInFormInputValues, setSignInFormInputValues] =
    useState(initialSignInFields);

  const { password, username } = signInFormInputValues;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignInFormInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSignInForm(values, { resetForm }) {
    try {
      setLoading(true);
      const data = await authHttpRequest.signIn(values);
      toast.success("Logged in successfully");
      console.log(data);
      localStorage.setItem("token", data?.token);
      localStorage.setItem("user_id", data?.user_id);
      resetForm();
      navigate("/");
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
        Sign In
      </h1>
      <div className="max-w-6xl items-center mx-4 lg:mx-auto grid grid-cols-1  lg:grid-cols-2 gap-6 my-10 bg-white p-10 rounded-xl shadow-md">
        {/* img */}
        <div>
          <img src={images.login} alt="" />
        </div>

        {/* form */}

        <Formik
          initialValues={{
            username,
            password,
          }}
          validationSchema={signInValidationSchema}
          onSubmit={handleSignInForm}
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

              <p>
                Don't have an account ?{" "}
                <Link className="btn btn-link p-0" to="/auth/signup">
                  Sign up
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
                  Sign In
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
