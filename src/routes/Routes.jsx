import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../pages/News/News/News";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import Terms from "../pages/Shared/Terms/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children:[
            {
                path:'/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>

            }
        ]
    },
    {
        path:'category',
        element: <Main></Main>,
        children:[
        
            {
                path:':id',
                element: <Category></Category>,
                loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`) 
            }
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
])

export default router;