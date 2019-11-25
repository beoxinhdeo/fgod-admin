import React from "react";
import "./Stylee.css";
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



export default class Form extends React.Component {
  state = {
    fullname :"",
    fullnameError: "",
    birthday :"",
    birthdayError:"",
    email :"",
    emailError:"",
    idcard_passport:"",
    idcard_passportError:"",
    phone: "",
    phoneError:"",
    address:"",
    addressError:"",
    showForm : true
};
    //handle change
change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
        [e.target.name]: e.target.value,
        fullnameError: "",
        birthdayError:"",
        emailError:"",
        idcard_passportError:"",
        phoneError:"",
        addressError:""
    });
};
// submitedit = e => {
//     this.props.onChange
//     ({fullname : ,
//         birthday: ,
//         email:     ,
//         idcard_passport: ,
//         phone: ,
//         address: ,

//     });
//     this.setState({
//         [e.target.name]: e.target.value,
//         fullnameError: "",
//         birthdayError:"",
//         emailError:"",
//         idcard_passportError:"",
//         phoneError:"",
//         addressError:""
//     });
// };

    //Reg ex
validate = () => {
    let isError = false;
    const errors = {};
    const pattEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/g;
    const pattfullname  = /^([^0-9`!@#$%^&*()_\-=+\[\](){};'",./:\s]){2,}(\s[^0-9`!@#$%^&*()_\-=+\[\](){};'",./:\s]+)+$/g;
    const pattPhone = /^0(3[2-9]|5[68-9]|7[06-9]|8[1-68-9]|9[0-46-9])[0-9]{7}$/g;
    const pattAddress = /^[^\'\"\!@#$%^&*\(\)\{\}\[\]<>?]{10,}$/g;
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
    if(!this.state.idcard_passport){
        isError = true;
        errors.idcard_passportError = "Số chứng minh không được để trống";
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

        
    //clear form
        this.setState({
            fullname :"",
            fullnameError: "",
            birthday :"",
            birthdayError:"",
            email :"",
            emailError:"",
            idcard_passport:"",
            idcard_passportError:"",
            phone: "",
            phoneError:"",
            address:"",
            addressError:"",
            showForm: !this.state.showForm
          });
        this.props.onChange({
            fullname :"",
            fullnameError: "",
            birthday :"",
            birthdayError:"",
            email :"",
            emailError:"",
            idcard_passport:"",
            idcard_passportError:"",
            phone: "",
            phoneError:"",
            address:"",
            addressError:""
        });
        alert("Bạn đã thêm "+ this.state.fullname); 
        this.props.closeForm({
            showForm: !this.state.showForm
        })

        
    }
}
render() {
    return (
        <div className = 'popup'>
            <div className = 'background'></div>
            <div className = 'popup-inner'>
                <form onSubmit= {e => this.onSubmit()}>
                    <Card>
                        <CardHeader>
                            <h3>Thêm khách hàng</h3>
                            <button type="button" class="close" 
                            onClick={this.props.closeForm}>
                                &times;
                            </button>
                        </CardHeader>
                        <CardBody>
                            <FormGroup style = {{fontSize : '16px'}}>
                                <Row form>
                                    <Col md={6}>
                                        <FormGroup >
                                            <Label for="fullname">Họ và tên</Label>
                                            <Input type="text"
                                                name = "fullname"
                                                placeholder="Nhập họ và tên"
                                                value = {this.state.fullname}
                                                onChange= {e => this.change(e)}
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
                                            />
                                            <label style ={{color:'red'}}>{this.state.emailError}</label>               
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="idcard_passport">Chứng minh nhân dân/Passport</Label>
                                            <Input type="text"
                                                name="idcard_passport" 
                                                placeholder="Số chứng minh thư hoặc passport"
                                                value = {this.state.idcard_passport}
                                                onChange= {e => this.change(e)}
                                            />
                                            <label style ={{color:'red'}}>{this.state.idcard_passportError}</label>
                                        </FormGroup>
                                    </Col>
                                </Row>              
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Label for="phone">Số điện thoại</Label>
                                                <Input type="text"
                                                name="phone"
                                                placeholder="Nhập số điện thoại"
                                                value = {this.state.phone}
                                                onChange= {e => this.change(e)} 
                                            />
                                            <label style ={{color:'red'}}>{this.state.phoneError}</label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={8}>
                                        <FormGroup>
                                            <Label for="address">Address</Label>
                                            <Input type="text"
                                                name="address"
                                                placeholder="1234 Main St"
                                                value = {this.state.address}
                                                onChange= {e => this.change(e)}
                                            />
                                            <label style ={{color:'red'}}>{this.state.addressError}</label>
                                        </FormGroup> 
                                    </Col>
                                </Row>  
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Col md={12} className="flex-end">
                                <Button outline color="gray">Hủy</Button>
                                <button onClick = {e => this.onSubmit(e)} 
                                className = "btn btn-primary">
                                    Thêm
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
