import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

const Navber = () => {
  return (
    <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 py-4 my-9">
        <Logo></Logo>
      <nav>
        <ul className="flex gap-12 text-lg font-bold  ">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]   underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]  underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A]  underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navber;
