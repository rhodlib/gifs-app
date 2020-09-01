import React from "react";
import { Route, Link } from "wouter";
import Home from "pages/Home";
import SearchResults from "pages/SearchResults";
import Detail from "pages/Detail";
import StaticContext from "context/StaticContext";
import "./App.css";
import { GifsContextProvider } from "context/GifsContext";

export const App = () => {
    return (
        <StaticContext.Provider value={{ name: "rhodlib" }}>
            <div className="app">
                <section className="app-content">
                    <Link to="/">
                        <h1 className="app-logo">FastGifs</h1>
                    </Link>
                    <GifsContextProvider>
                        <Route path="/" component={Home} />
                        <Route
                            path="/search/:keyword"
                            component={SearchResults}
                        />
                        <Route path="/gif/:id" component={Detail} />
                        <Route
                            path="/404"
                            component={() => <h1>404 NOT FOUND :(</h1>}
                        />
                    </GifsContextProvider>
                </section>
            </div>
        </StaticContext.Provider>
    );
};

export default App;
