import React from "react";
import { Route } from "wouter";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import "./App.css";

export const App = () => {
    return (
        <div className="app">
            <section className="app-content">
                <h1>FAST gifs</h1>
                <Route path="/" component={Home} />
                <Route path="/search/:keyword" component={SearchResults} />
                <Route path="/gif/:id" component={Detail} />
            </section>
        </div>
    );
};

export default App;
