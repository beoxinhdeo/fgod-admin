// /*!

// =========================================================
// * Paper Dashboard React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/paper-dashboard-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)

// * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */


import React from 'react';
import { 
  MDBDataTable,
  MDBTable,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn 
} from 'mdbreact';

import Form from "views/AddType.jsx";

import {
  Row,
  Col
} from "reactstrap";
const data = {
  columns: [
    {
      label: 'ID',
      field: 'code_type',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Loại phòng',
      field: 'type_name',
      sort: 'asc',
      width: 500
    },
    {
      label: 'Mô tả',
      field: 'description',
      sort: 'asc',
      width: 500
    },
    {
      label: 'Thao tác',
      field: 'button',
      width: 100
    }
  ],
  rows: [
    {
      code_type: '001',
      type_name: 'Phòng đôi',
      description: 'Đây là phòng đôi',
      button:
      <div>
        <MDBBtn className="edit-btn" size="sm"> Sửa</MDBBtn>
        <MDBBtn className="delete-btn" size="sm"> Xóa</MDBBtn>
      </div>
    },
  ]
};
class Typeroom extends React.Component {
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
render(){
  return (
    <div className="content">
            <Row>
              <Col md="12">
                <MDBCard>
                  <MDBCardHeader>
                    <MDBCardTitle tag="h3">
                      <Row>
                        <Col md="6">Danh sách loại phòng</Col>
                        <Col md="6" className="flex-end">
                          <MDBBtn onClick={this.toggleForm.bind(this)} className="add-btn">
                          <i className = "fas fa-plus"/>Thêm loại phòng 
                          </MDBBtn>
                          {this.state.showForm ? 
                            <Form
                              closeForm={this.toggleForm.bind(this)}
                              onChange = {fields => this.onChange(fields)}
                              className="form"
                            />
                            : null
                          }
                        </Col>
                      </Row>
                    </MDBCardTitle>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBTable responsive>
                      <MDBDataTable striped data = {this.state.data}/>
                    </MDBTable>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
          </div> 
        );
        }
};

export default Typeroom;
