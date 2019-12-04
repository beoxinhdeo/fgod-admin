
import React from 'react';


import Form from "views/employee/AddEmp.jsx";
import Edit from "views/employee/EditEmp.jsx";

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

class Employee extends React.Component{
 // _isMounted = false;
  state = {
  showForm : false,
  showEdit : false,

};

componentDidMount(){
  //this._isMounted = true;
  this.renderDataTable()
};
   
// componentWillUnmount() {
//   this._isMounted = false;
// }

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

toggleEdit(e) {
  this.setState({
    showEdit: !this.state.showEdit,
    id: e
  });
}



renderDataTable()
{


  axios.post('http://localhost:5000/users/show')
  .then((res) => 
  {   
  
      let ress = res.data.map (data => data.button =  <div>
        <MDBBtn onClick={this.toggleEdit.bind(this,data.code_emp)} className="edit-btn" size="sm"> Sửa</MDBBtn>
        {/* <MDBBtn className="delete-btn" size="sm"> Xóa</MDBBtn> */}
      </div>) 
      //if (this._isMounted) {
  
     this.setState({
       fullname:"Beo xinh đẹp",
      data: {
        columns: [
          {
            label: 'ID',
            field: 'code_emp',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Họ và tên',
            field: 'fullname',
            sort: 'asc',
            width: 270
          },
          {
            label: 'CMND',
            field: 'identity_card',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Email',
            field: 'email',
            sort: 'asc',
            width: 100
          },
          // {
          //   label: 'Ngày sinh',
          //   field: 'birthday',
          //   sort: 'asc',
          //   width: 150
          // },
          {
            label: 'Số điện thoại',
            field: 'phone',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Địa chỉ',
            field: 'address',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Thao tác',
            field: 'button',
            width: 100
          }
        ],
      rows : res.data 
    
      }
      })
   // }

}
);
console.log(this.state.data)

}

updateState()
    {
      this.renderDataTable()
    }






// shouldComponentUpdate(nextProps, nextState) {
//     if (this.state.data === nextState.data) {
//         return false
//     }
//     return true
// }




    render() {
        return (
            <div className="content">
            <Row>
              <Col md="12">
                <MDBCard>
                  <MDBCardHeader>
                    <MDBCardTitle tag="h3">
                      <Row>
                        <Col md="6">Danh sách nhân viên</Col>
                        <Col md="6" className="flex-end">
                          <MDBBtn onClick={this.toggleForm.bind(this)} className="add-btn"> 
                          <i className = "fas fa-user-plus"/>Thêm nhân viên </MDBBtn>
                          {this.state.showForm ? 
                            <Form
                              closeForm={this.toggleForm.bind(this)}
                              onChange = {fields => this.onChange(fields)}
                              className="form"
                              newlist ={this.updateState.bind(this)}
                            />
                            : null
                          }

                          {this.state.showEdit ? 
                            <Edit
                              id ={this.state.id}
                              closeEdit={this.toggleEdit.bind(this)}
                              onChange = {fields => this.onChange(fields)}
                              className="form"
                              newlist ={this.updateState.bind(this)}
                            />
                            : null
                          }
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
export default Employee;
