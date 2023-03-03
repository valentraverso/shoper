// Layout
import LayoutUser from "../views/layouts/user/Index.jsx";
import LayoutAdmin from "../views/layouts/admin/Index.jsx";

// Web Pages
import Home from "../views/pages/user/Index.jsx";
import Cart from "../views/pages/user/Cart.jsx";
import Shop from "../views/pages/user/Shop.jsx";
import Product from "../views/pages/user/Product.jsx";
import Categories from "../views/pages/user/Categories.jsx";
import HomeAdmin from "../views/pages/admin/HomeAdmin.jsx";

// import Error from '../views/pages/error/Error';


const routes = [
  {
    path: "*",
    exact: false,
    component: LayoutUser,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },{
        path: "/shop/",
        exact: true,
        component: Shop,
      },{
        path: "/shop/:productTitle",
        exact: false,
        component: Product,
      },{
        path: "/shop/cat/:category",
        exact: false,
        component: Categories,
      },{
        path: "/cart",
        exact: true,
        component: Cart,
      },
    ]
  },{
    path: "/admin/*",
    exact: false,
    component: LayoutAdmin,
    routes: [
      {
        path: "/",
        exact: "exact",
        component: HomeAdmin
      }
    ]
  }
];

export default routes;