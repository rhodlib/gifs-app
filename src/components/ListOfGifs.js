import React, { useState, useEffect } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif";
import Loader from "./Loader";

export const ListOfGifs = ({ params }) => {
    const { keyword } = params;
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true);
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
        });
    }, [keyword]);

    if (loading) return <Loader />;

    return (
        <div>
            {gifs.map(({ id, title, url }) => (
                <Gif key={id} title={title} url={url} id={id} />
            ))}
        </div>
    );
};

export default ListOfGifs;
