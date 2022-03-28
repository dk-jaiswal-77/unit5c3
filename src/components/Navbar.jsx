import "./Navbar.css";

import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/books/section/History"}>History</Link>
            <Link to={"/books/section/Mystery"}>Mystery</Link>
            <Link to={"/books/section/Mythology"}>Mythology</Link>
            <Link to={"/books/section/Technology"}>Technology</Link>
        </nav>
    );
}