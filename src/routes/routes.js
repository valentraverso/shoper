// // Layout
// import { UserDefault, UserLoged } from "../views/layouts/user/index.js";
// import LayoutAdmin from "../views/layouts/admin/Index";

// // Default Pages
// import Home from "../views/pages/user/Index.jsx";
// import Cart from "../views/pages/user/Cart.jsx";
// import Shop from "../views/pages/user/Shop.jsx";
// import Product from "../views/pages/user/Product.jsx";
// import Categories from "../views/pages/user/Categories.jsx";
// import HomeAdmin from "../views/pages/admin/HomeAdmin.jsx";
// import Login from "../views/pages/user/Login.jsx";

// // Loged User
// import {Profile} from '../views/pages/user/Loged/index'

// const routes = [
//   {
//     path: "*",
//     exact: false,
//     component: UserDefault,
//     routes: [
//       {
//         path: "/",
//         exact: true,
//         component: Home,
//       }, {
//         path: "/shop/",
//         exact: true,
//         component: Shop,
//       }, {
//         path: "/shop/:productTitle",
//         exact: false,
//         component: Product,
//       }, {
//         path: "/shop/cat/:category",
//         exact: false,
//         component: Categories,
//       }, {
//         path: '/login',
//         exact: true,
//         logedProhibited: true,
//         component: Login
//       }
//     ]
//   }, {
//     path: "/user/*",
//     exact: false,
//     component: UserLoged,
//     routes: [
//       {
//         path: "/cart",
//         exact: true,
//         component: Cart,
//       },{
//         path: "/profile",
//         exact: true,
//         component: Profile
//       }
//     ]
//   }, {
//     path: "/admin/*",
//     exact: false,
//     component: LayoutAdmin,
//     routes: [
//       {
//         path: "/",
//         exact: "exact",
//         component: HomeAdmin
//       }
//     ]
//   }
// ];

// export default routes;