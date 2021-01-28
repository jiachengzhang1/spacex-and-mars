import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuerySearch } from "../redux/actions";

const SearchBar = () => {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const searchOnClick = (event) => {
        dispatch(setQuerySearch(value));
    };

    const clearOnClick = (event) => {
        setValue("");
        dispatch(setQuerySearch(""));
    };

    return (
        <div className="search-bar">
            <span>
                <b>PAST LAUNCHES</b>
            </span>
            <label htmlFor="search">Search</label>
            <input
                type="text"
                id="search"
                placeholder="SpaceX Launches"
                value={value}
                onChange={onChange}
            />
            <button onClick={searchOnClick}>Search</button>
            <button onClick={clearOnClick}>Clear</button>
        </div>
    );
};

export default SearchBar;
