import React from "react";
import { Link } from "wouter";

export const Category = ({ name, list = [] }) => {
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                {list.map(item => (
                    <li key={item}>
                        <Link to={`/search/${item}`}>{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;
