import React, { Component } from 'react';
import InputField from "../form_fields/InputField";
import axios from "axios"
import config from "../config/config"
import { Button, Form, FormGroup,Label, PopoverBody } from 'reactstrap';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            buttonDissabled:false
        }   
    // this.handleChange= this.handleChange.bind(this)
    // this.loginSubmit=this.loginSubmit.bind(this)
    this.resetForm= this.resetForm.bind(this)
    // this.checkChange=this.checkChange.bind(this)
    }
    loginSubmit(){
        var email =this.state.email;
        var password = this.state.password;
        if(password.length<8){
            alert("Bitch please!!!")
            return;
        }
        var login_data = new FormData()
        login_data.append("email",email)
        login_data.append("password",password)
        axios({
            method: "post",
            data: login_data,
            url: config.Login,
        })
        .then(function (response) {
            console.log(response.data);
            if(response.data === "sucess"){
                window.open("/home")
            }
            else{
                alert(response.data)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
    handleChange(id,val){
        this.setState({[id]:val})
    }
    resetForm(){
        this.setState({
            email:'',
            password:'',
            buttonDissabled:false
        })
    }
    // checkChange(event){
    //     alert(event.target.id)
    //     alert(event.target.value)
    //     alert(event.target.type)
    // }
    render() { 
        return (  
            <PopoverBody>
            <div>
                <h3>User Login</h3>
                <Form row id="login">
                    <FormGroup>
                    <label>Username / email</label>
                    <InputField
                        type = "email"
                        placeholder= "email"
                        id="email"
                        value = {this.state.email ? this.state.email:''}
                        onChange ={(val) => this.handleChange('email',val) }
                    /></FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <InputField
                            type = "Password"
                            placeholder= "password"
                            id="password"
                            value = {this.state.password ? this.state.password:''}
                            onChange ={(val) => this.handleChange('password',val) }
                        />
                    </FormGroup>
                    <Button
                        type =""
                        disabled = {this.state.buttonDissabled}
                        color="primary"
                        onClick = {this.loginSubmit}
                    >log in</Button>{' '}

                    <Button
                        type="reset"
                        onClick={this.resetForm}
                        color="secondary"
                    >reset</Button>{' '}
                    <a href="/registration">Register now</a> 
                </Form>
            </div>
            </PopoverBody>
        );
    };
}
 
export default LoginPage;