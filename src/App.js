import React from "react";
import { Route } from "wouter";
import ListOfGifs from "./components/ListOfGifs";
import "./App.css";

export const App = () => {
    return (
        <div className="app">
            <section className="app-content">
                <h1>Rhodlib Gif App</h1>
                <Route path="/gif/:keyword" component={ListOfGifs} />
            </section>
        </div>
    );
};

export default App;
