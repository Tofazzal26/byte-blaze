import { NavLink } from "react-router-dom";
const NoState = ({ address, message, label }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-132px)]">
      <p className="text-2xl font-semibold mb-4">{message}</p>
      <NavLink
        to={address}
        className="relative inline-block px-4 py-2 font-medium group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-secondary group-hover:bg-primary"></span>

        <span className="relative text-black group-hover:text-white font-bold text-lg">
          {label}
        </span>
      </NavLink>
    </div>
  );
};

export default NoState;
