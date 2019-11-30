import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardHeader, MDBBtn } from "mdbreact";
import { Row, Button} from "reactstrap";
import "./Style.css";
import RoomInfo from "views/RoomInfo.jsx";
class RoomMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status : '3',
            showForm: false,
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
showAll() {
        return this.state.rooms.map((room, index) => {
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
                                        <MDBBtn className="detail0-btn"
                                            onClick={this.toggleForm.bind(this)}>
                                                Chi tiết
                                        </MDBBtn>
                                        {this.state.showForm ? 
                                            <RoomInfo
                                                closeForm={this.toggleForm.bind(this)}
                                                onChange = {fields => this.onChange(fields)}
                                            />
                                            : null
                                        }
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
                                        <MDBBtn className="detail1-btn" 
                                            onClick={this.toggleForm.bind(this)}>
                                                Chi tiết
                                        </MDBBtn>
                                        {this.state.showForm ? 
                                            <RoomInfo
                                                closeForm={this.toggleForm.bind(this)}
                                                onChange = {fields => this.onChange(fields)}
                                            />
                                            : null
                                        }
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
                                        <MDBBtn className="detail2-btn"
                                            onClick={this.toggleForm.bind(this)}>
                                                Chi tiết
                                        </MDBBtn>
                                        {this.state.showForm ? 
                                            <RoomInfo
                                                closeForm={this.toggleForm.bind(this)}
                                                onChange = {fields => this.onChange(fields)}
                                            />
                                            : null
                                        }
                                    </Row>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    break;
            }                 
        return result;    
    });
}
showStatus_Empty() {
    return this.state.rooms.map((room, index) => {
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
                                    <MDBBtn className="detail0-btn"
                                        onClick={this.toggleForm.bind(this)}>
                                            Chi tiết
                                    </MDBBtn>
                                    {this.state.showForm ? 
                                        <RoomInfo
                                            closeForm={this.toggleForm.bind(this)}
                                            onChange = {fields => this.onChange(fields)}
                                        />
                                        : null
                                    }
                                </Row>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                break;
            
        }                 
    return result;    
});
}
showStatus_Busy() {
    return this.state.rooms.map((room, index) => {
        let result = '';
        switch(room.status)  {
            
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
                                    <MDBBtn className="detail1-btn"
                                        onClick={this.toggleForm.bind(this)}>
                                            Chi tiết
                                    </MDBBtn>
                                    {this.state.showForm ? 
                                        <RoomInfo
                                            closeForm={this.toggleForm.bind(this)}
                                            onChange = {fields => this.onChange(fields)}
                                        />
                                        : null
                                    }
                                </Row>
                            </MDBCardBody>
                        </MDBCard>
                    </div>
                break;
            
        }                 
    return result;    
});
}
showStatus_Ordered() {
    return this.state.rooms.map((room, index) => {
    let result = '';
    switch(room.status)  {
        
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
                                <MDBBtn className="detail2-btn"
                                    onClick={this.toggleForm.bind(this)}>
                                        Chi tiết
                                </MDBBtn>
                                {this.state.showForm ? 
                                    <RoomInfo
                                        closeForm={this.toggleForm.bind(this)}
                                        onChange = {fields => this.onChange(fields)}
                                    />
                                    : null
                                }
                            </Row>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            break;
    }                 
return result;    
});
}

setStateStatus_All() {
    this.setState({
        status : 3
       }); 
}
setStateStatus_Empty() {
    this.setState({
        status : "0"
       }); 
}
setStateStatus_Busy() {
    this.setState({
        status : "1"
       }); 
}
setStateStatus_Ordered() {
    this.setState({
        status : "2"
       }); 
}

render_rooms(e) {
    if(e==3) {
    return this.showAll()
    }

    if(e==0) {
    return this.showStatus_Empty()
    }
 
    if(e==1) {
        return this.showStatus_Busy()
    }

    if(e==2) {
        return this.showStatus_Ordered()
    }
}

    render() {
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
                        <Button className="all-btn" type="button" onClick = {this.setStateStatus_All.bind(this)} >Tất cả</Button>
                        <Button className="status0-btn" type="button" onClick = {this.setStateStatus_Empty.bind(this)}>Trống</Button>
                        <Button className="status1-btn" type="button" onClick = {this.setStateStatus_Busy.bind(this)}>Đang ở</Button>
                        <Button className="status2-btn" type="button" onClick = {this.setStateStatus_Ordered.bind(this)}>Đã đặt</Button>
                    </Row>
                </MDBCard>
                <Row>
                    {this.render_rooms(this.state.status)}
                </Row>
            </div>
        );
    }
};


export default RoomMap;