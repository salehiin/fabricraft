
import { createBrowserRouter } from "react-router-dom";

import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import ItemDetails from "../pages/ItemDetails";
import AllItems from "../pages/AllItems";
import AddItems from "../pages/AddItems";
import MyItems from "../pages/MyItems";
import ErrorPage from "../pages/ErrorPage";
import UpdateItem from "../pages/UpdateItem";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                index: true,
                element: <Home></Home>,
                // loader: () => fetch(`${import.meta.env.VITE_API_URL}/items`)
                // loader: () => fetch('https://aten-fabricraft-server-iz3av9pl5-salehins-projects.vercel.app/items')
            },
            {
                path: '/items',
                element: <AllItems></AllItems>
            },
            {
                path: '/addItems',
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
            },
            {
                path: '/myItems',
                element: <PrivateRoute><MyItems></MyItems></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/item/:id',
                element: <PrivateRoute><ItemDetails></ItemDetails></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateItem></UpdateItem></PrivateRoute>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`)
            },
            // {
                //     path: '/collection',
                //     element: <Collection></Collection>
            // },
            // {
            //     path: '/collections/:id',
            //     element: <PrivateRoute><MyCollections></MyCollections></PrivateRoute>,
            // },
            // {
            //     path: '/manage',
            //     element: <ManageItems></ManageItems>,
            //     element: <PrivateRoute><ManageItems></ManageItems></PrivateRoute>
                
            // },
            // {
            //     path: '/update/:id',
            //     element: <UpdateItem></UpdateItem>,
            //     loader: ({params}) => fetch(`https://aten-fabricraft-server.vercel.app/item/${params.id}`)
            // },
            // {
            // {
            //     path: '/users',
            //     element: <Users></Users>,
            //     loader: () => fetch('https://aten-fabricraft-server.vercel.app/user')
            // }
        ]
    }
])

export default router;

// https://www.artnet.com/galleries/