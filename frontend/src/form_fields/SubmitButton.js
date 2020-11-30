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
                    color={this.props.color}
                    size={this.props.size}
                    style={{padding:"10%"}}
                    outline
                >
                    {this.props.text}
                </Button>
            </div>
         );
    }
}
 
export default SubmitButton;