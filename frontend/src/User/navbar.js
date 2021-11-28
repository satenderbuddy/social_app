import React from 'react';
import axios from "axios"
import config from '../config/config'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from 'reactstrap';

  class UserNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            login:true,
            isOpen:false,
            disable_login_icon:false,
         }
         this.toggle=this.toggle.bind(this)
    }
    componentDidMount() {
        console.log(this.props.login)
        if(this.props.login !== "undefined"){
            var login = this.props.login;
            this.setState({login:login})
        }
        if(this.props.disable_login_icon !== "undefined"){
            var display = this.props.disable_login_icon;
            this.setState({disable_login_icon:display})
        }
    }

    logout(){
      axios({
        method: "post",
        data: {},
        // timeout: 1000 * 5,
        url: config.Logout,
    })
    .then(function (response) {
        console.log(response.data.status);
    })
    .catch(function(error) {
        console.log(error)
    });
      // window.location.href="/login"
    }
    toggle(){
        if(this.state.isOpen){
            this.setState({isOpen:false})
        }
        else{
            this.setState({isOpen:true})
        }
    }
    render() { 
        return (
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Social App</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                {this.state.login?
                    <NavLink hidden={this.state.disable_login_icon} href="/">logout</NavLink>:
                    <NavLink hidden={this.state.disable_login_icon} href="home"  onClick={this.Logout}>Login</NavLink>    
                }
                
              </Collapse>
            </Navbar>
          </div>
        );
      }
}
 
export default UserNavBar;