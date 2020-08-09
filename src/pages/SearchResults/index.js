import React from "react";
import Loader from "../../components/Loader";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

export const SearchResults = ({ params }) => {
    const { keyword } = params;
    const { loading, gifs } = useGifs({ keyword });

    return <>{loading ? <Loader /> : <ListOfGifs gifs={gifs} />}</>;
};

export default SearchResults;
