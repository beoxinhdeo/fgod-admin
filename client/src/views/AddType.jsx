import React from "react";
import "./Stylee.css";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    type_name: "",
    type_nameError: "",
    description: "",
    descriptionError: "",
    showForm : true
};
    //handle change
change = e => {
    this.props.onChange({[e.target.name]: e.target.value});
    this.setState({
        [e.target.name]: e.target.value,
        type_nameError: "",
        descriptionError: "",
    });
};

    //Reg ex
validate = () => {
    let isError = false;
    const errors = {};
    const pattname  = /^[^.,@#$%^&*\]<>?]{1,}$/g;
    if(!this.state.type_name){
        isError = true;
        errors.type_nameError = "Loại phòng không được để trống";
    }
    else if(this.state.type_name){
        if(!this.state.type_name.match(pattname)){
        isError = true;
        errors.type_nameError = "Loại phòng không hợp lệ";
        }
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
            type_name: "",
            type_nameError: "",
            description: "",
            descriptionError: "",
            showForm: !this.state.showForm
          });
        this.props.onChange({
            type_name: "",
            type_nameError: "",
            description: "",
            descriptionError: "",
        });
        alert("Bạn đã thêm "+ this.state.type_name+"thành công!"); 
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
                            <h3>Thêm loại phòng</h3>
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
                                            <Label for="type_name">Loại phòng</Label>
                                            <Input type="text"
                                                name = "type_name"
                                                placeholder="Nhập loại phòng"
                                                value = {this.state.type_name}
                                                onChange= {e => this.change(e)}
                                            />
                                            <label style ={{color:'red'}}>{this.state.type_nameError}</label>
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
