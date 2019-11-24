import React from 'react';
import {MDBDataTable, MDBTable, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact';
import {Row, Col} from "reactstrap";
import "./Style.css"
const TypeRoom = (props) => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Tên loại phòng',
        field: 'typename',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Mô tả',
        field: 'description',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Trạng thái',
        field: 'status',
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
        typename: 'Phòng đôi',
        description: 'Phòng có cái giường lớn với cái toilet',
        status: '1',
        button:
        <div>
          <MDBBtn className="edit-btn" size="sm">Sửa</MDBBtn>
          <MDBBtn className="delete-btn" size="sm">Xóa</MDBBtn>
        </div>
      },
      {
        id: '002',
        typename: 'Phòng đơn',
        description: 'Phòng có cái giường nhỏ với cái toilet',
        status: '1',
        button:
        <div>
          <MDBBtn className="edit-btn" size="sm">Sửa</MDBBtn>
          <MDBBtn className="delete-btn" size="sm">Xóa</MDBBtn>
        </div>
      },
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
                    Danh sách loại phòng
                  </Col>
                  <Col md="6" className="flex-end">
                    <MDBBtn className="add-btn"> Thêm loại phòng</MDBBtn>
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

  export default TypeRoom;