import React from "react";
import axios from 'axios';   
//import Employee from "views/Employee.jsx";
//import "./Style.css";
// import Popup from 'reactjs-popup';

import{
    Label,
    Row,
    Col,
    FormGroup,
    Input,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Button
} from 'reactstrap';



export default class Edit extends React.Component {

state = {
        fullname :"",
        fullnameError: "",
        birthday :"",
        birthdayError:"",
        email :"",
        emailError:"",
        password :"",
        passwordError:"",
        passwordagain:"",
        passwordagainError:"",
        identity_card:"",
        identity_cardError:"",
        phone: "",
        phoneError:"",
        address:"",
        addressError:"",
        role_choose : [],
        role : "1",
        showEdit : true,
        isLoading: true
    };


componentDidMount(){
        this.renderData();
    }

    // componentWillUpdate(){
    //     this.renderData()
    // }

renderData()
{
    const obj = { code_emp : this.props.id}

    axios.post('http://localhost:5000/users/find', obj)
      .then((res) => 
      {
    
                   
         this.setState({
            code_emp :      res.data[0].code_emp,
            fullname  :     res.data[0].fullname,
            birthday :      res.data[0].birthday,
            identity_card : res.data[0].identity_card,
            email :         res.data[0].email,
            //password :      res.data[0].password,
            phone :         res.data[0].phone,
            address :       res.data[0].address
          })
          //console.log(res.data) 
        
  }
  );
}

 



    //handle change
change = e => {
  
    this.props.onChange({[e.target.name]: e.target.value});
    
    this.setState({
        [e.target.name]: e.target.value,

        fullnameError: "",
        birthdayError:"",
        emailError:"",
        passwordError:"",
        passwordagainError:"",
        identity_cardError:"",
        phoneError:"",
        addressError:""
    });
    console.log(this.state);

};



