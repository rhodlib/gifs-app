import React from "react";
import Loader from "components/Loader";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";

export const SearchResults = ({ params }) => {
    const { keyword } = params;
    const { loading, gifs, setPage } = useGifs({ keyword });

    const handleNextPage = () => setPage(prevPage => prevPage + 1);

    return (
        <>
            {loading ? <Loader /> : <ListOfGifs gifs={gifs} />}{" "}
            <button onClick={handleNextPage}>More gifs</button>
        </>
    );
};

export default SearchResults;
