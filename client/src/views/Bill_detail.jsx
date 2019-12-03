import React from "react";
import "./Style.css";

import{
    Card,
    CardBody,
    CardHeader,
    Row,
    Col
} from 'reactstrap';
import { 
    MDBTable,
    MDBTableBody,
    MDBTableHead
  } from 'mdbreact';
const datadetail = {
    columns: [
      {
        label: 'Phòng',
        field: 'code_room',
        width: 150
      },
      {
        label: 'Giá',
        field: 'price',
        width: 150
      },
      {
        label: 'Ngày đến',
        field: 'checkin',
        width: 150
      },
      {
        label: 'Ngày đi',
        field: 'checkout',
        width: 150
      },
      {
        label: 'Số ngày',
        field: 'staying_days',
        width: 150
      },
      {
        label: 'Thành tiền',
        field: 'amount',
        width: 150
      }
    ],
    rows: [
      {
        code_room: '001',
        price: '100000',
        checkin: '2019-10-20',
        checkout: '2019-10-25',
        staying_days:'5',
        amount:'500000',
      },
    ]
  };
export default class Form extends React.Component {
  state = {
    code_bill:"",
    bill_date:"",
    fullname_cus:"",
    fullname_emp:"",
    message:"",
    total:"",
    showForm : true
};
render() {
    return (
        <div className = 'popup'>
            <div className = 'background'></div>
            <div className = 'popup-inner'>
                <form>
                    <Card>
                        <CardHeader>
                            <h3>Chi tiết hóa đơn</h3>
                            <button type="button" class="close" 
                            onClick={this.props.closeForm}>
                                &times;
                            </button>
                        </CardHeader>
                        <hr/>
                        <CardBody>
                            <Row>
                                <Col md={2}>
                                    <p>Số hóa đơn:</p>
                                </Col>
                                <Col>
                                    <p>{this.state.code_bill}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <p>Ngày tạo:</p>
                                </Col>
                                <Col>
                                    <p>{this.state.bill_date}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <p>Nhân viên:</p>
                                </Col>
                                <Col>
                                    <p>{this.state.fullname_emp}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <p>Khách hàng:</p>
                                </Col>
                                <Col>
                                    <p>{this.state.bill_date}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <p>Ghi chú:</p>
                                </Col>
                                <Col>
                                    <p>{this.state.message}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={2}>
                                    <p>Tổng tiền:</p>
                                </Col>
                                <Col>
                                    <p>{this.state.total}</p>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <MDBTable responsive>
                                <MDBTableHead columns={datadetail.columns}/>
                                <MDBTableBody rows={datadetail.rows} />
                                </MDBTable>
                            </Row>
                        </CardBody>
                    </Card>
                </form>
            </div>
        </div>
    );
  }
}
