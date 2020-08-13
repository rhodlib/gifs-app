import React from "react";
import { Link } from "wouter";
import "./styles.css";

export const Gif = ({ title, id, url }) => {
    return (
        <Link to={`/gif/${id}`} className="gif">
            <h4 className="title">{title}</h4>
            <img loading="lazy" className="image" src={url} alt={title} />
        </Link>
    );
};

export default Gif;
