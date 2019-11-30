import React from "react";
import TextField from '@material-ui/core/TextField';
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col
} from "reactstrap";

import { 
  MDBDataTable,
  MDBTable,
  MDBBtn 
} from 'mdbreact';

import Form from "views/Bill_detail.jsx";
import axios from 'axios'; 




class Statistic extends React.Component {
  state = {
    room_name:"",
    room_nameError:"",
    phone:"",
    phoneError:"",
    date_from:"",
    date_to:"",
    showForm : false,
    columns : [],
    rows:[]
};





toggleForm() {
  this.setState({
    showForm: !this.state.showForm
  });
}




    //handle change
change = e => {
    this.setState({
        [e.target.name]: e.target.value,
    });
};





    //Reg ex
validate = () => {
    let isError = false;
    const errors = {};
    const pattname  = /^[^\'\"\!.,@#$%^&*\(\)\{\}\[\]<>?]{1,}$/g;
    const pattPhone = /^0(3[2-9]|5[68-9]|7[06-9]|8[1-68-9]|9[0-46-9])[0-9]{7}$/g;
    if(this.state.room_name){
      if(!this.state.room_name.match(pattname)){
      isError = true;
      errors.room_nameError = "Số phòng không hợp lệ";
      }
    }
    if(this.state.phone){
      var obj = { phone : this.state.phone}
      axios.post('http://localhost:5000/customer/findvalid',obj).then(res => {
        if(res.data != "") 
        this.setState({
          phone : res.data[0].fullname,
          code_cus : res.data[0].code_cus,
        });
        //alert(res)
        else
        {
        alert("Sai mât khẩu");
        isError = true;
        }
      })
      if(!this.state.phone.match(pattPhone)){
      isError = true;
      errors.phoneError = "Số điện thoại không hợp lệ";
      }
  }
  let datefrom = Date.parse(this.state.date_from);
  let dateto = Date.parse(this.state.date_to);
  if(datefrom > dateto){
    isError = true;
    alert("Vui lòng chọn lại khoảng ngày");
  }
    if(isError){
        this.setState ({
            ...this.state,
            ...errors
        });
    }
    return isError;
}






    //handle Statistic
onStatistic = e => {
    console.log(this.state);
    //this.props.onSubmit(this.state);
    //Check error
    const error = this.validate();
    
    if(!error){
    //clear form
        this.setState({
          room_name:"",
          room_nameError:"",
          code_cus:"",
          code_cusError:"",
          date_from:"",
          date_to:""
        });
    }
  }


componentDidMount(){
    this.renderDataTable()
  };




renderDataTable()
{
  const obj ={
    checkin : "2019-11-01",//this.state.chekin,
    checkout : "2019-11-30",//this.state.checkout,
    code_cus : 3//this.state.code_cus
  }



  axios.post('http://localhost:5000/bills/show')
  .then((res) => 
  {    
    console.log(res.data);
    
    let rest = res.data.map ( data => 
    {
      data.cus_name = data.customer.fullname;
      data.emp_name = data.employee.fullname;
      data.button = <div>
      <MDBBtn className="detail-btn" size="sm" onClick={this.toggleForm.bind(this)}>Chi tiết</MDBBtn>
      
    </div>
    })
  
     this.setState({
       data : {
        columns: [
          {
            label: 'ID',
            field: 'code_bill',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Khách hàng',
            field: 'cus_name',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Ngày',
            field: 'bill_date',
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
        rows : res.data
      }
   })

}
);

}

  render() {





    const data = {
      columns: [
        {
          label: 'ID',
          field: 'id',
          sort: 'asc',
          width: 150
        },
        {
          label: 'Khách hàng',
          field: 'fullname',
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
          fullname:'Đặng Thị Kim Như',
          date: '11/11/2019',
          total: '1200000',
          button:
          <div>
            <MDBBtn className="detail-btn" size="sm" onClick={this.toggleForm.bind(this)}>Chi tiết</MDBBtn>
            {this.state.showForm ? 
              <Form
                closeForm={this.toggleForm.bind(this)}
              />
              : null
            }
          </div>
        },
        {
          id: '002',
          fullname:'Lý Ngọc Mỹ Phương',
          date: '12/11/2019',
          total: '2000000',
          button:
          <div>
            <MDBBtn className="detail-btn" size="sm" onClick={this.toggleForm.bind(this)}>Chi tiết</MDBBtn>
            {this.state.showForm ? 
              <Form
                closeForm={this.toggleForm.bind(this)}
              />
              : null
            }
          </div>
        },
      ]
    };








    return (
      <>
        <div className="content">
          <Row>
            <Col md={4}>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Booking</p>
                        <CardTitle tag="p" name="numberofbooking">12</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  {/* <div className="stats">
                    <i className="fas fa-sync-alt" /> Ngày 
                  </div> */}
                </CardFooter>
              </Card>
            </Col>         
            <Col md={4}>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon fas fa-user-friends text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Khách hàng</p>
                        <CardTitle tag="p" name="numberofcus">10</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  {/* <div className="stats">
                    <i className="far fa-clock" /> In the last hour
                  </div> */}
                </CardFooter>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Doanh thu</p>
                        <CardTitle tag="p" name="money">$ 1,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  {/* <div className="stats">
                    <i className="far fa-calendar" /> Last day
                  </div> */}
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Card>
            <form onSubmit= {e => this.onStatistic()}>
              <Row className="view_form space-between">
                {/* <Col md={3}>
                  <TextField margin="dense"
                    variant="outlined"
                    name="room_name"
                    label="Số phòng" 
                    value={this.state.room_name}
                    onChange= {this.change}
                    />
                    <p style ={{color:'red'}}>{this.state.room_nameError}</p> 
                </Col> */}
                
                <Col md={3}>
                  <TextField margin="dense"
                    variant="outlined"
                    label="SĐT khách hàng"
                    name="phone"
                    value={this.state.phone}
                    onChange= {this.change} />
                    <p style ={{color:'red'}}>{this.state.phoneError}</p> 
                </Col>
                <Col md={3}>
                  <TextField margin="dense"
                    variant="outlined"
                    type="date"
                    label="Từ ngày"
                    name="checkin"
                    value={this.state.checkin}
                    onChange= {e => this.change(e)}
                    InputLabelProps={{
                      shrink: true,
                    }}/>
                </Col>
                <Col md={3}>
                  <TextField margin="dense"
                    variant="outlined"
                    type="date"
                    label="Đến ngày"
                    name="checkout"
                    value={this.state.checkout}
                    onChange= {e => this.change(e)}
                    InputLabelProps={{
                      shrink: true,
                    }}/>
                </Col>
              </Row>
              <hr/>
              <Row>
                <Col className="center">
                  <MDBBtn className="add-btn"  onClick = {e => this.onStatistic(e)} >Thống kê</MDBBtn>
                </Col>
              </Row>
            </form>
          </Card>
          <Card>
            <br/>
            <MDBTable responsive>
                {/* <MDBTableHead columns={this.state.data.columns}/>
                <MDBTableBody rows={this.state.data.rows} /> */}
                <MDBDataTable striped data = {this.state.data}/>
            </MDBTable>
          </Card>
        </div>
        <div>        {this.state.showForm ? 
        <Form
          closeForm={this.toggleForm.bind(this)}
        />
        : null
      }
      </div>

      </>
    );
  }
}

export default Statistic;
