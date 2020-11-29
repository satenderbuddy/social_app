import React, { Component } from 'react';
import InputField from "./InputField";
import axios from "axios"
import config from "../config/config"
import SubmitButton from "./SubmitButton"
import { Form, FormGroup, Input,Label } from 'reactstrap';
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            buttonDissabled:false
        }   
    // this.handleChange= this.handleChange.bind(this)
    this.loginSubmit=this.loginSubmit.bind(this)
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
        var login_form = document.forms["login"]
        console.log(login_form)
        var login_data = new FormData()
        login_data.append("email",email)
        login_data.append("password",password)
        axios({
            method: 'POST',
            url: config.Login,
            data: login_data,
        })
        .then(function (response) {
            console.log(response.data);
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
            <div>
                Login Form Page
                <Form row id="login">
                    <label>Username / email</label>
                    <InputField
                        type = "email"
                        placeholder= "email"
                        id="email"
                        value = {this.state.email ? this.state.email:''}
                        onChange ={(val) => this.handleChange('email',val) }
                    />
                    <Label>Password</Label>
                    <InputField
                        type = "password"
                        placeholder= "password"
                        id="password"
                        value = {this.state.password ? this.state.password:''}
                        onChange ={(val) => this.handleChange('password',val) }
                    />
                    {/* <Input 
                        type='text'
                        placeholder=""
                        id="test"
                        onChange={this.checkChange}
                    /> */}
                    <FormGroup row>
                        <SubmitButton
                            type ="submit"
                            disabled = {this.state.buttonDissabled}
                            onClick = {this.loginSubmit}
                            text="log in"
                        />

                        <SubmitButton 
                            type="reset"
                            onClick={this.resetForm}
                            text="reset"
                        />
                        <a href="/registration">Register now</a> 
                    </FormGroup>
                    {/* <button onClick={window.replace("/user_register")} >Register</button> */}
                </Form>
            </div>
        );
    };
}
 
export default LoginPage;