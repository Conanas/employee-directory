/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function TableRow(props) {
    let date = new Date(props.dob.date)
    return (
        <tr>
            <td>
                <img src={props.picture.medium} alt={`${props.name.first} image`}></img>
            </td>
            <td>
                {props.name.title} {props.name.first} {props.name.last}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}
            </td>
            <td>
                {props.dob.age}
            </td>
            <td>
                {props.gender}
            </td>
        </tr>
    )
}

export default TableRow