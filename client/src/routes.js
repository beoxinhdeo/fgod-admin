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

import TypeRoom from "views/TypeRoom.jsx";
import Customer from "views/Customer.jsx";
import Role from "views/Role.jsx";
import Bill from "views/Bill.jsx";
import Statistic from "views/Statistic.jsx";
import Icons from "views/Icons";
import User from "views/User";
import Employee from "views/Employee.jsx";
import Example from "views/Example.jsx";

var routes = [
  {
    path: "/roommap",
    name: "Sơ đồ phòng",
    icon: "	fas fa-building",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/booking",
    name: "Đặt phòng",
    icon: "fa fa-address-card",
    component: User,
    layout: "/admin"
  },
  {
    path: "/typeroom",
    name: "Loại phòng",
    icon: "	fas fa-bed",
    component: TypeRoom,
    layout: "/admin"
  },
  {
    path: "/customer",
    name: "Khách hàng",
    icon: "	far fa-user-circle",
    component: Customer,
    layout: "/admin"
  },
  {
    path: "/employee",
    name: "Nhân viên",
    icon: "nc-icon nc-single-02",
    component: Employee,
    layout: "/admin"
  },
  {
    path: "/role",
    name: "Bộ phận",
    icon: "fas fa-users",
    component: Role,
    layout: "/admin"
  },
  {
    path: "/bill",
    name: "Hóa đơn",
    icon: "fas fa-clipboard-list",
    component: Example,
    layout: "/admin"
  },
  {
    path: "/statistic",
    name: "Thống kê",
    icon: "fas fa-chart-bar",
    component: Statistic,
    layout: "/admin"
  },
];
export default routes;
