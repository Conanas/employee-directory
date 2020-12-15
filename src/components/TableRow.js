import React from "react";

function TableRow(props) {
    return (
        <tr>
            <td>
                {props.picture.medium}
            </td>
            <td>
                {props.name.title} {props.name.first} {props.name.last}
            </td>
            <td>
                {props.email}
            </td>
            <td>
                {props.dob.date} {props.dob.age}
            </td>
            <td>
                {props.gender}
            </td>
        </tr>
    )
}

export default TableRow