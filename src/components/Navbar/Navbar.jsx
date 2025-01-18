import logo from "/images/logo.png";
import avatar from "/images/author1.png"
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-options">
          <img src={logo} alt="zysk-logo" />
        </li>
        <li className="nav-options">Home</li>
        <li className="nav-options">Products</li>
        <li className="nav-options">Resources</li>
        <li className="nav-options">Pricing</li>
      </ul>
      <span className="avatar-contianer">
        <img src={avatar} alt="avatar" />
      </span>
    </nav>
  );
};

export default Navbar;
