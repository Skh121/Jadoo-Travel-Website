import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import "../../index.css"

// Lazy load admin components
const SideBar = lazy(() => import('./SideBar'));
const Dashboard = lazy(() => import('./Dashboard'));
const Destination = lazy(() => import('./Destination'));
const Hotel = lazy(() => import('./Hotel'));
const Support = lazy(() => import('./Support'));
const Payment = lazy(() => import('./Payment'));
const AddAdmin = lazy(() => import('./AddAdmin'));

const AdminLayout = () => (
  <div className="flex h-screen bg-white dark:bg-zinc-200">
    <Suspense fallback={<div>Loading Sidebar...</div>}>
        <SideBar />
    </Suspense>
    <div className="flex-grow overflow-y-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="destination" element={<Destination />} />
          <Route path="hotel" element={<Hotel />} />
          <Route path="support" element={<Support />} />
          <Route path="payment" element={<Payment />} />
          <Route path="addAdmin" element={<AddAdmin />} />
        </Routes>
      </Suspense>
    </div>
  </div>
);

export default AdminLayout;
