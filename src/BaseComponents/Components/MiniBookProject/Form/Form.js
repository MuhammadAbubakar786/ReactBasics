import React, { Component } from 'react'
import Form1 from './Form1'
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            people: []
        }
    }
    changeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        const person = `${this.state.firstName} ${this.state.lastName}`;
        this.setState({
            people: [...this.state.people, person],
            firstName: "",
            lastName: ""
        })
    }
    render() {
        return (
            <>
                <div>
                    <form onSubmit={this.submitHandler}>
                        <input type="text" name="firstName" value={this.state.firstName} placeholder="FirstName" onChange={this.changeHandler} />
                        <input type="text" name="lastName" value={this.state.lastName} placeholder="LastName" onChange={this.changeHandler} />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <Form1 people={this.state.people} />
            </>
        )
    }
}
export default Form

