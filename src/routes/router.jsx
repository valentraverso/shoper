import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserDefault } from "../views/layouts/user";
import { Main } from "../views/pages/user";

const router = createBrowserRouter([
    {
        element: <UserDefault />,
        children: [
            {
                path: '/',
                element: Main
            }
        ]
    }
])

export default function Router() {
    return (
        <RouterProvider router={router} />
    )
}