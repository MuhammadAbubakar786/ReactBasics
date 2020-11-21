import React from 'react'
import './form.css'
function Form1({ people }) {
    return (
        <div className="conatiner">
            {
                people.map((value, key) => {
                    return (
                        <p className="item" key={key}>{value}</p>
                    )
                })
            }
        </div>
    )
}
export default Form1

