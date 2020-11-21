import React, { Component } from 'react'
import TableHeader from "./_TableHeader"
class StudentTimeTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            TimeTable: [
                {
                    Season: "Summer",
                    Monday: "9Am - 1Pm",
                    Tuesday: "9Am - 1Pm",
                    Wednesday: "9Am - 1pm",
                    Thursday: "9Am - 1pm",
                    Friday: "8Am - 12pm",
                    Saturday: "9Am - 1pm",
                },
                {
                    Season: "Spring",
                    Monday: "8Am - 12Pm",
                    Tuesday: "8Am - 12Pm",
                    Wednesday: "8Am - 12pm",
                    Thursday: "8Am - 12pm",
                    Friday: "8Am - 11pm",
                    Saturday: "8Am - 12pm",
                },
            ]
        }
    }

    render() {
        return (
            <React.Fragment>

                {this.state.TimeTable.map((Timing, i) => (
                    <table>
                        <TableHeader key={i} Season={Timing.Season} TableNumber={i} />
                        <tbody>
                            <React.Fragment>
                                <tr>
                                    <td>{Timing.Season} Time Table</td>
                                    <td>Monday</td>
                                    <td> {Timing.Monday}</td>
                                </tr>
                                <tr>
                                    <td>Tuesday</td>
                                    <td>{Timing.Tuesday}</td>
                                </tr>
                                <tr>
                                    <td>Wednesday</td>
                                    <td>{Timing.Wednesday}</td>
                                </tr>
                                <tr>
                                    <td>Thursday</td>
                                    <td>{Timing.Thursday}</td>
                                </tr>
                                <tr>
                                    <td>Friday</td>
                                    <td>{Timing.Friday}</td>
                                </tr>
                                <tr>
                                    <td>Saturday</td>
                                    <td>{Timing.Saturday}</td>
                                </tr>
                            </React.Fragment>
                        </tbody>
                    </table>
                ))
                }
            </React.Fragment >

        )
    }
}

export default StudentTimeTable
