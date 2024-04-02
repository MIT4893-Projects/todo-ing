import { navBarItemPropTypes } from "./propTypes";

NavBarItem.propTypes = navBarItemPropTypes;

export default function NavBarItem({ children, className, style }) {
  return (
    <li className={`nav-item py-2 px-3 text-white ${className}`} style={style}>
      {children}
    </li>
  );
}
