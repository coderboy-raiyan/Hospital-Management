import { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets";

function SignUp() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
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
    if (formData.password !== formData.confirm_password) {
      console.log("Password and confirm password did'nt match!!");
    }
    if (
      !/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/.test(
        formData.password
      )
    ) {
      console.log("");
    }
    console.log(formData);
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
            placeholder="Email"
            name="email"
          />
          <input
            onChange={handleFormChange}
            className="input input-bordered w-full"
            required
            placeholder="First Name"
            name="first_name"
          />
          <input
            onChange={handleFormChange}
            className="input input-bordered w-full"
            required
            placeholder="Last Name"
            name="last_name"
          />
          <input
            onChange={handleFormChange}
            className="input input-bordered w-full"
            required
            type="password"
            placeholder="Password"
            name="password"
          />
          <input
            onChange={handleFormChange}
            className="input input-bordered w-full"
            required
            type="password"
            placeholder="Confirm Password"
            name="confirm_password"
          />
          <p>
            Already have an account ?{" "}
            <Link className="btn btn-link p-0" to="/auth/signin">
              Sign In
            </Link>
          </p>
          <button className="btn btn-success text-white" type="submit">
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
}

export default SignUp;
