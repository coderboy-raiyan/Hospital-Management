import { Link, NavLink } from "react-router-dom";
import { images } from "../../assets";

function Header() {
  return (
    <header className=" sticky z-50 top-0">
      <nav className="bg-gray-100 shadow">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl py-4">
          <Link to="/">
            <div className="logo-container flex items-center space-x-2">
              <img src={images.logo} alt="" />
              <h3 className="text-2xl font-semibold">SmartCare</h3>
            </div>
          </Link>
          <ul className="menu-container flex space-x-6 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--text-color)] font-semibold"
                      : "text-black"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--text-color)] font-semibold"
                      : "text-black"
                  }`
                }
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink>Contact us</NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/signup"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--text-color)] font-semibold"
                      : "text-black"
                  }`
                }
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth/signin"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-[var(--text-color)] font-semibold"
                      : "text-black"
                  }`
                }
              >
                <button className="bg-[var(--text-color)] py-2 px-5 rounded-xl text-white text-sm">
                  Sign in
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
