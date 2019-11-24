import React from 'react';
import {MDBDataTable, MDBTable, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact';
import {Row, Col} from "reactstrap";
import "./Style.css"
const Role = (props) => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Tên bộ phận',
        field: 'rolename',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Thao tác',
        field: 'button',
        sort: 'asc',
        width: 200
      }
    ],
    rows: [
      {
        id: '001',
        rolename: 'Lễ tân',
        button:
        <div>
          <MDBBtn className="edit-btn" size="sm">Sửa</MDBBtn>
          <MDBBtn className="delete-btn" size="sm">Xóa</MDBBtn>
        </div>
      },
      {
        id: '002',
        rolename: 'Quản lý',
        button:
        <div>
          <MDBBtn className="edit-btn" size="sm">Sửa</MDBBtn>
          <MDBBtn className="delete-btn" size="sm">Xóa</MDBBtn>
        </div>
      },
      {
        id: '003',
        rolename: 'Kế toán',
        button:
        <div>
          <MDBBtn className="edit-btn" size="sm">Sửa</MDBBtn>
          <MDBBtn className="delete-btn" size="sm">Xóa</MDBBtn>
        </div>
      }
    ]
  };
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <MDBCard>
            <MDBCardHeader>
              <MDBCardTitle tag="h3">
                <Row>
                  <Col md="6">
                    Danh sách bộ phận
                  </Col>
                  <Col md="6" className="flex-end">
                    <MDBBtn className="add-btn">Thêm bộ phận</MDBBtn>
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
  };

  export default Role;