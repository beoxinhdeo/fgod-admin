
import React from 'react';
//import TextField from '@material-ui/core/TextField';

import{
    Row,
    Col
} from 'reactstrap';

import { 
    MDBDataTable,
    MDBTable,
    MDBCard,
    MDBCardHeader,
    MDBCardBody,
    MDBCardTitle,
    MDBBtn 
} from 'mdbreact';

import axios from 'axios';  
import Form from "views/Bill_detail.jsx" 



class Bill extends React.Component{
state = {
  showForm : false
};

onChange = updatevalue => {
  this.setState({fields : {
      ...this.state.fields,
      ...updatevalue
    }
  });
}

toggleForm() {
  this.setState({
    showForm: !this.state.showForm
  });
}




componentDidMount(){
  
    axios.post('http://localhost:5000/bills/show')
      .then((res) => 
      {   
         res.data.map (data => data.button =  <div>
            <MDBBtn className="edit-btn" onClick={this.toggleForm.bind(this)} size="sm"> Chi Tiết</MDBBtn>
          </div>)

         res.data.map ( data => 
            {
              data.cus_name = data.customer.fullname;
              data.emp_name = data.employee.fullname
            })
      
         this.setState({
          data: {
            columns: [
              {
                label: 'Mã Hóa Đơn',
                field: 'code_bill',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Tên nhân viên',
                field: 'emp_name',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Tên khách hàng',
                field: 'cus_name',
                sort: 'asc',
                width: 270
              },
              {
                label: 'Ngày tạo',
                field: 'bill_date',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Tổng tiền',
                field: 'total',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Chi tiết',
                field: 'button',
                width: 100
              }
            ],
          rows : res.data 
        
          }
          })
          console.log(res.data)
  }
  
  );
 
  }




    render() {
        return (
            <div className="content">
              <div>{this.state.showForm ? 
                            <Form
                              closeForm={this.toggleForm.bind(this)}
                              onChange = {fields => this.onChange(fields)}
                              className="form"
                            />
                            : null
                          }</div>
            <Row>
              <Col md="12">
                <MDBCard>
                  <MDBCardHeader>
                    <MDBCardTitle tag="h3">
                      <Row>
                        <Col md="6">Danh sách hóa đơn</Col>
                        <Col md="6" className="flex-end">
                          
                        </Col>
                      </Row>
                    </MDBCardTitle>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBTable responsive>
                      <MDBDataTable striped data = {this.state.data}/>
                    </MDBTable>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </Row>
          </div> 
        );
        }
};
export default Bill;
