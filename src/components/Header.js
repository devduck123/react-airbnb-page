import logo from "../images/logo.png";

export default function Header() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="airbnb logo" />
      </nav>
    </header>
  );
}
