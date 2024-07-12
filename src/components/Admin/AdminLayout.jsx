import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load admin components
const SideBar = lazy(() => import('./SideBar'));
const Dashboard = lazy(() => import('./Dashboard'));
const Destination = lazy(() => import('./Destination'));
const Customer = lazy(() => import('./Customer'));
const Order = lazy(() => import('./Order'));
const Support = lazy(() => import('./Support'));
const Payment = lazy(() => import('./Payment'));
const AddAdmin = lazy(() => import('./AddAdmin'));

const AdminLayout = () => (
  <div className="admin-layout dark-mode">
    <Suspense fallback={<div className="loading">Loading Sidebar...</div>}>
      <div className="sidebar-wrapper">
        <SideBar />
      </div>
    </Suspense>
    <div className="main-content">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="destination" element={<Destination />} />
          <Route path="customer" element={<Customer />} />
          <Route path="order" element={<Order />} />
          <Route path="support" element={<Support />} />
          <Route path="payment" element={<Payment />} />
          <Route path="addAdmin" element={<AddAdmin />} />
        </Routes>
      </Suspense>
    </div>
  </div>
);

export default AdminLayout;
