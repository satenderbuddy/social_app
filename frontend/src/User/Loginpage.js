import React, { Component } from 'react';
import axios from "axios"
import config from "../config/config"
import { Button, FormGroup,Input,Label, PopoverBody } from 'reactstrap';
import UserNavBar from "./navbar"
axios.defaults.timeout = 300;
axios.interceptors.request.use(function (config) {
    const token = sessionStorage.getItem('token');
    config.headers.Authorization =  token;

    return config;
});
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email:'',
            password:'',
            buttonDissabled:false
        }   
    this.handleChange= this.handleChange.bind(this)
    this.loginSubmit=this.loginSubmit.bind(this)
    this.resetForm= this.resetForm.bind(this)
    // this.checkChange=this.checkChange.bind(this)
    }
    loginSubmit(){
        var email =this.state.email;
        var password = this.state.password;
        console.log(email,password)
        if(password.length<8){
            alert("Bitch please!!!")
            return;
        }
        var login_data = new FormData()
        login_data.append("email",email)
        login_data.append("password",password)
        console.log("here===")
        axios({
            method: "post",
            data: login_data,
            // timeout: 1000 * 5,
            url: config.Login,
        })
        .then(function (response) {
            console.log(response.data.status);
            if(response.data.status===true){
                // window.open("/home")
                console.log("======",response.data['msg'])
                alert(response.data['msg']);
                sessionStorage.setItem('token', response.data.data.token);
                window.location.href='/home';
            }
            else{
                console.log(response.data)
            }
        })
        .catch(function(error) {
            console.log(error)
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
                <UserNavBar disable_login_icon={true}/>
                <h3>User Login</h3>
                    <FormGroup>
                    <label>Username / email</label>
                    <Input
                        type = "email"
                        placeholder= "email"
                        id="email"
                        value = {this.state.email ? this.state.email:''}
                        onChange ={(e) => this.handleChange('email',e.target.value) }
                    /></FormGroup>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            type = "Password"
                            placeholder= "password"
                            id="password"
                            value = {this.state.password ? this.state.password:''}
                            onChange ={(e) => this.handleChange('password',e.target.value) }
                        />
                    </FormGroup>
                    <Button
                        type ="submit"
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
            </div>
            </PopoverBody>
        );
    };
}
 
export default LoginPage;