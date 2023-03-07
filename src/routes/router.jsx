// Config
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {PrivateRoutes, ProhibitedRoutes} from "./RouteTypes";

// Layouts
import { UserDefault, UserLoged } from "../views/layouts/user";

// Pages
import { Categories, Login, Main, Product, Shop } from "../views/pages/user";
import { Profile, Cart} from "../views/pages/user/Loged";


const router = createBrowserRouter([
    {
        element: <UserDefault />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/shop',
                element: <Shop />
            },
            {
                path: '/shop/:productTitle',
                element: <Product />
            },
            {
                path: '/shop/cat/:category',
                element: <Categories />
            },
            {
                path: '/login',
                element: <ProhibitedRoutes><Login /></ProhibitedRoutes>
            }
        ]
    },
    {
        element: <UserLoged />,
        children: [
            {
                path: '/user/profile',
                element: <PrivateRoutes><Profile /></PrivateRoutes>
            },
            {
                path: '/user/cart',
                element: <PrivateRoutes><Cart /></PrivateRoutes>
            }
        ]
    }
    
])

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}