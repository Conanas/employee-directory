import React from "react";
import "./style.css";

function SortOption(props) {
    return (
        <form onSubmit={(event) => props.sortTable(event)}>
            <label>Sort employees by: </label><br />
            <input type="radio" name="ageName" defaultChecked value="name" id="name" />
            <label>Name</label>
            <input type="radio" name="ageName" value="age" id="age" />
            <label>Age</label>
            <input type="radio" name="ascDes" defaultChecked value="asc" id="asc" />
            <label>Asc.</label>
            <input type="radio" name="ascDes" value="desc" id="desc" />
            <label>Desc.</label>
            <input type="submit" value="Sort" />
        </form>
    )
}

export default SortOption