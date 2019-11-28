import React from 'react';

import{
    Row,
    Col,
    FormGroup,
    Card,
    CardBody,
    CardHeader
} from 'reactstrap';

import { 
    MDBTable,
    MDBTableBody,
    MDBTableHead
  } from 'mdbreact';
const data = {
    columns: [
        {
          label: 'Ngày đến',
          field: 'check-in',
          width: 150
        },
        {
          label: 'Ngày đi',
          field: 'check-out',
          width: 150
        },
        {
          label: 'Số ngày',
          field: 'staying_days',
          width: 150
        },
    ],
    rows: [
        {
          checkin: '2019-10-20',
          checkout: '2019-10-25',
          staying_days:'5'
        },
    ]
}
export default class RoomInfo extends React.Component {
    state ={
        code_room: "",
        code_type:"",
        price:"",
        status:"",
        showForm: true
    }
    render() {
        return (
            <div className = 'popup'>
            <div className = 'background-modal-room'></div>
            <div className = 'popup-inner'>
                <form>
                    <Card>
                        <CardHeader>
                            <h3>Thông tin phòng</h3>
                            <button type="button" class="close" 
                            onClick={this.props.closeForm}>
                                &times;
                            </button>
                        </CardHeader>
                        <CardBody>
                            <FormGroup style = {{fontSize : '20px'}}>
                                <Row>
                                    <Col md = {6}>
                                        <label>Mã phòng:&nbsp;</label>
                                        <label name = "code_room"
                                            value = {this.state.code_room}
                                            disabled="disable"
                                            style ={{color:"black"}}>Như nè</label>
                                    </Col>
                                    <Col md = {6}>
                                        <label>Loại phòng:&nbsp;</label>
                                        <label name = "code_type"
                                            value = {this.state.code_type}
                                            disabled = "disable"
                                            style ={{color:"black"}}></label>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <label>Giá:&nbsp;</label>
                                        <label name = "price"                                       
                                            value = {this.state.price}
                                            disabled = "disable" 
                                            style ={{color:"black"}}></label>
                                    </Col>
                                    <Col md={6}>
                                        <label>Trạng thái:&nbsp;</label>
                                        <label name = "status"
                                            value = {this.state.status}
                                            disabled = "disable"
                                            style ={{color:"black"}}></label>
                                    </Col>
                                </Row>
                                <br/>
                                <label>Lịch đặt phòng</label><br/>
                                <Row>
                                    <MDBTable responsive>
                                        <MDBTableHead columns={data.columns}/>
                                        <MDBTableBody rows={data.rows} />
                                    </MDBTable>
                                </Row>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </form>
            </div>
        </div>
        );
    }
}
