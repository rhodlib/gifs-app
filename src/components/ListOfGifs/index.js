import React from "react";
import Gif from "../Gif";

export const ListOfGifs = ({ gifs }) => {
    return (
        <div>
            {gifs.map(({ id, title, url }) => (
                <Gif key={id} title={title} url={url} id={id} />
            ))}
        </div>
    );
};

export default ListOfGifs;
