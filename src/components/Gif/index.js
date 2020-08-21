import React from "react";
import { Link } from "wouter";
import "./styles.css";

export const Gif = ({ title, id, url }) => {
    return (
        <Link to={`/gif/${id}`} className="gif">
            <p className="title">{title}</p>
            <img loading="lazy" className="image" src={url} alt={title} />
        </Link>
    );
};

export default Gif;
