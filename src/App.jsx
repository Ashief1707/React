import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import ErrorRoute from "./pages/errorRoute";
import { ForgotPassPages } from "./pages/ForgotPassPages";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import ExpensesPage from "./pages/expenses";
import GoalPage from "./pages/goals";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {

  const { isLoggedIn } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login"/>;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <RequireAuth><DashboardPage/></RequireAuth>,
      errorElement: <ErrorRoute/>
    },
    {
      path: "/login",
      element: <SignInPage/>,
      
    },
    {
      path: "/register",
      element: <SignUpPage/>
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassPages/>
    },
    {
      path: "/balance",
      element: <RequireAuth><BalancePage/></RequireAuth>
    },
    {
      path: "/expenses",
      element: <RequireAuth><ExpensesPage/></RequireAuth>
    },
    {
      path: "/goals",
      element: <RequireAuth><GoalPage/></RequireAuth>
    }
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
