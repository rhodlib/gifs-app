import React from "react";
import { Route, Link } from "wouter";

import Home from "pages/Home";
import Login from "pages/Login";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import Header from "components/Header";

import { UserContextProvider } from "context/UserContext";
import { GifsContextProvider } from "context/GifsContext";

import "./App.css";

export const App = () => {
    return (
        <UserContextProvider>
            <div className="app">
                <section className="app-content">
                    <Header />
                    <Link to="/">
                        <h1 className="app-logo">FastGifs</h1>
                    </Link>
                    <GifsContextProvider>
                        <Route path="/" component={Home} />
                        <Route
                            path="/search/:keyword/:rating?"
                            component={SearchResults}
                        />
                        <Route path="/gif/:id" component={Detail} />
                        <Route path="/login" component={Login} />
                        <Route
                            path="/404"
                            component={() => <h1>404 NOT FOUND :(</h1>}
                        />
                    </GifsContextProvider>
                </section>
            </div>
        </UserContextProvider>
    );
};

export default App;
