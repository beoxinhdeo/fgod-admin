import React from 'react';
import { MDBDataTable, MDBTableHead, MDBTable, MDBTableBody, MDBCard, MDBCardHeader, MDBCardBody, MDBCardFooter, MDBCardTitle, MDBBtn } from 'mdbreact';
import { Table, Card, CardHeader, CardTitle, CardBody, Row, Col, Button } from "reactstrap";
import { readJsonConfigFile } from 'typescript';
import axios from 'axios';



class Example extends React.Component  {
  constructor()
  {
    super()
    this.state = { user : [] };
   }
  componentDidMount() {
    this.getUsers();
  }
  getUsers()
  {
    axios.get('http://localhost:5000/users/show')
     .then( response => {
      console.log(response);
      this.setState({ user : response});
     })
     .catch(function (error) {
       console.log(error);
     })
  }

render()
{
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
        label: 'Thao tác',
        field: 'button',
        width: 100
      }
    ],
    rows: this.state.user
  };
    return (
    <div className="content">
      <Row>
        <Col md="12">
          <MDBCard>
            <MDBCardHeader>
              <MDBCardTitle tag="h3">
                Danh sách khách hàng
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBBtn className="add-btn" size="sm">Thêm</MDBBtn>
              <MDBTable responsive>
              
              <MDBDataTable data = {data}/>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </Col>
      </Row>
    </div> 
  )
}
};

export default Example;