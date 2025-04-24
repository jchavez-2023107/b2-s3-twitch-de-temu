import { element } from "prop-types";
import { AuthPage } from "./pages/Auth/AuthPage";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Login } from "./components/Login/Login";


export const routes = [
    {
        path: '/', 
        element: <AuthPage />
    },
    {
        path: '/auth', 
        element: <AuthPage />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <DashboardPage />
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]