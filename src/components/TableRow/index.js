/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

function TableRow(props) {
    return (
        <tr>
            <td>
                <img src={props.picture} alt={`${props.name} image`}></img>
            </td>
            <td>
                {props.name}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.dob}
            </td>
            <td>
                {props.age}
            </td>
            <td>
                {props.gender}
            </td>
        </tr>
    )
}

export default TableRow