import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Students
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/addstudent"
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                    Add Student
        </Link>
            </li>
        </ul>
    );
}

export default Nav;
