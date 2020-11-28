import React, { Component } from 'react';
import { Button } from 'reactstrap';
class SubmitButton extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="submitbutton">
                <Button
                    className ="btn"
                    disabled= {this.props.disabled}
                    onClick={this.props.onClick}
                    color="primary"
                >
                    {this.props.text}
                </Button>

            </div>
         );
    }
}
 
export default SubmitButton;