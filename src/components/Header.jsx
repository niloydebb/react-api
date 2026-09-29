import { NavLink } from "react-router";

const Header = () => {
  return (
    <ul className="flex gap-5">
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/blog">Blog</NavLink>
        </li>
    </ul>
  );
};
export default Header
