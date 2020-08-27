import React, { useState } from "react";

export const SearchForm = ({ onSubmit }) => {
    const [keyword, setKeyword] = useState("");

    const handleChange = event => {
        setKeyword(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ keyword });
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
        </form>
    );
};

export default React.memo(SearchForm);
