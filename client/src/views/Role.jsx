// /*!

// =========================================================
// * Paper Dashboard React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/paper-dashboard-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)

// * Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */


import React from 'react';
import { 
  MDBDataTable,
  MDBTable,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
  MDBBadge
} from 'mdbreact';

import Form from "views/AddRole.jsx";

import {
  Row,
  Col
} from "reactstrap";

import axios from 'axios';   


const data = {
  columns: [
    {
      label: 'ID',
      field: 'code_role',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Bộ phận',
      field: 'rolename',
      sort: 'asc',
      width: 500
    },
    {
      label: 'Thao tác',
      field: 'button',
      width: 100
    }
  ],
  rows: [
    {
      code_role: '001',
      rolename: 'Quản lý',
      button:
      <div>
        <MDBBtn className="edit-btn" size="sm"> Sửa</MDBBtn>
        <MDBBtn className="delete-btn" size="sm"> Xóa</MDBBtn>
      </div>
    },
  ]
};

class Role extends React.Component {
  state = {
    showForm : false
  };

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






componentDidMount(){
  
  axios.post('http://localhost:5000/roles/show')
    .then((res) => 
    {   
        let ress = res.data.map (data =>
          {
          if(data.bill_role == "true")
          {
          data.button_bill =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default success-btn"><i className="fas fa-check-circle fa-lg icon"></i></MDBBadge>
          </div>;
          }
          if(data.bill_role == "false")
          {
          data.button_bill =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default remove-btn "><i className=" fas fa-ban fa-lg icon"></i></MDBBadge>
          </div>;
          }


          if(data.cus_role == "true")
          {
          data.button_cus =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default success-btn"><i className="fas fa-check-circle fa-lg icon"></i></MDBBadge>
          </div>;
          }
          if(data.cus_role == "false")
          {
          data.button_cus =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default remove-btn "><i className=" fas fa-ban fa-lg icon"></i></MDBBadge>
          </div>;
          }


          if(data.emp_role == "true")
          {
          data.button_emp =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default success-btn"><i className="fas fa-check-circle fa-lg icon"></i></MDBBadge>
          </div>;
          }
          if(data.emp_role == "false")
          {
          data.button_emp =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default remove-btn "><i className=" fas fa-ban fa-lg icon"></i></MDBBadge>
          </div>;
          }


          if(data.role_role == "true")
          {
          data.button_role =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default success-btn"><i className="fas fa-check-circle fa-lg icon"></i></MDBBadge>
          </div>;
          }
          if(data.role_role == "false")
          {
          data.button_role =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default remove-btn "><i className=" fas fa-ban fa-lg icon"></i></MDBBadge>
          </div>;
          }


          if(data.room_role == "true")
          {
          data.button_room =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default success-btn"><i className="fas fa-check-circle fa-lg icon"></i></MDBBadge>
          </div>;
          }
          if(data.room_role == "false")
          {
          data.button_room =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default remove-btn "><i className=" fas fa-ban fa-lg icon"></i></MDBBadge>
          </div>;
          }


          if(data.roomtype_role == "true")
          {
          data.button_roomtype =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default success-btn"><i className="fas fa-check-circle fa-lg icon"></i></MDBBadge>
          </div>;
          }
          if(data.roomtype_role == "false")
          {
          data.button_roomtype =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default remove-btn "><i className=" fas fa-ban fa-lg icon"></i></MDBBadge>
          </div>;
          }


          if(data.statistic_role == "true")
          {
          data.button_statistic =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default success-btn"><i className="fas fa-check-circle fa-lg icon"></i></MDBBadge>
          </div>;
          }
          if(data.statistic_role == "false")
          {
          data.button_statistic =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default remove-btn "><i className=" fas fa-ban fa-lg icon"></i></MDBBadge>
          </div>;
          }



          if(data.booking_role == "true")
          {
          data.button_booking =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default success-btn"><i className="fas fa-check-circle fa-lg icon"></i></MDBBadge>
          </div>;
          }
          if(data.booking_role == "false")
          {
          data.button_booking =  <div>
          <MDBBadge className="btn-floating btn-lg btn-default remove-btn "><i className=" fas fa-ban fa-lg icon"></i></MDBBadge>
          </div>;
          }




          data.button=  <div>
          <MDBBtn className="edit-btn" size="sm"> Sửa</MDBBtn>
          <MDBBtn className="delete-btn" size="sm"> Xóa</MDBBtn>
          </div>
          }) 
    
       this.setState({
        data: {
          columns: [
            {
              label: 'ID',
              field: 'idrole',
              sort: 'asc',
              //width: 100
            },
            {
              label: 'Bộ phận',
              field: 'rolename',
              sort: 'asc',
              //width: 500
            },
            
            {
              label: 'Hóa đơn',
              field: 'button_bill',
             // width: 100
            },
            {
              label: 'Khách hàng',
              field: 'button_cus',
              //width: 100
            },
            {
              label: 'Nhân viên',
              field: 'button_emp',
              //width: 100
            },
            {
              label: 'Quyền',
              field: 'button_role',
              //width: 100
            },
            {
              label: 'Phòng',
              field: 'button_room',
             // width: 100
            },
            {
              label: 'Loại phòng',
              field: 'button_roomtype',
              //width: 100
            },
            {
              label: 'Thống kê',
              field: 'button_statistic',
             // width: 100
            },
            {
              label: 'Đặt phòng',
              field: 'button_booking',
             // width: 100
            },
            {
              label: 'Thao tác',
              field: 'button',
             // width: 200
            }
          ],
        rows : res.data 
      
        }
        })
  
}
);
console.log(this.state.data)
}



render(){
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <MDBCard>
            <MDBCardHeader>
              <MDBCardTitle tag="h3">
                <Row>
                  <Col md="6">
                    Danh sách bộ phận</Col>
                  <Col md="6" className="flex-end">
                    <MDBBtn onClick={this.toggleForm.bind(this)} className="add-btn">
                    <i className = "fas fa-plus"/> Thêm bộ phận
                    </MDBBtn>
                    {this.state.showForm ? 
                      <Form
                        closeForm={this.toggleForm.bind(this)}
                        onChange = {fields => this.onChange(fields)}
                      />
                      : null
                    }
                  </Col>
                </Row>
              </MDBCardTitle>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBTable responsive>
                <MDBDataTable striped data ={this.state.data}/>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </Col>
      </Row>
    </div> 
  );
};
}

export default Role;
