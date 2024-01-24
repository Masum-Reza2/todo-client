import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Pages/Dashboard/AddTask/AddTask";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import PreviousTask from "../Pages/Dashboard/PreviousTask/PreviousTask";
import TodoList from "../Pages/Dashboard/TodoList/TodoList";
import OngoingTask from "../Pages/Dashboard/OngoingTask/OngoingTask";
import CompletedTask from "../Pages/Dashboard/CompletedTask/CompletedTask";
import TodoDetails from "../Components/TodoDetails";
import TodoEdit from "../Components/TodoEdit";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> }
        ]
    },

    // authentication
    { path: '/register', element: <RegisterPage /> },
    { path: '/login', element: <LoginPage /> },

    // dashboard
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            { index: true, element: <DashHome /> },
            { path: 'addTask', element: <AddTask /> },
            { path: 'previousTask', element: <PreviousTask /> },
            { path: 'todoList', element: <TodoList /> },
            { path: 'ongoingTask', element: <OngoingTask /> },
            { path: 'completedTask', element: <CompletedTask /> },
            { path: 'details/:id', element: <TodoDetails /> },
            { path: 'edit/:id', element: <TodoEdit /> },
        ]
    }
])
export default Routes