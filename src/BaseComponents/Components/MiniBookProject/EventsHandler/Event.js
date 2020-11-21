import React, { Component } from 'react'

export class Event extends Component {
    constructor(props) {
        super(props)

        this.state = {
            status: false,
            data: [
                {
                    name: "Abubakar",
                    FatherName: "M.Yaseen",
                    Gender: "Male",
                    Qualification: "Graduation"
                },
                {
                    name: "Ali",
                    FatherName: "Hassan",
                    Gender: "Male",
                    Qualification: "Graduation"
                }
            ]
        }
    }


    render() {
        return (
            <div>
                <input type="button" value="Show Information" onClick={this.Show = () => (
                    this.setState({ status: true })
                )} />
                <input type="button" value="Hide Information" onClick={this.Hide = () => (
                    this.setState({ status: false })
                )} />

                {
                    this.state.status ? this.state.data.map((item, index) => (
                        <div>
                            <p>student {index + 1}</p>
                            <p> Student Name : {item.name}</p>
                            <p>Father Name : {item.FatherName}</p>
                            <p> Gender : {item.Gender}</p>
                            <p>Qualifiaction : {item.Qualification}</p>
                        </div>)) : ""}
            </div >
        )
    }
}
export default Event
