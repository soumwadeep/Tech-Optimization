import React from "react";
import App from "./App.css";
import { NavLink } from "react-router-dom";
import icon from "./images/icon.png";
const Nav = () => {
    return (
        <>
            <nav className="navbar navbar sticky-top navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={icon} width="25" height="25"/> Tech Optimization
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive ? "menu_active" : "nav-link"
                                    }
                                    aria-current="page"
                                    to="/"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive ? "menu_active" : "nav-link"
                                    }
                                    to="/service"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive ? "menu_active" : "nav-link"
                                    }
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className={(navData) =>
                                        navData.isActive ? "menu_active" : "nav-link"
                                    }
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;
