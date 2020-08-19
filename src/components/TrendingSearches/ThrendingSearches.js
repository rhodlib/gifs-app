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

export default TrendingSearches;
