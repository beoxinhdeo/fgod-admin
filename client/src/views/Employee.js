import React from 'react';


import {
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    CardFooter,
    Table,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Col,
    // Form,
    // FormGroup,
    // Label,
    // FormText,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // ModalFooter,
    Form,
    FormGroup,
    Label,
    Button
} from "reactstrap";

class Employee extends React.Component{
    render() {
        return (
            <>
                <div className="content">
                    <Row>
                        <Col md="12">
                            <Card>
                                <CardHeader>
                                    <CardTitle tag="h3">
                                        <Row>
                                            <Col md="6">
                                                Danh sách nhân viên
                                            </Col>
                                            <Col md="6">
                                                <form>
                                                <InputGroup>
                                                    <Input placeholder="Tìm kiếm..." />
                                                    <InputGroupAddon addonType="append">
                                                    <InputGroupText>
                                                        <i className="nc-icon nc-zoom-split" />
                                                    </InputGroupText>
                                                    </InputGroupAddon>
                                                </InputGroup>
                                                </form>
                                            </Col>
                                        </Row>                                        
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Button className = "primary">Thêm</Button>
                                    <Form>
                                    <h3>Thêm nhân viên</h3>
                                        <Row form>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label for="fullname">Họ và tên</Label>
                                                <Input type="text" name="fullname" id="fullname" placeholder="Nhập họ và tên" />
                                            </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label for="birthday">Ngày sinh</Label>
                                                <Input type="date" name="birthday" id="birthday" />
                                            </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label for="email">Email</Label>
                                                <Input type="email" name="email" id="email" placeholder="Email" />
                                            </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label for="password">Mật khẩu</Label>
                                                <Input type="password" name="password" id="password" placeholder="Mật khẩu" />
                                            </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label for="identity_card">Chứng minh nhân dân</Label>
                                                <Input type="text" name="dentity_card" id="dentity_card" placeholder="Số chứng minh thư" />
                                            </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                            <FormGroup>
                                                <Label for="phone">Số điện thoại</Label>
                                                <Input type="text" name="phone" id="phone" placeholder="Nhập số điện thoại" />
                                            </FormGroup>
                                            </Col>
                                        </Row>
                                        <FormGroup>
                                            <Label for="address">Address</Label>
                                            <Input type="text" name="address" id="address" placeholder="1234 Main St"/>
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
                                            <Input type="checkbox" name="check" id="exampleCheck"/>
                                            <Label for="exampleCheck" check>Check me out</Label>
                                        </FormGroup>
                                        <Row>
                                            <Col>
                                                <Button outline color="secondary">Hủy</Button>
                                                <Button className = "btn btn-primary">Thêm</Button>
                                            </Col>
                                        </Row>
                                        </Form>
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

