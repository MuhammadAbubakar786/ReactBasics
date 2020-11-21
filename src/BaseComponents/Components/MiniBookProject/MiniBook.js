import React from 'react';
import './miniproject.css';
import Form from './Form/Form'
import StudentTimeTable from './StudentTimeTable/StudentTimeTable'
import Event from './EventsHandler/Event'
function MiniBook() {
    return (
        <React.Fragment>
            <Person name="Ali" Job="FrontEnd Developer" />
            <Person name="Abubakar" Job="Web Developer" />
            <Person name="Ahmed" Job="Mobile Developer" />

            {/* <BookCover />
            <BookTitle />
            <BookAuthor />
            <StudentTimeTable />
            <Form />
            <Event /> */}
        </React.Fragment>
    );
}
const Person = ({ name, Job }) => {
    return (
        <React.Fragment className="Person">
            <img src="https://picsum.photos/200/300" alt="Person Image" />
            <h4>{name}</h4>
            <h5>{Job}</h5>
        </React.Fragment>

    )
}

const BookCover = () => {
    return (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhmujIVUTH3gsW0xdLxGgM2_Rp9eOxfFECyQ&usqp=CAU.jpg" alt="The woonky Donkey" />);
}
const BookAuthor = () => {
    return (<p>By Carig Smith</p>);
}
const BookTitle = () => {
    return (<h3>The Wokey Donkey</h3>)
}
export default MiniBook

