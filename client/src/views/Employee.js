<<<<<<< HEAD
import React from 'react';
import Popup from 'reactjs-popup';

import{
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Label,
    Row,
    Col,
    CardTitle,
    FormGroup,
    Input,
    Button,
    Table
}from 'reactstrap';
const initialState = {
    isShow : true,
        fullname :"",
        birthday :"",
        email :"",
        password :"",
        identity_card:"",
        phone: "",
        address:"",
        fullnameError:"",
        emailError:""
}
class Employee extends React.Component{
    state = initialState;

    
    handleClick = () => {
        this.setState({
            isShow: !this.state.isShow});
    }

    handleChange = event => {
        const Checkbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name] : Checkbox 
                ? event.target.checked 
                : event.target.value
        });
    };

    validate = () => {
        let fullnameError = {};
        let emailError = {};


        if(!this.state.fullname){
            fullnameError = 'Họ và tên không được để trống';
        }
        // else if(this.state.fullname){
        //     if(!this.state.fullname.match(/^([^0-9`!@#$%^&*()_\-=+\[\](){};'",./:\s]){2,}(\s[^0-9`!@#$%^&*()_\-=+\[\](){};'",./:\s]+)+$/g)){
        //         fullnameError = 'Họ và tên không hợp lệ';
        //     }
        // }

        if(!this.state.email){
            emailError = "Email không được để trống";
        }


        if(fullnameError || emailError) {
            this.setState({fullnameError});
            return false;
        }
        return true;
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let isValid = this.validate();
        if(isValid){
            console.log(this.state);

            //clear form
            this.setState(initialState);
        }
        console.log(this.state);
    }
/*-------------------- Form Add --------------------*/
    showForm = () => {
        if(this.state.isShow){
            return (
                <form onSubmit = {this.handleSubmit}>
                <FormGroup>
                    <Row>
                    <Col>
                        <h3>Thêm nhân viên</h3>
                    </Col>
                    </Row> 
                </FormGroup>
                <FormGroup>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="fullname">Họ và tên</Label>
                            <Input type="text"
                                name = "fullname"
                                placeholder="Nhập họ và tên"
                                value = {this.state.fullname}
                                onChange= {this.handleChange}/>
                            <div>{this.state.fullnameError}</div>
                        </FormGroup>
                        </Col>  
                        <Col md={6}>
                        <FormGroup>
                            <Label for="birthday">Ngày sinh</Label>
                            <Input type="date" 
                                name="birthday"
                                value = {this.state.birthday}
                                onChange = {this.handleChange} />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" 
                                name="email"
                                placeholder="Email"
                                value = {this.state.email}
                                onChange = {this.handleChange} />
                            <div>{this.state.emailError}</div>                  
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="password">Mật khẩu</Label>
                            <Input type="password"
                                name="password"
                                placeholder="Mật khẩu"
                                value = {this.state.password}
                                onChange = {this.handleChange}/>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="identity_card">Chứng minh nhân dân</Label>
                            <Input type="text"
                                name="dentity_card" 
                                placeholder="Số chứng minh thư"
                                value = {this.state.identity_card}
                                onChange = {this.handleChange} />
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="phone">Số điện thoại</Label>
                            <Input type="text"
                            name="phone"
                            placeholder="Nhập số điện thoại"
                            value = {this.state.phone}
                            onChange = {this.handleChange} />
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="address">Address</Label>
                        <Input type="text"
                            name="address"
                            placeholder="1234 Main St"
                            value = {this.state.address}
                            onChange = {this.handleChange}/>
                    </FormGroup>               
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="role">Chức vụ</Label>
                            <Input type="select">
                                <option value="1">Quản lý</option>
                                <option value="2">Kế toán</option>
                                <option value="3">Lễ tân</option>
                            </Input>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="status">Trạng thái</Label>
                            <Input type="select">
                                <option value="1">Hoạt động</option>
                                <option value="2">Khóa</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup check>
                        <Input type="checkbox" name="check" id="check"/>
                        <Label for="check" check>Check me out</Label>
                    </FormGroup>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 9 }}>
                            <FormGroup>
                            <Button outline color="secondary" onClick = {this.handleClick}>Hủy</Button>
                            <Button type = "submit" 
                                className = "btn btn-primary" 
                                name = "btn_add" 
                                onClick={this.handleSubmit}>Thêm</Button>
                            </FormGroup>
                        </Col>
                    </Row>
                    </FormGroup>
                </form>
            );
        }
    }
/*-------------------- End Form Add --------------------*/
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag = "h3">Danh sách nhân viên</CardTitle>  
                                </CardHeader>
                                <CardBody>
                                <div className="space-between">
                                    <form className="form-inline search-bar">
                                        <input style={{width: '300px'}} className="form-control" type="text" placeholder="Tìm kiếm..."/>
                                    </form>
{/*--------------------- Show Form Add-------------------------*/}               
                                    <Popup modal trigger={<button className = "btn btn-primary" name="btn_adduser" onClick={() => this.handleClick()}>
                                        <i className="fas fa-user-plus" />  Thêm nhân viên</button>}>        
                                        {this.showForm()}
                                    </Popup>
{/*------------------------End Show ----------  ---------------*/}
                                </div>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Họ</th>
                                            <th>Tên</th>
                                            <th>CMND</th>
                                            <th>Email</th>
                                            <th>SĐT</th>
                                            <th>Địa chỉ</th>
                                            <th>Sửa</th>
                                            <th>Xóa</th>
                                        </tr>
                                        </thead>
                                        <tbody>                                        
                                        </tbody>
                                    </Table>
                                </CardBody>
                                <CardFooter>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Employee;
