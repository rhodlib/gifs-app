import React from "react";
import "./Gif.css";

export const Gif = ({ title, id, url }) => {
    return (
        <a href={`#${id}`} className="gif">
            <h4 className="title">{title}</h4>
            <img className="image" src={url} alt={title} />
        </a>
    );
};

export default Gif;
