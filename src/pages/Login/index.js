import React, { useState, useEffect } from "react";
import { useLocation } from "wouter";
import useUser from "hooks/useUser";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, pushLocation] = useLocation();
    const { login, isLogged } = useUser();

    useEffect(() => {
        if (isLogged) pushLocation("/");
    }, [isLogged, pushLocation]);

    const handleSubmit = event => {
        event.preventDefault();
        login({ username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="username"
                value={username}
                onChange={event => setUsername(event.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button>Login</button>
        </form>
    );
};

export default Login;
