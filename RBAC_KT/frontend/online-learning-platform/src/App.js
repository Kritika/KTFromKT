import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './keycloak';
import HomePage from './components/HomePage';
import TeacherPage from './components/TeacherPage';
import StudentPage from './components/StudentPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/student" element={<StudentPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </ReactKeycloakProvider>
  );
}

export default App;
