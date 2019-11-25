import React from 'react';

import{
    Row,
    Col,
    FormGroup,
    Card,
    CardBody,
    CardHeader
} from 'reactstrap';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


  const rows = [
    // createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    // createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    // createData('Eclair', 262, 16.0, 24, 6.0),
    // createData('Cupcake', 305, 3.7, 67, 4.3),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
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
            <div className = 'background'></div>
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
                                <Row style={{width:"90%", marginLeft:"5%"}}>
                                    <Paper style={{width:"100%"}}>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Ngày đi</TableCell>
                                                    <TableCell align="right">Ngày đến</TableCell>
                                                    <TableCell align="right">Số ngày</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map(row => (
                                                    <TableRow>
                                                        <TableCell>{row.checkin}</TableCell>
                                                        <TableCell align="right">{row.checkout}</TableCell>
                                                        <TableCell align="right">{row.staying_days}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Paper>
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
