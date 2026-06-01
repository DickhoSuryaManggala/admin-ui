import "./App.css";
import SignInPage from "./pages/signIn.jsx";
import SignUpPage from "./pages/signUp.jsx";
import ErrorPage from "./pages/error.jsx";
import DashboardPage from "./pages/dashboard.jsx";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
