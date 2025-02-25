import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="foot-btns">
                <Link to={"/about"}><button>About Us</button></Link>
                <Link to={"/contact"}><button>Contact Us</button></Link>
            </div>
            <div className="foot-img">
               <Link to={"/"}><img src={logo} alt="Company Logo" /></Link> 
            </div>
        </div>
    );
}

export default Footer;
