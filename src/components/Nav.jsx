import React from "react";
import SearchBar from "./SearchBar/SearchBar.jsx";


export default function Nav(props) {
    return (

        <nav  > <SearchBar onSearch={props.onSearch} /> </nav>

    )


}