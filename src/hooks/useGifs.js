import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setLoading(true);

        const keywordToUse =
            keyword || localStorage.getItem("lastKeyword") || "morty";

        getGifs({ keyword: keywordToUse }).then(gifs => {
            setGifs(gifs);
            setLoading(false);
            localStorage.setItem("lastKeyword", keyword);
        });
    }, [keyword]);

    return { loading, gifs };
}
