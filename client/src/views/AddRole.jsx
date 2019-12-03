import React from "react";
import "./Style.css";
// import Popup from 'reactjs-popup';
import Checkbox from '@material-ui/core/Checkbox';


import{
    Label,
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
    rolename:"",
    rolenameError:"",
    roommap: false,
    booking: false,
    typeroom: false,
    customer: false,
    employee: false,
    role: false,
    bill: false,
    statistic: false,
    showForm : true
};
    //handle change text
change = e => {
    this.props.onChange({
        [e.target.name]: e.target.value,
    });
    this.setState({
        [e.target.name]: e.target.value,
        rolenameError:""
    });
};

//handle checkbox
checkChange = e => {
    console.log(e.target.checked);
    this.props.onChange({
        [e.target.name]: e.target.checked
    });
    this.setState({
        [e.target.name]: e.target.checked
    });
};
    //Reg ex
validate = () => {
    let isError = false;
    const errors = {};
    const pattname  = /^[^.,@#$%^&*<>?]{1,}$/g;;
    if(!this.state.rolename){
        isError = true;
        errors.rolenameError = "Tên bộ phận không được để trống";
    }
    else if(this.state.rolename){
        if(!this.state.rolename.match(pattname)){
        isError = true;
        errors.rolenameError = "Tên bộ phận không hợp lệ";
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
            rolename:"",
            rolenameError:"",
            roommap: false,
            booking: false,
            typeroom: false,
            customer: false,
            employee: false,
            role: false,
            bill: false,
            statistic: false,
            showForm: !this.state.showForm
          });
        this.props.onChange({
            rolename:"",
            rolenameError:"",
            roommap: false,
            booking: false,
            typeroom: false,
            customer: false,
            employee: false,
            role: false,
            bill: false,
            statistic: false,
        });
        alert("Bạn đã thêm " + this.state.rolename);
        this.props.closeForm({
            showForm: !this.state.showForm
        });       
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
                            <h3>Thêm bộ phận</h3>
                            <button type="button" class="close" 
                            onClick={this.props.closeForm}>
                                &times;
                            </button>
                        </CardHeader>
                        <CardBody>
                            <FormGroup style = {{fontSize : '16px'}}>
                                <FormGroup >
                                    <Label for="rolename">Tên bộ phận</Label>
                                    <Input type="text"
                                        name = "rolename"
                                        placeholder="Nhập tên bộ phận"
                                        value = {this.state.rolename}
                                        onChange= {e => this.change(e)}
                                    />
                                    <label style ={{color:'red'}}>{this.state.rolenameError}</label>
                                </FormGroup>
                                <label>Chọn chức năng quản lý: </label><br />
                                <FormGroup style = {{marginLeft : '5%'}}>
                                    <Checkbox
                                        name = "roommap" color="primary"
                                        checked={this.state.roommap}
                                        onChange= {e => this.checkChange(e)}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                        }}
                                    /> Quản lý sơ đồ phòng <br />
                                    <Checkbox
                                        name = "booking" color="primary"
                                        checked ={this.state.booking}
                                        onChange= {e => this.checkChange(e)}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                        }}
                                    /> Quản lý đặt phòng <br />
                                    <Checkbox
                                        name = "typeroom" color="primary"
                                        checked ={this.state.typeroom}
                                        onChange= {e => this.checkChange(e)}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                        }}
                                    /> Quản lý loại phòng <br />
                                    <Checkbox
                                        name = "customer" color="primary"
                                        checked={this.state.customer}
                                        onChange= {e => this.checkChange(e)}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                        }}
                                    /> Quản lý khách hàng <br />
                                    <Checkbox
                                        name = "employee" color="primary"
                                        checked={this.state.employee}
                                        onChange= {e => this.checkChange(e)}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                        }}
                                    /> Quản lý nhân viên <br />
                                    <Checkbox
                                        name = "role" color="primary"
                                        checked={this.state.role}
                                        onChange= {e => this.checkChange(e)}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                        }}
                                    /> Quản lý bộ phận <br />
                                    <Checkbox
                                        name = "bill" color="primary"
                                        checked={this.state.bill}
                                        onChange= {e => this.checkChange(e)}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                        }}
                                    /> Quản lý hóa đơn <br />
                                    <Checkbox
                                        name = "statistic" color="primary"
                                        checked={this.state.statistic}
                                        onChange= {e => this.checkChange(e)}
                                        inputProps={{
                                        'aria-label': 'primary checkbox',
                                        }}
                                    /> Thống kê <br />
                                </FormGroup>
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
