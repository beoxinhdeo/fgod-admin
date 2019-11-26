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
  
  
  import {  Row, Col} from "reactstrap";
import { Input, Button } from '@material-ui/core';
  const data = {
    columns: [
      {
        label: 'Phòng',
        field: 'code_room',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Loại phòng',
        field: 'type_name',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Giá',
        field: 'price',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Thao tác',
        field: 'button',
        width: 100
      }
    ],
    rows: [
      {
        code_room: '001',
        type_name: 'Phòng đơn',
        price: '1200000',
        button:
            <MDBBtn className="booking-btn" size="sm">Đặt phòng</MDBBtn>
      },
  
    ]
  };
class Booking extends React.Component {
    render(){

        return (
          <div className="content">
            <Row>
              <Col md="7">
                <MDBCard>
                  <MDBCardHeader>
                    <MDBCardTitle tag="h3">
                      <Row>
                        <Col md="6">
                          Tra cứu phòng
                        </Col>
                      </Row>
                    </MDBCardTitle>
                  </MDBCardHeader>


                  <MDBCardBody>
                    <Row>
                        <Col md="4">
                            <Input type="date" className="booking-input"></Input>
                        </Col>
                        <Col>
                            <i className="fas fa-arrow-right flex-center"></i>
                        </Col>
                        
                        <Col md="4">
                            <Input type="date" className="booking-input"></Input>
                        </Col>
                        <Col md="3">
                            <MDBBtn type="button" size="sm" className="find-btn">Tra cứu</MDBBtn>
                        </Col>
                    </Row>
                    <hr />
                    <MDBTable responsive>
                      <MDBDataTable striped data = {data}/>
                    </MDBTable>
                  </MDBCardBody>
                </MDBCard>
              </Col>
              <Col md="5">
                <MDBCard>
                    <MDBCardHeader>
                        <MDBCardTitle tag="h3">
                        <Row>
                            <Col md="6">
                                Khách hàng
                            </Col>
                        </Row>
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                    </MDBCardBody>
                </MDBCard>
                <MDBCard>
                    <MDBCardHeader>
                        <MDBCardTitle tag="h3">
                        <Row>
                            <Col md="6">
                                Thanh toán
                            </Col>
                        </Row>
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                    </MDBCardBody>
                </MDBCard>                
              </Col>
            </Row>
          </div> 
        )
    }
}
export default Booking;