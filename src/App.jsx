import React, { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BookingProvider } from "../src/components/config/BookingContext"
import "./App.css";

// Lazy-loaded components
const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Home/Login"));
const Sales = lazy(() => import("./components/Admin/Sales"));
const Staff = lazy(() => import("./components/Admin/Staff/StaffMain"));
const UnAuthorized = lazy(() => import("./components/Admin/UnAuthorized"));
const AdminLayout = lazy(() => import("./components/Admin/AdminLayout"));
const Destinations = lazy(() => import("./components/Home/Destinations"));
const Contact = lazy(() => import("./components/Home/Contact"));
const Bookings = lazy(() => import("./components/Home/Bookings"));
const About = lazy(() => import("./components/Home/About"));
const Hotels = lazy(() => import("./components/Home/Hotels"));
const DestinationDetails = lazy(() => import("./components/Pages/DestinationDetails"));

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
    path: "/home",
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
    path: "/destinations",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Destinations />
      </Suspense>
    ),
    errorElement: <>Error loading login component</>,
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact/>
      </Suspense>
    ),
    errorElement: <>Error loading login component</>,
  },
  {
    path: "/hotels",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Hotels/>
      </Suspense>
    ),
    errorElement: <>Error loading login component</>,
  },
  {
    path: "/bookings",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Bookings/>
      </Suspense>
    ),
    errorElement: <>Error loading login component</>,
  },
  {
    path: "/about",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <About/>
      </Suspense>
    ),
    errorElement: <>Error loading login component</>,
  },
  {
    path: "/destination/:destinationId",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <DestinationDetails/>
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
      <BookingProvider>
        <RouterProvider router={router} />
      </BookingProvider>
    </QueryClientProvider>
  );
};

export default App;
