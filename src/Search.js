import React from "react";

export default function Search(props) {
    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(event.target.search.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="search"
                type="text"
                id="inputSearch"
                placeholder="Type your city name"
            />
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    );
}
