import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const AuthCallback = () => {
  const { user, loading, initializing } = useAuth();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Only handle redirect once auth is fully initialized
    if (!loading && !initializing) {
      const timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 500); // Small delay to ensure state is stable

      return () => clearTimeout(timer);
    }
  }, [loading, initializing]);

  // Show loading while auth is initializing
  if (loading || initializing || !shouldRedirect) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh' 
      }}>
        <div>
          <h3>Completing sign in...</h3>
          <p>Please wait while we redirect you.</p>
        </div>
      </div>
    );
  }

  // Use React Router Navigate instead of window.location
  return user ? <Navigate to="/stocks" replace /> : <Navigate to="/auth" replace />;
};

export default AuthCallback;