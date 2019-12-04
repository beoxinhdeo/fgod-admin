import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBInput
} from 'mdbreact';

import {Redirect} from 'react-router-dom'
import Fab from '@material-ui/core/Fab';
import axios from "axios";


class Login extends React.Component {
  state = {
    email :"",
    emailError:"",
    password :"",
    passwordError:"",
    error:"",
    loggedIn:false

};

change = e => {
  this.setState({
      [e.target.name]: e.target.value,
      error:""
  });

};


validate = () => {
  let isError = false;
  const errors = {};
  
  if(!this.state.email){
    isError = true;
    errors.emailError = "Email không được để trống"
  }
  if(!this.state.password){
    isError =true;
    errors.passwordError = "Mật khẩu không được để trống"
  }
  
  if(isError){
      this.setState ({
          ...this.state,
          ...errors
      });
  }

  return isError;
}



onSubmit = e => {
  e.preventDefault();
  console.log(this.state);
  //Check error
  const error = this.validate();
  if(!error){
    var obj = {
      email:this.state.email,
      password:this.state.password
    }
    axios.post('http://localhost:5000/users/login',obj).then(data => {
      console.log(data);
      if(data.data[0].idrole)   
      this.setState({loggedIn:true})

      var obj = data.data[0]
      console.log(obj);
      
      const myJSON = JSON.stringify(obj);
      //const myTotal = JSON.stringify(total_cart);

      if (localStorage) {
        localStorage.setItem('login', myJSON);
        //localStorage.setItem('total', myTotal);
	 
    }
  }
  )

    if(this.state.email==="A" && this.state.password==="B")
  //clear form
      this.setState({
          email :"",
          emailError:"",
          password :"",
          passwordError:"",
          error:"",
          loggedIn : false
         });
  }
}

componentDidMount()
{
  this.checkSession()
}

checkSession(){
  axios.post('http://localhost:5000/users/getSession').then(data => {
    console.log(data);
    if(data.data === "loggedIn")
    this.setState({loggedIn:true})
  })
}

render() {

  if(this.state.loggedIn)
  {
    return <Redirect to="/admin/roommap"/>
  }

    return (
      <div className="bg">
        <div className = "bg-img">
        <MDBContainer className="form-login">
      <MDBRow>
        {/* <MDBCol md="6"> */}
          <form onSubmit= {e => this.onSubmit()}>
            <p className="h1 text-center mb-4 tittle" style={{fontFamily : "Marvel"}}>fgod</p>
            <div className="black-text">
              <MDBInput
                color = "white-text"
                label="Email"
                type="email"
                group
                name = "email"
                value ={this.state.email}
                onChange= {this.change}
                icon="envelope"
              />
              <p style ={{color:'red'}}>{this.state.emailError}</p> 
              <MDBInput
                label="Mật khẩu"
                name="password"
                value = {this.state.password}
                onChange = {this.change}
                icon="lock"
                type="password"
                validate
              />
              <p style ={{color:'red'}}>{this.state.passwordError}</p> 
            </div>
            {/* Email hay pass k tồn tại */}
            <p style ={{color:'red'}}>{this.state.error}</p>
            <div className="text-center">
            <Fab variant="extended" onClick = {e => this.onSubmit(e)} className = "btn-login" style = {{width:"100%"}}>
              Đăng nhập
            </Fab>
            </div>
          </form>
        {/* </MDBCol> */}
      </MDBRow>
    </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Login;