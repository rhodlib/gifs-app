import React from "react";
import { useLocation } from "wouter";
import useForm from "./hook";

const RATINGS = ["g", "pg", "pg-13", "r"];

export const SearchForm = ({ initialKeyword = "", initialRating = "g" }) => {
    const [_, pushLocation] = useLocation();

    const { keyword, rating, updateKeyword, updateRating } = useForm({
        initialKeyword,
        initialRating,
    });

    const handleChange = event => {
        updateKeyword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        pushLocation(`/search/${keyword}/${rating}`);
    };

    const handleChangeRating = event => {
        updateRating(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input-form"
                placeholder="Search a gif..."
                onChange={handleChange}
                type="text"
                value={keyword}
            />
            <select
                className="input-form"
                onChange={handleChangeRating}
                value={rating}
            >
                <option disabled>Rating type</option>
                {RATINGS.map(rating => (
                    <option key={rating}>{rating}</option>
                ))}
            </select>
        </form>
    );
};

export default React.memo(SearchForm);
