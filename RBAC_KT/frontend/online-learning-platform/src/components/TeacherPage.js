import React, { useState } from 'react';

const TeacherPage = () => {
  // Static list of courses; in a real app, this would be fetched from the backend
  const courses = [
    'Introduction to Programming',
    'Data Structures and Algorithms',
    'Web Development',
  ];

  const [assignments, setAssignments] = useState([
    { id: 1, course: 'Introduction to Programming', title: 'Math Homework: Chapter 3', dueDate: '2024-08-15' },
    { id: 2, course: 'Data Structures and Algorithms', title: 'Programming Project: Basic Algorithms', dueDate: '2024-08-22' },
  ]);

  const [newAssignment, setNewAssignment] = useState({ title: '', dueDate: '', course: '' });

  const handleAddAssignment = () => {
    if (newAssignment.title && newAssignment.dueDate && newAssignment.course) {
      setAssignments([...assignments, { id: assignments.length + 1, ...newAssignment }]);
      setNewAssignment({ title: '', dueDate: '', course: '' });
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Learning Platform</h1>
      </header>
      <div style={styles.main}>
        <aside style={styles.sidebar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>Dashboard</li>
            <li style={styles.navItem}>Manage Courses</li>
            <li style={styles.navItem}>Manage Assignments</li>
            <li style={styles.navItem}>Profile</li>
            <li style={styles.navItem}>Settings</li>
          </ul>
        </aside>
        <section style={styles.content}>
          <h2 style={styles.contentTitle}>Teacher Dashboard</h2>

          <div style={styles.teacherDetails}>
            <h3 style={styles.sectionTitle}>Teacher Details</h3>
            <p style={styles.teacherText}>Name: Dr. Jane Smith</p>
            <p style={styles.teacherText}>Email: jane.smith@example.com</p>
            <p style={styles.teacherText}>Department: Computer Science</p>
            <p style={styles.teacherText}>Phone: +123-456-7890</p>
          </div>

          <div style={styles.coursesTaught}>
            <h3 style={styles.sectionTitle}>Courses Taught</h3>
            <ul style={styles.courseList}>
              {courses.map((course, index) => (
                <li key={index} style={styles.courseItem}>{course}</li>
              ))}
            </ul>
          </div>

          <div style={styles.addAssignmentForm}>
            <h3 style={styles.sectionTitle}>Add New Assignment</h3>
            <input
              type="text"
              placeholder="Assignment Title"
              style={styles.input}
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <input
              type="date"
              style={styles.input}
              value={newAssignment.dueDate}
              onChange={(e) => setNewAssignment({ ...newAssignment, dueDate: e.target.value })}
            />
            <select
              style={styles.input}
              value={newAssignment.course}
              onChange={(e) => setNewAssignment({ ...newAssignment, course: e.target.value })}
            >
              <option value="" disabled>Select Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
            <button onClick={handleAddAssignment} style={styles.button}>
              Add Assignment
            </button>
          </div>

          <div style={styles.assignmentListContainer}>
            <h3 style={styles.sectionTitle}>Existing Assignments</h3>
            <ul style={styles.assignmentList}>
              {assignments.map((assignment) => (
                <li key={assignment.id} style={styles.assignmentItem}>
                  <strong>{assignment.title}</strong> - {assignment.course} - Due: {assignment.dueDate}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2024 Learning Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#e0f7f9',
  },
  header: {
    backgroundColor: '#2c5f5d',
    padding: '15px 30px',
    textAlign: 'center',
    color: '#ffffff',
  },
  headerTitle: {
    fontSize: '24px',
    margin: 0,
  },
  main: {
    display: 'flex',
    flex: 1,
  },
  sidebar: {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    width: '250px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  },
  navList: {
    listStyleType: 'none',
    padding: 0,
  },
  navItem: {
    padding: '10px 0',
    cursor: 'pointer',
    fontSize: '18px',
    color: '#2c5f5d',
  },
  content: {
    flex: 1,
    padding: '30px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: '22px',
    margin: '0 0 20px',
    color: '#2c5f5d',
  },
  teacherDetails: {
    marginBottom: '30px',
  },
  coursesTaught: {
    marginBottom: '30px',
  },
  addAssignmentForm: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '20px',
    margin: '20px 0 10px',
    color: '#2c5f5d',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
    border: '1px solid #cfd8dc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  button: {
    padding: '12px 24px',
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
  courseList: {
    listStyleType: 'none',
    padding: 0,
  },
  courseItem: {
    padding: '10px 0',
    borderBottom: '1px solid #e0f7f9',
    fontSize: '16px',
    color: '#616161',
  },
  teacherText: {
    fontSize: '16px',
    color: '#616161',
    margin: '5px 0',
  },
  assignmentListContainer: {
    marginTop: '30px',
  },
  assignmentList: {
    listStyleType: 'none',
    padding: 0,
  },
  assignmentItem: {
    padding: '10px 0',
    borderBottom: '1px solid #e0f7f9',
    fontSize: '16px',
    color: '#616161',
  },
  footer: {
    backgroundColor: '#2c5f5d',
    padding: '10px 20px',
    textAlign: 'center',
    color: '#ffffff',
  },
  footerText: {
    margin: 0,
    fontSize: '14px',
  },
};

export default TeacherPage;
