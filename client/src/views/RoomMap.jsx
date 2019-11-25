import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardHeader, MDBBtn } from "mdbreact";
import { Row, Button, Input } from "reactstrap";
import "./Style.css";

class RoomMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms : [
                {
                    status: 0,
                    code_room: 'A001',
                    checkin: '00/00/0000',
                    checkout: '00/00/0000',
                    button:
                        <Row className="space-between">
                            <MDBBtn className="booking-btn col-5">Đặt</MDBBtn>
                            <MDBBtn className="checkin1-btn col-5">Check in</MDBBtn>
                        </Row>,
                    show: true

                },
                {
                    status: 1,
                    code_room: 'B002',
                    checkin: '23/11/2019',
                    checkout: '25/11/2019',
                    button:
                        <Row className="center">
                            <MDBBtn className="checkout-btn">Check out</MDBBtn>
                        </Row>,
                    show: true
                },
                {
                    status: 1,
                    code_room: 'C001',
                    checkin: '23/11/2019',
                    checkout: '25/11/2019',
                    button:
                        <Row className="center">
                            <MDBBtn className="checkout-btn">Check out</MDBBtn>
                        </Row>,
                    show: true

                },
                {
                    status: 2,
                    code_room: 'A003',
                    checkin: '25/11/2019',
                    checkout: '28/11/2019',
                    button:
                        <Row className="space-between">
                            <MDBBtn className="checkin2-btn col-5">Check in</MDBBtn>
                            <MDBBtn className="cancle-btn col-5">Hủy</MDBBtn>
                        </Row>,
                    show: true
                },
                {
                    status: 0,
                    code_room: 'A005',
                    checkin: '00/00/0000',
                    checkout: '00/00/0000',
                    button:
                        <Row className="space-between">
                            <MDBBtn className="booking-btn col-5">Đặt</MDBBtn>
                            <MDBBtn className="checkin1-btn col-5">Check in</MDBBtn>
                        </Row>,
                    show: true

                },
                {
                    status: 1,
                    code_room: 'B003',
                    checkin: '23/11/2019',
                    checkout: '25/11/2019',
                    button:
                        <Row className="center">
                            <MDBBtn className="checkout-btn">Check out</MDBBtn>
                        </Row>,
                    show: true,
                },
                {
                    status: 2,
                    code_room: 'A002',
                    checkin: '25/11/2019',
                    checkout: '28/11/2019',
                    button:
                        <Row className="space-between">
                            <MDBBtn className="checkin2-btn col-5">Check in</MDBBtn>
                            <MDBBtn className="cancle-btn col-5">Hủy</MDBBtn>
                        </Row>,
                    show: true
                },
                {
                    status: 0,
                    code_room: 'A006',
                    checkin: '00/00/0000',
                    checkout: '00/00/0000',
                    button:
                        <Row className="space-between">
                            <MDBBtn className="booking-btn col-5">Đặt</MDBBtn>
                            <MDBBtn className="checkin1-btn col-5">Check in</MDBBtn>
                        </Row>,
                    show: true
                },
                {
                    status: 1,
                    code_room: 'B004',
                    checkin: '23/11/2019',
                    checkout: '25/11/2019',
                    button:
                        <Row className="center">
                            <MDBBtn className="checkout-btn">Check out</MDBBtn>
                        </Row>,
                    show: true
                },
                {
                    status: 2,
                    code_room: 'A003',
                    checkin: '25/11/2019',
                    checkout: '28/11/2019',
                    button:
                        <Row className="space-between">
                            <MDBBtn className="checkin2-btn col-5">Check in</MDBBtn>
                            <MDBBtn className="cancle-btn col-5">Hủy</MDBBtn>
                        </Row>,
                    show: true
                },
                {
                    status: 0,
                    code_room: 'A007',
                    checkin: '00/00/0000',
                    checkout: '00/00/0000',
                    button:
                        <Row className="space-between">
                            <MDBBtn className="booking-btn col-5">Đặt</MDBBtn>
                            <MDBBtn className="checkin1-btn col-5">Check in</MDBBtn>
                        </Row>,
                    show: true
                }
            ]

        };

    }
    

    render() {
        let elements = this.state.rooms.map((room, index) => {
            let result = '';
            switch(room.status)  {
                case 0:
                    result =
                        <div className="col-md-2">
                            <MDBCard className="card-room">
                                <MDBCardHeader className="status0">{room.code_room}</MDBCardHeader>
                                <MDBCardBody>
                                    <Row className="center">
                                        {room.checkin}
                                    </Row>
                                    <Row className="center">
                                        {room.checkout}
                                    </Row>
                                    {room.button}
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    break;
                case 1:
                    result =
                        <div className="col-md-2">
                            <MDBCard className="card-room">
                                <MDBCardHeader className="status1">{room.code_room}</MDBCardHeader>
                                <MDBCardBody>
                                    <Row className="center">
                                        {room.checkin}
                                    </Row>
                                    <Row className="center">
                                        {room.checkout}
                                    </Row>
                                    {room.button}
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    break;
                case 2:
                    result =
                        <div className="col-md-2">
                            <MDBCard className="card-room">
                                <MDBCardHeader className="status2">{room.code_room}</MDBCardHeader>
                                <MDBCardBody>
                                    <Row className="center">
                                        {room.checkin}
                                    </Row>
                                    <Row className="center">
                                        {room.checkout}
                                    </Row>
                                    {room.button}
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    break;
            }                 
            return result;
            
        });           
        
        return (
            <div className="content">
                <MDBCard className="card-roommap">  
                    <MDBCardHeader>
                        <MDBCardTitle>
                            Quản lý phòng
                        </MDBCardTitle>
                    </MDBCardHeader>              
                    <Row className="flex-center">
                        <span>Tra cứu phòng: </span>
                        <Input type="date" className="search-room"></Input>
                        <span className="fas fa-arrow-right flex-center"></span>
                        <Input type="date" className="search-room"></Input>
                        <Button className="find-btn">Tra cứu</Button>
                    </Row>
                    <hr />
                    <Row className="flex-center">
                        <span className="flex-center">Tình trạng phòng: </span>
                        <Button className="status0-btn" type="button">Phòng trống: SL</Button>
                        <Button className="status1-btn" type="button">Đang ở: SL</Button>
                        <Button className="status2-btn" type="button">Đã đặt: SL</Button>
                    </Row>
                </MDBCard>
                <Row>
                    {elements}
                </Row>
            </div>
        );
    }
};

export default RoomMap;