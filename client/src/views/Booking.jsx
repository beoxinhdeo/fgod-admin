import React from 'react';
import Form from "views/AddCus.jsx";
import { 
  MDBDataTable,
  MDBTable,
  MDBBtn,
  MDBIcon,
  MDBTableBody,
  MDBTableHead,
  MDBInputGroup
} from 'mdbreact';
import {
  TextField,
  Fab
} from '@material-ui/core';
import { 
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Input,
  Button
} from "reactstrap";
import axios from 'axios';   

import moment from 'moment';

var cart = JSON.parse(localStorage.getItem("cart"))
var total = JSON.parse(localStorage.getItem("total"))

const datasearch = {
  columns: [
    {
      label: 'Phòng',
      field: 'code_room',
      sort: 'asc',
      width: 150
    },
    {
      label: 'Loại phòng',
      field: 'type_name',
      sort: 'asc',
      width: 270
    },
    {
      label: 'Giá',
      field: 'price',
      sort: 'asc',
      width: 200
    },
    {
      label: 'Thao tác',
      field: 'button',
      width: 100
    }
  ],
  rows: [
    {
      code_room: '001',
      type_name: 'Phòng đơn',
      price: '1200000',
      // button:
      //     <MDBBtn className="booking-btn" size="sm">Đặt phòng</MDBBtn>
    },
    {
      code_room: '001',
      type_name: 'Phòng đơn',
      price: '1200000',
      // button:
      //     <MDBBtn className="booking-btn" size="sm">Đặt phòng</MDBBtn>
    },
  ]
};

class Booking extends React.Component {
state = {
  showForm : false,
  amount:"",
  discount:"",
  charged:"",
  total:"",
  checkin:"",
  checkout:"",
  tamtinh :0,
  tongtien: 0,
  phuphi:0
};

// constructor() {
//   super();
//   this.change = this.change.bind(this);
// }




componentDidMount()
{

  this.createSession()
  this.renderDataSearch()
  this.renderDataCart()
  
}

change = e => {
  
  
  
  this.onChange({[e.target.name]: e.target.value});
  
  if(this.state.checkin && this.state.checkout)
  {
  
  if(moment(this.state.checkout).isBefore(this.state.checkin))
alert("Beoxinhdep");
console.log(this.state);
}

  this.setState({
      [e.target.name]: e.target.value,

      
      checkinError:"",
      checkoutError:""
  });
  console.log(this.state);

 

};

createSession()
{
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
      },
      {
        label: 'Thao tác',
        field: 'button',
        width: 100
      }
    ],
    rows: [
      // {
      //   code_room: '001',
      //   price: '100000',
      //   checkin: '2019-10-20',
      //   checkout: '2019-10-25',
      //   staying_days:'5',
      //   amount:'500000',
      // },
      // {
      //   code_room: '001',
      //   price: '100000',
      //   checkin: '2019-10-20',
      //   checkout: '2019-10-25',
      //   staying_days:'5',
      //   amount:'500000',
      // },
    ]
  };
  var total_cart = 0

  const myJSON = JSON.stringify(datadetail);
  const myTotal = JSON.stringify(total_cart);
  if (localStorage) {
	
	      
        localStorage.setItem('cart', myJSON);
        localStorage.setItem('total', myTotal);
	 
	}
  console.log(myJSON);
  
}


addtocart(e)
{
  if(this.state.checkout && this.state.checkin)
    {
      const obj = {
    code_room :      e.code_room,
    price :          e.price,
    checkin :        this.state.checkin,
    checkout :       this.state.checkout,
    staying_days :   moment(this.state.checkout).diff(this.state.checkin, 'days'),
    amount :         moment(this.state.checkout).diff(this.state.checkin, 'days')*e.price,
   
};


 cart.rows.push(obj);

 total=total+obj.amount;

 const myJSON = JSON.stringify(cart);
 const myTotal = JSON.stringify(total);
  if (localStorage) {
	      
        localStorage.setItem('cart', myJSON);
        localStorage.setItem('total', myTotal);
	 
	}
 
 this.renderDataCart();
 this.setState({
  
   tongtien: this.state.tongtien + obj.amount,
   ///tongtien : this.state.tamtinh + obj.amount-this.state.phuphi,
  })


    }  

  else
    alert("Bạn chưa chọn ngày checkin/checkout")
}

deletefromcart(e)
{
  var new_cart = cart.slice(e,e)

}


