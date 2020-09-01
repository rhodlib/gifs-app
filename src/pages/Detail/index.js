import React from "react";
import Gif from "components/Gif";
import useSingleGif from "hooks/useSingleGifs";
import Loader from "components/Loader";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

export const Detail = ({ params }) => {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id });
    const title = gif ? gif.title : "";

    if (isLoading) {
        return (
            <>
                <Helmet>
                    <title>Loading...</title>
                </Helmet>
                <Loader />;
            </>
        );
    }

    if (isError) return <Redirect to="/404" />;
    if (!gif) return null;

    return (
        <>
            <Helmet>
                <title>{title} | FastGifs</title>
                <meta name="description" content={title} />
            </Helmet>
            <h3 className="App-title">{gif.title}</h3>
            <Gif {...gif} />
        </>
    );
};

export default Detail;
