// const { createBrowserRouter } = require("react-router-dom");
import { createBrowserRouter } from "react-router-dom";
// import Root from "../layouts/Root";
// import Gallery from "../pages/Home/Gallery";
// import MyCollections from "../pages/Admin/MyCollections";
// import ManageItems from "../pages/Admin/ManageItems";
import PrivateRoute from "./PrivateRoute";
// import Collection from "../pages/Collection/Collection";
// import UpdateItem from "../pages/Admin/UpdateItem";
// import Users from "../Users/Users";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                index: true,
                element: <Home></Home>,
                // loader: () => fetch('https://aten-fabricraft-server-iz3av9pl5-salehins-projects.vercel.app/item')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
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