    //Reg ex
validate = () => {
    let isError = false;
    const errors = {};
    const pattEmail = /^[a-z][a-z0-9_]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/g;
    const pattPass  = /^.{8,20}$/g;
    const pattfullname  = /^([^0-9`!@#$%^&*()_\-=+\](){};'",./:\s]){2,}(\s[^0-9`!@#$%^&*()_\-=+\](){};'",./:\s]+)+$/g;
    const pattPhone = /^0(3[2-9]|5[68-9]|7[06-9]|8[1-68-9]|9[0-46-9])[0-9]{7}$/g;
    const pattAddress = /^[^@#$%^&*\]<>?]{10,}$/g;
    if(!this.state.fullname){
        isError = true;
        errors.fullnameError = "Họ và tên không được để trống";
    }
    else if(this.state.fullname){
        if(!this.state.fullname.match(pattfullname)){
        isError = true;
        errors.fullnameError = "Họ và tên không hợp lệ";
        }
    }
    if(!this.state.email){
        isError = true;
        errors.emailError = "Email không được để trống"
    }
    else if(this.state.email){
        if(!this.state.email.match(pattEmail)){
        isError = true;
        errors.emailError = "Email không hợp lệ";
        }
    }
    if(!this.state.identity_card){
        isError = true;
        errors.identity_cardError = "Số chứng minh không được để trống";
    }

    if(this.state.password){
        if(!this.state.password.match(pattPass)){
        isError = true;
        errors.passwordError = "Mật khẩu phải có tối thiểu 8 kí tự, tối đa 20 kí tự";
        }
    }
    //chưa check nhập lại pass
    if(this.state.passwordagain){
        if(!this.state.passwordagain.match( this.state.password)){
        isError = true;
        errors.passwordagainError = "Vui lòng nhập lại mật khẩu";
        }
    }
    if(typeof this.state.phone){
        if(!this.state.phone.match(pattPhone)){
        isError = true;
        errors.phoneError = "Số điện thoại không hợp lệ";
        }
    }
    if(typeof this.state.address){
        if(!this.state.address.match(pattAddress)){
        isError = true;
        errors.addressError = "Địa chỉ không hợp lệ";
        }
    }
    
    
    if(isError){
        this.setState ({
            ...this.state,
            ...errors
        });
    }

    return isError;
}





    //handle Submit
onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    //this.props.onSubmit(this.state);
    //Check error
    const error = this.validate();

    if(!error){
        const obj = {
            code_emp :      this.state.code_emp,
            fullname :      this.state.fullname,
            birthday :      this.state.birthday,
            identity_card : this.state.identity_card,
            email :         this.state.email,
            //password :      this.state.password,
            phone :         this.state.phone,
            address :       this.state.address,
            //role :          this.state.role,
            //status :        this.state.status
        };
        axios.post('http://localhost:5000/users/update', obj)
            .then(res =>
                {
                 this.props.newlist();
                

                    this.setState({
            fullname :"",
            fullnameError: "",
            birthday :"",
            birthdayError:"",
            email :"",
            emailError:"",
            password :"",
            passwordError:"",
            passwordagain:"",
            passwordagainError:"",
            identity_card:"",
            identity_cardError:"",
            phone: "",
            phoneError:"",
            address:"",
            addressError:"",
            showEdit: !this.state.showEdit
          });
        this.props.onChange({
            fullname :"",
            fullnameError: "",
            birthday :"",
            birthdayError:"",
            email :"",
            emailError:"",
            password :"",
            passwordError:"",
            passwordagain:"",
            passwordagainError:"",
            identity_card:"",
            identity_cardError:"",
            phone: "",
            phoneError:"",
            address:"",
            addressError:""
        });
        alert("Bạn đã cập nhật thành công!!! "+ this.state.fullname); 
        this.props.closeEdit({
            showEdit: !this.state.showEdit
        })
 })
                

        

        
    }
}


renderRoles() {
    return this.state.role.map( data => 
        (    <option value = {data.idrole} > {data.rolename}</option>        )
    )
}
runScript(e) {
    //See notes about 'which' and 'key'
    if (e.keyCode === 13) {
       this.onSubmit(e)
    }
    else 
    return false
}

render() {

    return (

<div className = 'popup'>
            <div className ="background" ></div>
            <div className = 'popup-inner'>
                <form onSubmit= {e => this.onSubmit(e)}  >
                    <Card>
                        <CardHeader>
                            <h3>Thêm nhân viên</h3>
                            <button type="button" class="close" 
                            onClick={this.props.closeEdit}>
                                &times;
                            </button>
                        </CardHeader>
                        <CardBody>
                            <FormGroup style = {{fontSize : '16px'}} >
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup >
                                            <Label for="fullname">Họ và tên</Label>
                                            <Input type="text"
                                                name = "fullname"
                                                placeholder="Nhập họ và tên"
                                                value = {this.state.fullname}
                                                onChange= {e => this.change(e)}
                                                onKeyPress={e => this.runScript(e)}
                                            />
                                            <label style ={{color:'red'}}>{this.state.fullnameError}</label>
                                        </FormGroup>
                                    </Col>  
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="birthday">Ngày sinh</Label>
                                            <Input type="date" 
                                                name="birthday"
                                                value = {this.state.birthday}
                                                onChange= {e => this.change(e)}
                                                onKeyPress={e => this.runScript(e)} 
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input type="email" 
                                                name="email"
                                                placeholder="Email"
                                                value = {this.state.email}
                                                onChange= {e => this.change(e)}
                                                onKeyPress={e => this.runScript(e)} 
                                            />
                                            <label style ={{color:'red'}}>{this.state.emailError}</label>               
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="identity_card">Chứng minh nhân dân</Label>
                                            <Input type="text"
                                                name="identity_card" 
                                                placeholder="Số chứng minh thư"
                                                value = {this.state.identity_card}
                                                onChange= {e => this.change(e)}
                                                onKeyPress={e => this.runScript(e)}
                                            />
                                            <label style ={{color:'red'}}>{this.state.identity_cardError}</label>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                       
                                    </Col>
                                    <Col md = {6}>
                                     
                                    </Col>
                                </Row>
                                <FormGroup>
                                    <Label for="address">Address</Label>
                                    <Input type="text"
                                        name="address"
                                        placeholder="1234 Main St"
                                        value = {this.state.address}
                                        onChange= {e => this.change(e)}
                                        onKeyPress={e => this.runScript(e)}
                                    />
                                    <label style ={{color:'red'}}>{this.state.addressError}</label>
                                </FormGroup>               
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="phone">Số điện thoại</Label>
                                                <Input type="text"
                                                name="phone"
                                                placeholder="Nhập số điện thoại"
                                                value = {this.state.phone}
                                                onChange= {e => this.change(e)} 
                                                onKeyPress={e => this.runScript(e)}
                                            />
                                            <label style ={{color:'red'}}>{this.state.phoneError}</label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                      
                                    </Col>
                                    <Col md={4}>
                                        
                                    </Col>
                                </Row>  
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Col md={12} className="flex-end">
                                <Button outline color="gray">Hủy</Button>
                                <button onClick = {e => this.onSubmit(e)} 
                                    className = "btn btn-warning">
                                        Sửa
                                    </button>
                            </Col>
                        </CardFooter>
                    </Card>
                </form>
            </div>
        </div>






    );
  



}








  
}