=======
// import React from 'react';


// import {
//     Card,
//     CardHeader,
//     CardTitle,
//     CardBody,
//     CardFooter,
//     Table,
//     Input,
//     InputGroup,
//     InputGroupAddon,
//     InputGroupText,
//     Row,
//     Col,
//     // Form,
//     // FormGroup,
//     // Label,
//     // FormText,
//     // Modal,
//     // ModalHeader,
//     // ModalBody,
//     // ModalFooter,
//     Form,
//     FormGroup,
//     Label,
//     Button
// } from "reactstrap";

// class Employee extends React.Component{
//     render() {
//         return (
//             <>
//                 <div className="content">
//                     <Row>
//                         <Col md="12">
//                             <Card>
//                                 <CardHeader>
//                                     <CardTitle tag="h3">
//                                         <Row>
//                                             <Col md="6">
//                                                 Danh sách nhân viên
//                                             </Col>
//                                             <Col md="6">
//                                                 <form>
//                                                 <InputGroup>
//                                                     <Input placeholder="Tìm kiếm..." />
//                                                     <InputGroupAddon addonType="append">
//                                                     <InputGroupText>
//                                                         <i className="nc-icon nc-zoom-split" />
//                                                     </InputGroupText>
//                                                     </InputGroupAddon>
//                                                 </InputGroup>
//                                                 </form>
//                                             </Col>
//                                         </Row>                                        
//                                     </CardTitle>
//                                 </CardHeader>
//                                 <CardBody>
//                                     <Button className = "primary">Thêm</Button>
//                                     <Form>
//                                     <h3>Thêm nhân viên</h3>
//                                         <Row form>
//                                             <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="fullname">Họ và tên</Label>
//                                                 <Input type="text" name="fullname" id="fullname" placeholder="Nhập họ và tên" />
//                                             </FormGroup>
//                                             </Col>
//                                             <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="birthday">Ngày sinh</Label>
//                                                 <Input type="date" name="birthday" id="birthday" />
//                                             </FormGroup>
//                                             </Col>
//                                             <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="email">Email</Label>
//                                                 <Input type="email" name="email" id="email" placeholder="Email" />
//                                             </FormGroup>
//                                             </Col>
//                                             <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="password">Mật khẩu</Label>
//                                                 <Input type="password" name="password" id="password" placeholder="Mật khẩu" />
//                                             </FormGroup>
//                                             </Col>
//                                             <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="identity_card">Chứng minh nhân dân</Label>
//                                                 <Input type="text" name="dentity_card" id="dentity_card" placeholder="Số chứng minh thư" />
//                                             </FormGroup>
//                                             </Col>
//                                             <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="phone">Số điện thoại</Label>
//                                                 <Input type="text" name="phone" id="phone" placeholder="Nhập số điện thoại" />
//                                             </FormGroup>
//                                             </Col>
//                                         </Row>
//                                         <FormGroup>
//                                             <Label for="address">Address</Label>
//                                             <Input type="text" name="address" id="address" placeholder="1234 Main St"/>
//                                         </FormGroup>
                                        
//                                         <Row form>
//                                             <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="role">Chức vụ</Label>
//                                                 <Input type="select">
//                                                     <option value="1">Quản lý</option>
//                                                     <option value="2">Kế toán</option>
//                                                     <option value="3">Lễ tân</option>
//                                                 </Input>
//                                             </FormGroup>
//                                             </Col>
//                                             <Col md={6}>
//                                             <FormGroup>
//                                                 <Label for="status">Trạng thái</Label>
//                                                 <Input type="select">
//                                                     <option value="1">Hoạt động</option>
//                                                     <option value="2">Khóa</option>
//                                                 </Input>
//                                             </FormGroup>
//                                             </Col>
//                                         </Row>
//                                         <FormGroup check>
//                                             <Input type="checkbox" name="check" id="exampleCheck"/>
//                                             <Label for="exampleCheck" check>Check me out</Label>
//                                         </FormGroup>
//                                         <Row>
//                                             <Col>
//                                                 <Button outline color="secondary">Hủy</Button>
//                                                 <Button className = "btn btn-primary">Thêm</Button>
//                                             </Col>
//                                         </Row>
//                                         </Form>
//                                     <Table responsive>
//                                         <thead>
//                                         <tr>
//                                             <th>ID</th>
//                                             <th>Họ</th>
//                                             <th>Tên</th>
//                                             <th>CMND</th>
//                                             <th>Email</th>
//                                             <th>SĐT</th>
//                                             <th>Địa chỉ</th>
//                                             <th>Sửa</th>
//                                             <th>Xóa</th>
//                                         </tr>
//                                         </thead>
//                                         <tbody>                                        
//                                         </tbody>
//                                     </Table>
//                                 </CardBody>
//                                 <CardFooter>
//                                 </CardFooter>
//                             </Card>
//                         </Col>
//                     </Row>
//                 </div>
//             </>
//         );
//     }
// }


// export default Employee;
>>>>>>> e41089fb25a97076fcd9a0558bf00ea95eec6f88

