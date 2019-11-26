import React from 'react';
import { 
    MDBDataTable,
    MDBTable,
    MDBBtn
  } from 'mdbreact';
  
  
import { Card, CardBody, CardHeader, CardTitle, Row, Col, Input, Button} from "reactstrap";
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
                <Card>
                  <CardHeader>
                    <CardTitle tag="h3">
                      Tra cứu phòng
                    </CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Row className="flex-center">
                        <Col md="4">
                            <Input type="date" className="booking-input"></Input>
                        </Col>
                        <Col>
                            <i className="fas fa-arrow-right"></i>
                        </Col>                       
                        <Col md="4">
                            <Input type="date" className="booking-input"></Input>
                        </Col>
                        <Col md="3">
                            <Button type="button" size="sm" className="find-btn">Tra cứu</Button>
                        </Col>
                    </Row>
                    <hr />
                    <MDBTable responsive>
                      <MDBDataTable striped data = {data}/>
                    </MDBTable>
                  </CardBody>
                </Card>
              </Col>
              <Col md="5">
                <Card>
                    <CardHeader>
                        <CardTitle tag="h3">
                          Thông tin khách hàng
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle tag="h3">
                          Thanh toán
                        </CardTitle>
                    </CardHeader>
                    <CardBody>
                    </CardBody>
                </Card>                
              </Col>
            </Row>
          </div> 
        )
    }
}
export default Booking;