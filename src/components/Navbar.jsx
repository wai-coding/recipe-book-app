import logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Logo" />
      <h2 className="title">Book - Grandma's Recipe</h2>
    </div>
  );
}

export default Navbar;
