import React from "react";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/ListOfGifs";
import SearchForm from "components/SearchForm";
import TrendingSearches from "components/TrendingSearches";
import { Helmet } from "react-helmet";

export const Home = () => {
    const { gifs } = useGifs();

    return (
        <>
            <Helmet>
                <title>Home | FastGifs</title>
            </Helmet>
            <SearchForm />
            <h3 className="app-title">Last Search</h3>
            <ListOfGifs gifs={gifs} />
            <TrendingSearches />
        </>
    );
};

export default Home;
