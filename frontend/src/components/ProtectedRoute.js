import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading, initializing } = useAuth();

  // Show loading while initializing auth
  if (loading || initializing) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        Loading...
      </div>
    );
  }

  return user ? children : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
