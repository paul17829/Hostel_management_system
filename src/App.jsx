import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StudentDashboard from './pages/StudentDashboard';
import Rooms from './pages/Rooms';
import Students from './pages/Students';
import Chat from './pages/Chat';
import Layout from './components/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

const DashboardWrapper = () => {
  const { user } = useAuth();
  return user?.role === 'student' ? <StudentDashboard /> : <Dashboard />;
};

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardWrapper />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="students" element={<Students />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
