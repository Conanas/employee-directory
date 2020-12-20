import React from "react"
import "./style.css"

function FilterOption(props) {
    return (
        <form>
            <input type="text" placeholder="Search for Employee" value={props.filter} onChange={(event) => props.filterTable(event)} />
        </form>
    )
}

export default FilterOption