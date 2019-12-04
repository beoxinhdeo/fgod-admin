import React from "react";
import "./Stylee.css";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios';   


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
    room_name:"",
    room_nameError:"",
    price:"",
    priceError:"",
    description:"",
    descriptionError:"",
    status:"",
    showForm : true
};
    //handle change
change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
        [e.target.name]: e.target.value,
        room_nameError:"",
        priceError:"",
        descriptionError:""
    });
};

    //Reg ex
validate = () => {
    let isError = false;
    const errors = {};
    const pattname  = /^[^.,@#$%^&*<>?]{1,}$/g;
    if(!this.state.room_name){
        isError = true;
        errors.room_nameError = "Số phòng không được để trống";
    }
    else if(this.state.room_name){
        if(!this.state.room_name.match(pattname)){  
        isError = true;
        errors.room_nameError = "Số phòng không hợp lệ";
        }
    }
    if(!this.state.price){
        isError = true;
        errors.priceError = "Giá không được để trống";
    }
    if(!this.state.description){
        isError = true;
        errors.descriptionError = "Mô tả không được để trống";
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
            room_name:"",
            room_nameError:"",
            price:"",
            priceError:"",
            description:"",
            descriptionError:"",
            status:"",
            showForm: !this.state.showForm
          });

        this.props.onChange({
            room_name:"",
            room_nameError:"",
            price:"",
            priceError:"",
            description:"",
            descriptionError:"",
            status:""
        });

        const obj = {
           // code_room :      this.state.code_room,
            room_name :       this.state.room_name,
            code_type :      this.state.code_type,
            price :          this.state.price,
            description :    this.state.description,
            status :         this.state.status,
           
        };
      
        axios.post('http://localhost:3000/rooms/create', obj)
        .then(res =>
            {
                axios.post('http://localhost:5000/users/show')
                .then(response => {
                        this.setState({ data: response.data });
                        this.props.newlist(this.state.data)
                }
                )
                console.log(res)
                this.setState({
                    code_room :"",
                    fullnameError: "",
                    code_type :"",
                    price:"",
                    description :"",
                    status:"",
       
        showForm: !this.state.showForm
      });

    this.props.onChange({
                    code_room :"",
                    fullnameError: "",
                    code_type :"",
                    price:"",
                    description :"",
                    status:"",
       
    });
  


        alert("Bạn đã thêm "+ this.state.room_name+"thành công!"); 
        this.props.closeForm({
            showForm: !this.state.showForm
        })

        
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
                            <h3>Thêm phòng</h3>
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
                                            <Label for="room_name">Số phòng</Label>
                                            <Input type="text"
                                                name = "room_name"
                                                placeholder="Nhập số phòng"
                                                value = {this.state.room_name}
                                                onChange= {e => this.change(e)}
                                            />
                                            <label style ={{color:'red'}}>{this.state.room_nameError}</label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="code_type">Loại phòng</Label>
                                            <Input type="select"
                                            name = "statuss"
                                            value = {this.state.code_type}
                                            onChange= {e => this.change(e)}>
                                                <option value="1">Phòng đơn</option>
                                                <option value="2">Phòng đơn</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup >
                                            <Label for="giá">Giá</Label>
                                            <Input type="int"
                                                name = "price"
                                                placeholder="Nhập giá phòng"
                                                value = {this.state.price}
                                                onChange= {e => this.change(e)}
                                            />
                                            <label style ={{color:'red'}}>{this.state.priceError}</label>
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="status">Trạng thái</Label>
                                            <Input type="select"
                                            name = "statuss"
                                            value = {this.state.status}
                                            onChange= {e => this.change(e)}>
                                                <option value="1">Hoạt động</option>
                                                <option value="2">Khóa</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <FormGroup>
                                            <label>Mô tả</label>
                                            <TextareaAutosize
                                                name = "description"
                                                value={this.state.description}
                                                style = {{width:"100%"}}
                                                rowsMax={4}
                                                placeholder="Thêm mô tả"
                                                onChange= {e => this.change(e)}  
                                            />
                                            <label style ={{color:'red'}}>{this.state.descriptionError}</label>
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
