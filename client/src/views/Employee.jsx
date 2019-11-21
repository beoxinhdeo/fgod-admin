
import React from 'react';

import Form from "views/AddEmp.jsx";

import{
    Row,
    Col
} from 'reactstrap';
import { 
    MDBDataTable,
    MDBTable,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn 
} from 'mdbreact';
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
state = {
  showForm : false
};
onChange = updatevalue => {
  this.setState({fields : {
      ...this.state.fields,
      ...updatevalue
    }
  });
};

toggleForm() {
  this.setState({
    showForm: !this.state.showForm
  });
}

    render() {
        return (
            <div className="content">
            <Row>
              <Col md="12">
                <MDBCard>
                  <MDBCardHeader>
                    <MDBCardTitle tag="h3">
                      <Row>
                        <Col md="6">Danh sách khách hàng</Col>
                        <Col md="6" className="flex-end">
                          <MDBBtn onClick={this.toggleForm.bind(this)} className="add-btn">
                            <i className = "fas fa-user-plus"/> Thêm nhân viên 
                          </MDBBtn>
                          {this.state.showForm ? 
                            <Form
                              closeForm={this.toggleForm.bind(this)}
                              onChange = {fields => this.onChange(fields)}
                            />
                            : null
                          }
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
