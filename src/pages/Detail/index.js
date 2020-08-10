import React, { useContext } from "react";
import GifsContext from "../../context/GifsContext";

export const Detail = ({ params }) => {
    const { gifs } = useContext(GifsContext);
    console.log(gifs);
    return <h1>Gif con id {params.id}</h1>;
};

export default Detail;
