import React,{ Component } from 'react';
// import ReactDOM, { render } from 'react-dom';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import axios from "axios"
import config from "./config/config"


class DisplayDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            back_data :[],
        };
    }

    componentDidMount(){
        axios({
            //url: "http://localhost:8000/user/details_display/",
            url:config.DisplayDetails,
            data: "",
            method: 'get',
            })
        .then((response) =>{
            // alert(json.data['output'])
            // window.location.reload();
            console.log(this.state.back_data)
            console.log(response.data)
            this.setState({
              back_data : response.data
            });
            console.log(this.state.back_data);
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    render() {
      return (
        <div className="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Oculus</li>
          </ul>
          {this.state.back_data &&
                            this.state.back_data.map((data, index) =>{
                                return (
                                    <tr>
                                        <td sm="1">{index+1}</td>
                                        <td sm="3" value= 'date'> {data.first_name} </td>
                                        <td sm="3" value= 'brand'> {data.last_name} </td>
                                        <td sm="3" value= 'date'> {data.dob} </td>
                                        <td sm="3" value= 'date'> {data.email_id} </td>
                                    </tr>
                                )
                            })
                        }
        </div>
      );
    }
}
export default DisplayDetails ;

// axios({
//     url: config.GET_ISSUES_LIST,
//     data: allData,
//     method: 'post',
//     })
// .then(function (json) {
//     alert(json.data['output'])
//     window.location.reload();
    
     
//  })
//  .catch(function (error) {
//      console.log(error)
//  });