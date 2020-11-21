import React from 'react';
import Form from './BaseComponents/Components/MiniBookProject/Form/Form';
import MiniBook from './BaseComponents/Components/MiniBookProject/MiniBook';
import Routing from './BaseComponents/Components/MiniBookProject/React_Routing/Routing';
import About from './BaseComponents/Components/MiniBookProject/About'
import Contact from './BaseComponents/Components/MiniBookProject/Contact'
import Home from './BaseComponents/Components/MiniBookProject/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StudentTimeTable from './BaseComponents/Components/MiniBookProject/StudentTimeTable/StudentTimeTable';
function App() {
  return (
    <Router>
      <Routing />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/jobs' component={StudentTimeTable} />
      </Switch>
    </Router>
  );
}

export default App;
