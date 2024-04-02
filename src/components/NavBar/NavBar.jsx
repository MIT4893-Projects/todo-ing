import NavBarItem from "./NavBarItem";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="nav bg-secondary p-2 justify-content-center">
      <NavBarItem className="bg-primary rounded-2">Todo-ing</NavBarItem>
    </div>
  );
}
