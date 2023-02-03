import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Write from "./pages/Write";
import Single from "./pages/Single";
import "../src/Styles.scss";

const Layout = () =>{
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path : "/",
        element: <Home/>
      },
      {
        path : "/post/:id",
        element: <Single/>
      },
      {
        path : "/write",
        element: <Write/>
      },
    ]
  },
  {
    path: "/login",
    element: <div>
    <Login/>
    </div>,
  },
  {
    path: "/register",
    element: <div>
    <Register/>
    </div>,
  },
  {
    path: "/write",
    element: <div>
    <Navbar/>
    <Write/>
    <Footer/>
    </div>,
  },
  {
    path: "/Single",
    element: <div>
    <Navbar/>
    <Single/>
    <Footer/>
    </div>,
  },
]);

const App = () => {
  return (
    <div className="App">
      <div className="Container">
      <RouterProvider router = {router}/>
      </div>
    </div>
  );
}



export default App;
