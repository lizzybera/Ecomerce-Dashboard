import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/common/Layout";
import HomePage from "../pages/HomePage";
import DetailedPage from "../pages/DetailedPage";
import CartPage from "../pages/CartPage";
import LandingPage from "../pages/LandingPage";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignIn";

export const mainRoute = createBrowserRouter([
    {
        path : "/",
        element : <Layout />,
        children : [
            {
                index : true,
                element : <HomePage />
            },
      
            
        ]
    },{
        path : "/check",
        element : <DetailedPage />
    },
    {
        path : "/cart",
        element : <CartPage />
    }
    ,
    {
        path : "/reg",
        element : <Register />
    },
    {
        path : "/sign-in",
        element : <SignIn />
    }
    ,
    {
        path : "/land",
        element : <LandingPage />
    }
    ,
    // {
    //     path : "/land",
    //     element : <Hero />
    // }
])