import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css"
function Header() {
    return (
        <div id="navbar">
            <div className="logo">
                <li><Link to={"/"}><img src={logo} /></Link></li>
            </div>
            <div className="content-area">
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/business"}>Business</Link></li>
                <li><Link to={"/entertainment"}>Entertainment</Link></li>
                <li><Link to={"/general"}>General</Link></li>
                <li><Link to={"/health"}>Health</Link></li>
                <li><Link to={"/science"}>Science</Link></li>
                <li><Link to={"/sports"}>Sports</Link></li>
                <li><Link to={"/technology"}>Technology</Link></li>
            </div>

        </div>

    )
}
export default Header;