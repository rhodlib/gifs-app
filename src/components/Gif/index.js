import React from "react";
import "./styles.css";

export const Gif = ({ title, id, url }) => {
    return (
        <a href={`/gif/${id}`} className="gif">
            <h4 className="title">{title}</h4>
            <img loading="lazy" className="image" src={url} alt={title} />
        </a>
    );
};

export default Gif;
