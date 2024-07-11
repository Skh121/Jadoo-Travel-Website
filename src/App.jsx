import React, { Suspense, lazy, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Home/Login"));
const Sales = lazy(() => import("./components/Admin/Sales"));
const Staff = lazy(() => import("./components/Admin/Staff/StaffMain"));
const UnAuthorized = lazy(() => import("./components/Admin/UnAuthorized"));
const AdminLayout = lazy(() => import("./components/Admin/AdminLayout"));


// Initialize Query Client
const queryClient = new QueryClient();

// Define private routes
const privateRoutes = [
  {
    path: "/admin/*",
    element: <AdminLayout/>,
    children: [
      {
        path: "sales",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Sales />
          </Suspense>
        ),
        errorElement: <>Error loading sales component</>,
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UnAuthorized />
          </Suspense>
        ),
        errorElement: <>Error loading customer component</>,
      },
    ],
  },
];

// Define public routes
const publicRoutes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    errorElement: <>Error loading home component</>,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
    errorElement: <>Error loading login component</>,
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <UnAuthorized />
      </Suspense>
    ),
    errorElement: <>Error loading unauthorized component</>,
  },
];

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  if (isLoading) return <div>Loading...</div>;

  const router = createBrowserRouter(
    isLoggedIn ? [...privateRoutes, ...publicRoutes] : publicRoutes
  );

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
