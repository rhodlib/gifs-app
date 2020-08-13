import React from "react";
import Gif from "../Gif";
import "./styles.css";

export const ListOfGifs = ({ gifs }) => {
    return (
        <div className="gifs-list">
            {gifs.map(({ id, title, url }) => (
                <Gif key={id} title={title} url={url} id={id} />
            ))}
        </div>
    );
};

export default ListOfGifs;
