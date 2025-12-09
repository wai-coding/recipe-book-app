import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      {" "}
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default Navbar;
