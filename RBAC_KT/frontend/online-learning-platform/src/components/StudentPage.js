import React from 'react';

const StudentPage = () => {
  // Static list of courses; this should ideally come from a user context or API
  const courses = [
    'Introduction to Programming',
    'Data Structures and Algorithms',
  ];

  // Static list of assignments; in a real app, this should be fetched based on enrolled courses
  const assignments = [
    { id: 1, course: 'Introduction to Programming', title: 'Math Homework: Chapter 3', dueDate: '2024-08-15' },
    { id: 2, course: 'Data Structures and Algorithms', title: 'Programming Project: Basic Algorithms', dueDate: '2024-08-22' },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.headerTitle}>Learning Platform</h1>
      </header>
      <div style={styles.main}>
        <aside style={styles.sidebar}>
          <ul style={styles.navList}>
            <li style={styles.navItem}>Dashboard</li>
            <li style={styles.navItem}>Courses</li>
            <li style={styles.navItem}>Assignments</li>
            <li style={styles.navItem}>Profile</li>
            <li style={styles.navItem}>Settings</li>
          </ul>
        </aside>
        <section style={styles.content}>
          <h2 style={styles.contentTitle}>Student Dashboard</h2>

          <div style={styles.coursesEnrolled}>
            <h3 style={styles.sectionTitle}>Courses Enrolled</h3>
            <ul style={styles.courseList}>
              {courses.map((course, index) => (
                <li key={index} style={styles.courseItem}>{course}</li>
              ))}
            </ul>
          </div>

          <div style={styles.assignmentListContainer}>
            <h3 style={styles.sectionTitle}>Assignments</h3>
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
  coursesEnrolled: {
    marginBottom: '30px',
  },
  assignmentListContainer: {
    marginTop: '30px',
  },
  sectionTitle: {
    fontSize: '20px',
    margin: '20px 0 10px',
    color: '#2c5f5d',
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

export default StudentPage;
