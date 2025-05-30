import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginForm from './components/LoginForm';
import Homepage from './pages/Homepage';
import StocksPage from './pages/StocksPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/auth" element={<LoginForm />} />
            <Route path="/auth/callback" element={<Navigate to="/stocks" replace />} />
            <Route 
              path="/stocks" 
              element={
                <ProtectedRoute>
                  <StocksPage />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
      </Router>
    </AuthProvider>
  );
}

export default App;
