import React, { Component } from 'react';
import {Input, Button, Label, Form, FormGroup, Col } from 'reactstrap'
import axios from 'axios'
import config from '../config/config'
class UserRegistation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.ClearForm=this.ClearForm.bind(this)
    }
    ClearForm(){
        document.getElementsByName('first_name').value= '';
        document.getElementsByName('last_name').value= '';
        document.getElementsByName('username').value= '';
        document.getElementsByName('email').value= '';
        document.getElementById('password1').value= '';
        document.getElementById('password2').value= ''
    }

    handleSubmit(){
        var create_data= new FormData()
        console.log(create_data)
        create_data.append("username",document.getElementById('username').value)
        create_data.append("first_name" , document.getElementById('first_name').value)
        create_data.append('last_name' ,document.getElementById('last_name').value)
        create_data.append("email",document.getElementById('email').value)
        create_data.append("password" ,document.getElementById('password1').value)


        if (document.getElementById('password2').value !== document.getElementById('password1').value){
            alert('password didn\'t match')
            return;
        }
        axios({
            method:"post",
            data:create_data,
            url:config.CreateUser
        }).then(function (response) {
            // handle success
            alert(response.data)
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    CheckUserName(e){
        var username = document.getElementById('username').value
        var user_data = new FormData()
        user_data.append('user_name',username)
        user_data.append('check_user',1)
        // alert('in check user name')
        axios({
            method:"post",
            data:user_data,
            url:config.CheckUserName
        }).then(function (response) {
            // handle success
            if (response.data ="sucess"){
                alert('username is available')
                return
            }
            else{
                alert("username is already taken")
            }
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

    render() { 
        return (
            <body>
                <div>
	                <title>Registration</title>

                        {/* <Form id="register" name="register" method="post"> */}
                        <Form>
                                <h3>Registration</h3>
                            <div>
                            </div>       
                                <FormGroup row>
                                    <Col sm={2}><Label >FIRST NAME</Label></Col>
                                    <Col sm={4}><Input class="input100" type="text" id="first_name" name="first_name" required placeholder="Type your First name"/></Col>
                                </FormGroup>
                                
                                <FormGroup row>
                                    <Col sm={2}><Label>LAST NAME</Label></Col>
                                    <Col sm={4}><Input  type="text" id="last_name" name="last_name" required placeholder="Type your Last name"/></Col>
                                </FormGroup>
                                
                                <FormGroup row>
                                    <Col sm={2}><Label>USERNAME</Label></Col>
                                    <Col sm={4}><Input  type="username"  id="username" name="username"  onBlur={this.CheckUserName} placeholder="Type your username"/></Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col sm={2}><Label class="label-input100">EMAIL</Label></Col>
                                    <Col sm={4}><Input  type="email" id="email" name="email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" placeholder="Type your email"/></Col>
                                </FormGroup>
            
                                <FormGroup row >
                                    <Col sm={2}><Label class="label-input100">PASSWORD</Label></Col>
                                    <Col sm={4}><Input  type="password" id="password1" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}" required placeholder="Must Contain-Capital & Small Alphabet & Number" title="Minimum of 8 characters. Should have at least one special character and one number."/></Col>
                                </FormGroup>
                                <FormGroup row >
                                    <Col sm={2}><Label>CONFIRM PASSWORD</Label></Col>
                                    <Col sm={4}><Input  type="password" id="password2" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"  required placeholder="Type your password Again"/></Col>
                                </FormGroup>
                                <br/>
                                <div >
                                    <FormGroup row check>
                                        <Button 
                                            color="primary"
                                            outline
                                            // type="submit"
                                            onClick={this.handleSubmit}
                                        > Register</Button>{' '}
                                        <Button
                                            // color="primary"
                                            type="reset"
                                            outline
                                            onClick={this.ClearForm}
                                        > reset</Button>
                                            
                                    </FormGroup>
                                </div>
                            </Form>
                            </div>
                </body>
         
          );
    }
}
 
export default UserRegistation;