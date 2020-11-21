import React from 'react'

export default function _TableHeader({ Season, TableNumber }) {
    return (

        <React.Fragment>
            <thead>
                <tr>
                    <td>TableNumber :: {TableNumber + 1}</td>
                </tr>
                <tr>
                    <th>Days</th>
                    <th>Timing</th>
                </tr>
            </thead>

        </React.Fragment>
    )
}
