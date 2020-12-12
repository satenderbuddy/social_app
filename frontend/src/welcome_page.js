import React from 'react';
import UserNavBar from "./User/navbar"
class WelcomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <UserNavBar />
         );
    }
}
 
export default WelcomePage;
