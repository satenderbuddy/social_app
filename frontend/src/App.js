import React from "react"
// import './App.css';
import LoginPage from "./form_fields/Loginpage"
import UserRegister from "./User/user_registration"
import {BrowserRouter as Router,Route,Switch, Link,Redirect} from 'react-router-dom'
// import InputField from "./form_fields/InputField"
// import SubmitButton from "./form_fields/SubmitButton"
// import DisplayDetails from './display_details'


class App extends React.Component {
    componentDidMount() {
        //for fetching data form backend when loading login page
    }
    render(){
        return (
        <Router>
        <Switch>
            
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/registration" component={UserRegister} />
            
            <Redirect to='/' />
        </Switch>
    </Router>

        );
    }
    }

    export default App;
