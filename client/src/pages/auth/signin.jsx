/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets";

function SignIn() {
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });

  function handleFormChange(e) {
    const { value, name } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function submitForm(e) {
    e.preventDefault();
    console.log(formData);
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
        <form onSubmit={submitForm} className="flex flex-col space-y-4">
          <input
            onChange={handleFormChange}
            className="input input-bordered w-full"
            required
            placeholder="Username"
            name="username"
          />

          <input
            onChange={handleFormChange}
            className="input input-bordered w-full"
            required
            placeholder="Password"
            name="password"
          />

          <p>
            Don't have an account ?{" "}
            <Link className="btn btn-link p-0" to="/auth/signup">
              Sign Up
            </Link>
          </p>
          <button className="btn btn-success text-white" type="submit">
            Sign in
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignIn;
