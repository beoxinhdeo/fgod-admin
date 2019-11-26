import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBInput
} from 'mdbreact';
import Fab from '@material-ui/core/Fab';
class Login extends React.Component {
  state = {
    email :"",
    emailError:"",
    password :"",
    passwordError:"",
    error:""
};
change = e => {
  this.setState({
      [e.target.name]: e.target.value,
      error:""
  });
  // console.log(this.state);

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
  //this.props.onSubmit(this.state);
  //Check error
  const error = this.validate();
  if(!error){
  //clear form
      this.setState({
          email :"",
          emailError:"",
          password :"",
          passwordError:"",
          error:""
         });
  }
}
  render() {
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