const { Link } = require("react-router-dom");
const Navbar = () => {
  return (
    <nav style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/about" style={{ padding: "10px" }}>
        About
      </Link>
      <Link to="/login" style={{ padding: "10px" }}>
        Login
      </Link>
    </nav>
  );
};
export default Navbar;