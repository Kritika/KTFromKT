import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Online Learning Platform</h1>
      <nav>
        <ul>
          <li><Link to="/teacher">Teacher</Link></li>
          <li><Link to="/student">Student</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
