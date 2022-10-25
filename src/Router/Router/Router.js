import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ErrorPage from '../../Layout/ErrorPage'
import Main from "../../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
        ]
    }
])