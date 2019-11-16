/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";

import "./Style.css"

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Danh sách hóa đơn</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="space-between">
                    <Button className="add-btn">Thêm</Button>
                    <form className="form-inline search-bar">
                      <input className="form-control" type="text" placeholder="Tìm kiếm..."/>
                    </form>
                  </div>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Mã hóa đơn</th>
                        <th>Mã nhân viên</th>
                        <th>Mã khách hàng</th>
                        <th>Mã giảm giá</th>
                        <th>Ngày lập hóa đơn</th>
                        <th>Tổng tiền</th>
                        <th>Giảm giá</th>
                        <th>Thành tiền</th>
                        <th>Thao tác</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0001</td>
                        <td>0002</td>
                        <td>0003</td>
                        <td>A100</td>
                        <td>11/11//2019</td>
                        <td>2000000</td>
                        <td>50000</td>
                        <td>1950000</td>
                        <td className="space-between">
                          <Button className="edit-btn" type="button">Sửa</Button>
                          <Button className="delete-btn">Xóa</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <Pagination aria-label="Page navigation example" className="flex-end">
                    <PaginationItem>
                      <PaginationLink first href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        1
                          </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        2
                          </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        3
                          </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        4
                          </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">
                        5
                          </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink last href="#" />
                    </PaginationItem>
                  </Pagination>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
