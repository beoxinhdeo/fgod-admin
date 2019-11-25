import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardHeader, MDBContainer, MDBBtn, MDBModal } from "mdbreact";
import { Row, Col, Button, Input } from "reactstrap";
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
                    show: true

                },
                {
                    status: 1,
                    code_room: 'B002',
                    checkin: '23/11/2019',
                    checkout: '25/11/2019',
                    show: true
                },
                {
                    status: 1,
                    code_room: 'C001',
                    checkin: '23/11/2019',
                    checkout: '25/11/2019',
                    show: true

                },
                {
                    status: 2,
                    code_room: 'A003',
                    checkin: '25/11/2019',
                    checkout: '28/11/2019',
                    show: true
                },
                {
                    status: 0,
                    code_room: 'A005',
                    checkin: '00/00/0000',
                    checkout: '00/00/0000',
                    show: true

                },
                {
                    status: 1,
                    code_room: 'B003',
                    checkin: '23/11/2019',
                    checkout: '25/11/2019',
                    show: true,
                },
                {
                    status: 2,
                    code_room: 'A002',
                    checkin: '25/11/2019',
                    checkout: '28/11/2019',
                    show: true
                },
                {
                    status: 0,
                    code_room: 'A006',
                    checkin: '00/00/0000',
                    checkout: '00/00/0000',
                    show: true
                },
                {
                    status: 1,
                    code_room: 'B004',
                    checkin: '23/11/2019',
                    checkout: '25/11/2019',
                    show: true
                },
                {
                    status: 2,
                    code_room: 'A003',
                    checkin: '25/11/2019',
                    checkout: '28/11/2019',
                    show: true
                },
                {
                    status: 0,
                    code_room: 'A007',
                    checkin: '00/00/0000',
                    checkout: '00/00/0000',
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
                                    <Row className="center">
                                        <MDBBtn className="detail0-btn">Chi tiết</MDBBtn>
                                    </Row>
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
                                    <Row className="center">
                                        <MDBBtn className="detail1-btn">Chi tiết</MDBBtn>
                                    </Row>
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
                                    <Row className="center">
                                        <MDBBtn className="detail2-btn">Chi tiết</MDBBtn>
                                    </Row>
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
                        <span className="flex-center">Tình trạng phòng: </span>
                        <Button className="all-btn" type="button">Tất cả: SL</Button>
                        <Button className="status0-btn" type="button">Trống: SL</Button>
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