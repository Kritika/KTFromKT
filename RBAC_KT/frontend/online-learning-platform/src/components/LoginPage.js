import React, { useState } from 'react';
import { useKeycloak } from '@react-keycloak/web';

const LoginPage = () => {
  const { keycloak } = useKeycloak();
  const [hover, setHover] = useState(false);

  const login = () => {
    keycloak.login();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back!</h1>
        <p style={styles.subtitle}>
          Log in to access your personalized learning dashboard
        </p>
        <button
          onClick={login}
          style={hover ? { ...styles.button, ...styles.buttonHover } : styles.button}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Login with Keycloak
        </button>
      </div>
    </div>
  );
};
const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: '#e0f7f9',
    },
    card: {
      backgroundColor: '#f9f9f9',
      padding: '40px 50px',
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      width: '350px',
    },
    title: {
      fontSize: '28px',
      margin: '0 0 20px',
      color: '#2c5f5d',
      fontWeight: '700',
    },
    subtitle: {
      fontSize: '16px',
      marginBottom: '30px',
      color: '#616161',
    },
    button: {
      padding: '14px 28px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#38b2ac',
      color: '#ffffff',
      border: 'none',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(56, 178, 172, 0.3)',
    },
    buttonHover: {
      backgroundColor: '#2c9189',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 18px rgba(56, 178, 172, 0.4)',
    },
  };
  
  
  
export default LoginPage;
