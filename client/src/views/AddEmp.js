// //content.js
// import React from "react";
// import {
//   Card
// }from 'reactstrap';
// export default ({ close }) => (
//   <Card>
//     <CardHeader>
//       <Row>
//         <Col>
//           <h3>Thêm nhân viên</h3>
//         </Col>
//         <Col >
//         <button type="button" class="close" onClick = {close}>
//           &times;
//         </button>
//         </Col>
//       </Row> 
//     </CardHeader>
//     <CardBody>
//       <Form>
//         <Row form>
//             <Col md={6}>
//             <FormGroup>
//                 <Label for="fullname">Họ và tên</Label>
//                 <Input type="text" name="fullname" id="fullname" placeholder="Nhập họ và tên"/>
                
//             </FormGroup>
//             </Col>  
//             <Col md={6}>
//             <FormGroup>
//                 <Label for="birthday">Ngày sinh</Label>
//                 <Input type="date" name="birthday" id="birthday" />
//             </FormGroup>
//             </Col>
//             <Col md={6}>
//             <FormGroup>
//                 <Label for="email">Email</Label>
//                 <Input type="email" name="email" id="email" placeholder="Email" />                  
//             </FormGroup>
//             </Col>
//             <Col md={6}>
//             <FormGroup>
//                 <Label for="password">Mật khẩu</Label>
//                 <Input type="password" name="password" id="password" placeholder="Mật khẩu" />
//             </FormGroup>
//             </Col>
//             <Col md={6}>
//             <FormGroup>
//                 <Label for="identity_card">Chứng minh nhân dân</Label>
//                 <Input type="text" name="dentity_card" id="dentity_card" placeholder="Số chứng minh thư" />
//             </FormGroup>
//             </Col>
//             <Col md={6}>
//             <FormGroup>
//                 <Label for="phone">Số điện thoại</Label>
//                 <Input type="text" name="phone" id="phone" placeholder="Nhập số điện thoại" />
//             </FormGroup>
//             </Col>
//         </Row>
//         <FormGroup>
//             <Label for="address">Address</Label>
//             <Input type="text" name="address" id="address" placeholder="1234 Main St"/>
//         </FormGroup>
        
//         <Row form>
//             <Col md={6}>
//             <FormGroup>
//                 <Label for="role">Chức vụ</Label>
//                 <Input type="select">
//                     <option value="1">Quản lý</option>
//                     <option value="2">Kế toán</option>
//                     <option value="3">Lễ tân</option>
//                 </Input>
//             </FormGroup>
//             </Col>
//             <Col md={6}>
//             <FormGroup>
//                 <Label for="status">Trạng thái</Label>
//                 <Input type="select">
//                     <option value="1">Hoạt động</option>
//                     <option value="2">Khóa</option>
//                 </Input>
//             </FormGroup>
//             </Col>
//         </Row>
//         <FormGroup check>
//             <Input type="checkbox" name="check" id="check"/>
//             <Label for="check" check>Check me out</Label>
//         </FormGroup>
//         <Row>
//             <Col sm="12" md={{ size: 6, offset: 9 }}>
//               <FormGroup>
//                 <Button outline color="secondary">Hủy</Button>
//                 <Button type = "submit" className = "btn btn-primary" name = "btn_add">Thêm</Button>
//               </FormGroup>
//             </Col>
//         </Row>
//       </Form>
//     </CardBody>
//   </Card>
// );