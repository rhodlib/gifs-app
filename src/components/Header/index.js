import React from "react";
import { Link } from "wouter";
import useUser from "hooks/useUser";

import "./index.css";

export const Header = () => {
    const { isLogged, logout } = useUser();

    const handleClick = event => {
        event.preventDefault();
        logout();
    };

    return (
        <header className="gf-header">
            {isLogged ? (
                <Link href="#" onClick={handleClick}>
                    Logout
                </Link>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </header>
    );
};

export default Header;
