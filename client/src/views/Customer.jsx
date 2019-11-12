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
import { Button, Card, CardBody, CardFooter, CardHeader, CardTitle, Col, Input, InputGroup, InputGroupAddon, InputGroupText, Pagination, PaginationItem, PaginationLink, Row, Table } from "reactstrap";


class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">
                    <Row>
                      <Col md="6">
                        Danh sách khách hàng
                      </Col>
                      <Col md="6">
                        <form>
                          <InputGroup>
                            <Input placeholder="Tìm kiếm..." />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>
                                <i className="nc-icon nc-zoom-split" />
                              </InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </form>
                      </Col>
                    </Row>
                      
                  </CardTitle>

                </CardHeader>
                <CardBody>
                  <Button color="info" className="justify-content">Thêm</Button>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Họ</th>
                        <th>Tên</th>
                        <th>CMND</th>
                        <th>Email</th>
                        <th>SĐT</th>
                        <th>Địa chỉ</th>
                        <th>Sửa</th>
                        <th>Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>
                      <tr>
                        <td>0001</td>
                        <td>Nguyễn</td>
                        <td>Nhi</td>
                        <td>272695452</td>
                        <td>phuongnhi301299@gmail.com</td>
                        <td>0961619712</td>
                        <td>TP.HCM</td>
                        <td>
                          <i className="far fa-edit"></i>
                        </td>
                        <td>
                          <i className="far fa-trash-alt"></i>
                        </td>
                      </tr>

                    </tbody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <Pagination aria-label="Page navigation example">
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
