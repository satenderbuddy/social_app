import React, { Component } from 'react';
import {} from 'reactstrap';
import UserNavBar from "./navbar"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            is_logedin:''
        }
    }
    componentDidMount() {
        if(this.props.is_logedin){
            this.setState({is_logedin:this.props.is_logedin})
        }
    }
    render() { 
        return ( 
            
            <div>
                <UserNavBar disable_login_icon={false} login={true}/>
                <h3>User home page</h3>
            <h4>User is logged in sucessfully 
        </h4>{

        }</div>
         );
    }
}
 
export default Home;