import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f4f0'
  };

  const contentStyle = {
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#8B4513'
  };

  const textStyle = {
    fontSize: '1.25rem',
    color: '#6B5B73',
    marginBottom: '1rem'
  };

  const linkStyle = {
    color: '#8B4513',
    textDecoration: 'underline',
    fontSize: '1.125rem'
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={headingStyle}>404</h1>
        <p style={textStyle}>Oops! Page not found</p>
        <a href="/" style={linkStyle}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
