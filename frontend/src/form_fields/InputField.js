import React, { Component } from 'react';
import { Input } from 'reactstrap';
class InputField extends Component {
    render() { 
        return (
            <div className="inputfield">
                <Input
                    className="input"
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value = {this.props.value}
                    onChange={ (e) => this.props.onChange(e.target.value) }
                />
            </div>  
        );
    }
}
 
export default InputField;