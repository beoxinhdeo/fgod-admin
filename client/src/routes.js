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
import Dashboard from "views/Dashboard.jsx";
import Notifications from "views/Notifications.jsx";
import Icons from "views/Icons.jsx";
import Typography from "views/Typography.jsx";
import TableList from "views/Tables.jsx";
import Maps from "views/Map.jsx";
import UserPage from "views/User.jsx";
// import UpgradeToPro from "views/Upgrade.jsx";

var routes = [
  {
    path: "/room-map",
    name: "Sơ đồ phòng",
    icon: "	fas fa-building",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Đặt phòng",
    icon: "fa fa-address-card",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Loại phòng",
    icon: "	fas fa-bed",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Khách hàng",
    icon: "	far fa-user-circle",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/employees",
    name: "Nhân viên",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Bộ phận",
    icon: "fas fa-users",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Hóa đơn",
    icon: "fas fa-clipboard-list",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Thống kê",
    icon: "fas fa-chart-bar",
    component: Typography,
    layout: "/admin"
  }
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin"
  // }
];
export default routes;
