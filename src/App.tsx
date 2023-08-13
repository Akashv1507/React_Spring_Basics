import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import RootHome from "./pages/RootHome";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminLayout from "./pages/AdminLayout";
import AdminHome from "./pages/AdminHome";
import AdminSignup from "./pages/AdminSignup";
import TodoHome from "./components/Todos/TodoHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RootHome /> },
      { path: "login", element: <Login /> },
      { path: "profile", element: <Profile /> },
      { path: "todos", element: <TodoHome /> },
    ],
  },

  {
    path: "/admin",
    element: <AdminLayout />,
    //errorElement: <ErrorPage />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "signup", element: <AdminSignup /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
