import React, { useRef, useEffect, useCallback } from "react";
import Loader from "components/Loader";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import { useNearScreen } from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export const SearchResults = ({ params }) => {
    const { keyword, rating = "g" } = params;
    const { loading, gifs, setPage } = useGifs({ keyword, rating });
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false,
    });

    const title = gifs ? `${gifs.length} result of ${keyword}` : "";

    const debounceHandleNextPage = useCallback(
        debounce(() => setPage(prevPage => prevPage + 1), 500),
        []
    );

    useEffect(() => {
        if (isNearScreen) debounceHandleNextPage();
    }, [isNearScreen, debounceHandleNextPage]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={title} />
                    </Helmet>
                    <SearchForm
                        initialKeyword={keyword}
                        initialRating={rating}
                    />
                    <h3 className="app-title">{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                </>
            )}
        </>
    );
};

export default SearchResults;
