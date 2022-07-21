import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <p style={{ float: "left" }}>
          Open from 9:00 to 21:00 Tuesday - Sunday!
        </p>
        <div className="links">
          <Link to="/">
            <strong style={{ color: "#BFA524" }}>GO BACK HOMEPAGE</strong>
          </Link>
          <Link to="/">
            <p style={{ color: "#BFA524" }}>cart</p>
          </Link>
          <Link to="/">
            <p style={{ color: "#BFA524" }}>login or register</p>
          </Link>
        </div>
      </nav>
    );
}
 
export default Navbar;