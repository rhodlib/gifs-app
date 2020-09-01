import React, { useCallback } from "react";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import SearchForm from "components/SearchForm";
import TrendingSearches from "components/TrendingSearches";
import { Helmet } from "react-helmet";

export const Home = () => {
    const [path, pushLocation] = useLocation();
    const { gifs } = useGifs();

    const handleSubmit = useCallback(
        ({ keyword }) => {
            pushLocation(`/search/${keyword}`);
        },
        [pushLocation]
    );

    return (
        <>
            <Helmet>
                <title>Home | FastGifs</title>
            </Helmet>
            <SearchForm onSubmit={handleSubmit} />
            <h3 className="app-title">Last Search</h3>
            <ListOfGifs gifs={gifs} />
            <TrendingSearches />
        </>
    );
};

export default Home;
