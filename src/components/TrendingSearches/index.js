import React, { useState, useEffect } from "react";
import getTrending from "services/getTrending";
import Category from "components/Category";

const TrendingSearches = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        getTrending().then(setTrends);
    }, []);

    return <Category name="trendings" list={trends} />;
};

const LazyTrending = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onChange = entries => {
            const element = entries[0];
            if (element.isIntersecting) {
                setShow(true);
            }
        };
        const observer = new IntersectionObserver(onChange, {
            rootMargin: "100px",
        });

        observer.observe(document.getElementById("LazyTrending"));
    });

    return <div id="LazyTrending">{show ? <TrendingSearches /> : null}</div>;
};

export default LazyTrending;
