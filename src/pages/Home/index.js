import React, { useState } from "react";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import TrendingSearches from "components/TrendingSearches";

export const Home = () => {
    const [keyword, setKeyword] = useState("");
    const [path, pushLocation] = useLocation();
    const { gifs } = useGifs();

    const handleChange = event => {
        setKeyword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        pushLocation(`/search/${keyword}`);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Search a gif..."
                    onChange={handleChange}
                    type="text"
                    value={keyword}
                />
            </form>
            <h3 className="app-title">Last Search</h3>
            <ListOfGifs gifs={gifs} />
            <TrendingSearches />
        </>
    );
};

export default Home;
