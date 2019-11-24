
import React from 'react';
import Popup from 'reactjs-popup';

import{ Label, Row, Col, FormGroup, Input, Button} from 'reactstrap';
import { MDBDataTable, MDBTable, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBBtn} from 'mdbreact';
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

const data = {
    columns: [
    {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
    },
    {
        label: 'Họ và tên',
        field: 'fullname',
        sort: 'asc',
        width: 270
    },
    {
        label: 'CMND',
        field: 'id_card',
        sort: 'asc',
        width: 200
    },
    {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Ngày sinh',
        field: 'birthday',
        sort: 'asc',
        width: 150
    },
    {
        label: 'Số điện thoại',
        field: 'phone',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Địa chỉ',
        field: 'address',
        sort: 'asc',
        width: 100
    },
    {
        label: 'Quyền',
        field: 'role',
        sort: 'asc',
        width: 50
    },
    {
        label: 'Trạng thái',
        field: 'status',
        sort: 'asc',
        width: 50
    },
    {
        label: 'Thao tác',
        field: 'button',
        width: 100
    }
    ],
    rows: [
    {
        id: '001',
        fullname: 'Nguyễn Thị Phương Nhi',
        id_card: '272695452',
        email: 'phuongnhi@gmail.com',
        birthday: '01/01/1999',
        phone: '0961619712',
        address: 'HCM',
        role: '1',
        status: '1',
        button:
        <div>
        <MDBBtn className="edit-btn" size="sm"> Sửa</MDBBtn>
        <MDBBtn className="delete-btn" size="sm"> Xóa</MDBBtn>
        </div>
    },
    ]
    };
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
            <div className="content">
            <Row>
              <Col md="12">
                <MDBCard>
                  <MDBCardHeader>
                    <MDBCardTitle tag="h3">
                      <Row>
                        <Col md="6">
                          Danh sách khách hàng
                        </Col>
                        <Col md="6" className="flex-end">
                            <Popup modal trigger={<MDBBtn className = "add-btn" onClick={() => this.handleClick()}>Thêm nhân viên</MDBBtn>}>        
                                {this.showForm()}
                            </Popup>
                        </Col>
                      </Row>
                    </MDBCardTitle>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBTable responsive>
                      <MDBDataTable striped data = {data}/>
                    </MDBTable>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
          </div> 
        );
        }
    };

export default Employee;
