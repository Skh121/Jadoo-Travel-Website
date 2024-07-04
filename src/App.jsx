import React, { Suspense, lazy } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Home/Login"));
const Admin = lazy(() => import("./components/Admin"));
const Sales = lazy(() => import("./components/Admin/Sales"));
const UnAuthorized = lazy(() => import("./components/Admin/UnAuthorized"));

const queryClient = new QueryClient();
const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const privateRoutes = [
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin/sales",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Sales />
          </Suspense>
        ),
        errorElement: <>error</>,
      },
    ],
  },
];

const publicRoutes = [
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
    errorElement: <>error</>,
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    errorElement: <>error</>,
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <UnAuthorized />
      </Suspense>
    ),
    errorElement: <>error</>,
  },
];
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider
        router={createBrowserRouter(isLoggedIn ? privateRoutes : publicRoutes)}
      />
    </QueryClientProvider>
  );
};

export default App;
