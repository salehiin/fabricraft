// const { createBrowserRouter } = require("react-router-dom");
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import Register from "../pages/Register/Register";
// import Gallery from "../pages/Home/Gallery";
import MyCollections from "../pages/Admin/MyCollections";
import ManageItems from "../pages/Admin/ManageItems";
import PrivateRoute from "./PrivateRoute";
import Collection from "../pages/Collection/Collection";
import UpdateItem from "../pages/Admin/UpdateItem";
import Users from "../Users/Users";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/item')
            },
            {
                path: '/collection',
                element: <Collection></Collection>
            },
            {
                path: '/collections/:id',
                element: <PrivateRoute><MyCollections></MyCollections></PrivateRoute>,
            },
            {
                path: '/manage',
                element: <ManageItems></ManageItems>
                // element: <PrivateRoute><ManageItems></ManageItems></PrivateRoute>
                
            },
            {
                path: '/update/:id',
                element: <UpdateItem></UpdateItem>,
                loader: ({params}) => fetch(`http://localhost:5000/item/${params.id}`)
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/users',
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5000/user')
            }
        ]
    }
])

export default router;

// https://www.artnet.com/galleries/