renderDataSearch()
{

  const date={
    checkin : this.state.checkin,
    checkout : this.state.checkout,
  }

  axios.post('http://localhost:5000/bills/find', date)
  .then((res) => 
  {   
  
      let ress = res.data.map 
      (data =>
        {
      data.button = <div>
         <MDBBtn className="booking-btn" id onClick={ this.addtocart.bind(this,data) } size="sm">Đặt phòng</MDBBtn>
      </div>;
      //data.room_coderoom = data.room.code_room
      data.room_typename = data.room_type.type_name
      //data.room_description = data.room.description
      //data.room_price = data.room.price
      //data.room_status = data.room.status
        }
        )  

     this.setState({
       
      datasearch : {
        columns: [
          {
            label: 'Phòng',
            field: 'code_room',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Loại phòng',
            field: 'room_typename',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Giá',
            field: 'price',
            sort: 'asc',
            width: 200
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
}


renderDataCart()
{
  const i = 0;
  let CART = cart.rows.map 
  (data => {
    
    // var obj={
    //   id : i,
    //   price : data.price
    // }
    console.log(data);
    
    data.button = <div>
    <MDBIcon id={i} icon="trash-alt" size="lg" onClick={ this.deletefromcart.bind(this,i) } name="trash" type="button"/>
 </div>

  } )

  this.setState({
    columns : cart.columns,
    rows    : cart.rows,
   
})

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
  render(){
      return (
        <div className="content">
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    Tra cứu phòng
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row className="flex-center">
                    <Col md="4">
                        <Input value={this.state.checkin} name="checkin" type="date" className="booking-input"  onChange= {e => this.change(e)}/>
                    </Col>
                    <Col>
                        <i align="right" className="fas fa-arrow-right"></i>
                    </Col>                       
                    <Col md="4">
                        <Input value={this.state.checkout} name="checkout" type="date" className="booking-input" onChange= {e => this.change(e)}></Input>
                    </Col>
                    <Col md="3">
                        <Button type="button" size="sm" className="find-btn" onClick={this.renderDataSearch.bind(this)}>Tra cứu</Button>
                    </Col>
                  </Row>
                  <hr />
                  <MDBTable responsive>
                    <MDBDataTable striped data = {this.state.datasearch}/>
                  </MDBTable>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    Phiếu đặt
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row className = "flex-end">
                    <Col md={4}>
                      <TextField id="standard-basic"
                        label="Tìm kiếm khách hàng"
                        name = "searchCus"
                      />
                    </Col>
                    <Fab color="primary" aria-label="add" size="small"  onClick={this.toggleForm.bind(this)}>
                      <i className = "fas fa-user-plus"/>
                    </Fab>
                    {this.state.showForm ? 
                      <Form
                        closeForm={this.toggleForm.bind(this)}
                        onChange = {fields => this.onChange(fields)}
                      />
                      : null
                    }
                  </Row>
                  <hr />
                  <Row>
                    <MDBTable responsive >
                      <MDBTableHead columns={this.state.columns}/>
                      <MDBTableBody rows={this.state.rows} />
                    </MDBTable>
                  </Row>
                  <hr />
                  {/* <Row className="flex-end">
                    <Col md={6} >
                      <MDBInputGroup
                      material
                      name="temp"
                      prepend="Tạm tính"
                      size="sm"
                      value={this.state.tamtinh}
                      disabled
                      />
                    </Col>
                  </Row> */}
                  {/* <Row className="flex-end">
                    <Col md={6} >
                      <MDBInputGroup
                      material
                      name="discount"
                      prepend="Giảm giá"
                      value={this.state.giamgia}
                      size="sm"
                      />
                    </Col>
                  </Row> */}
                  {/* <Row className="flex-end">
                    <Col md={6} >
                      <MDBInputGroup
                      material
                      name="phuphi"
                      prepend="Phụ phí"
                      value={this.state.phuphi}
                      onChange= {e => this.change(e)}
                      size="sm"
                      />
                    </Col>
                  </Row> */}
                  <Row className="flex-end">
                    <Col md={6} >
                      <MDBInputGroup
                      material
                      name="total"
                      prepend="Tổng tiền"
                      value={total}
                      size="sm"
                      disable = "disable"
                      />
                    </Col>
                  </Row>
                </CardBody>
              </Card>                
            </Col>
          </Row>
        </div> 
      )
  }
}
export default Booking;