import React from 'react';
import {MDBDataTable, MDBTable, MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdbreact';
import {Row, Col} from "reactstrap";
import "./Style.css"
const Bill = (props) => {
  const data = {
    columns: [
      {
        label: 'ID',
        field: 'id',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Ngày',
        field: 'date',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Tổng tiền',
        field: 'total',
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
        date: '11/11/2019',
        total: '1200000',
        button:
        <div>
          <MDBBtn className="detail-btn" size="sm">Chi tiết</MDBBtn>
        </div>
      },
      {
        id: '002',
        date: '12/11/2019',
        total: '2000000',
        button:
        <div>
          <MDBBtn className="detail-btn" size="sm">Chi tiết</MDBBtn>
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
                    Danh sách hóa đơn
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

  export default Bill;