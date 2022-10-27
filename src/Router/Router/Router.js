import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Category from "../../components/Category/Category";
import CheckOut from "../../components/Checkout/CheckOut";
import CourseInitial from "../../components/CourseInitial/CourseInitial";
import Courses from "../../components/Courses/Courses";
import FAQs from "../../components/FAQs/FAQs";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ErrorPage from '../../Layout/ErrorPage'
import Main from "../../Layout/Main";
import PrivateRout from "./PrivateRout";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: ('/category/:id'),
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-jaber1104076.vercel.app/category/${params.id}`)
            },
            {
                path: ('/courses/:id'),
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-jaber1104076.vercel.app/courses/${params.id}`)
            },
            {
                path: ('/course'),
                element: <CourseInitial></CourseInitial>,
                loader: () => fetch('https://b610-lerning-platform-server-side-jaber1104076.vercel.app/courses'),
            },

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
            {
                path: '/faqs',
                element: <FAQs></FAQs>,
            },
            {
                path: '/checkout/:id',
                element: <PrivateRout><CheckOut></CheckOut></PrivateRout>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-jaber1104076.vercel.app/category/${params.id}`)

            },

        ]
    }
])