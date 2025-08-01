import React from 'react';

function About() {
  return (
    <section className="about" style={sectionStyle}>
      <h2 style={headingStyle}>About Me</h2>
      <p>With over 15 years of experience, Dr. Anjali Mehta is committed to providing holistic and personalized healthcare. She specializes in internal medicine and focuses on prevention, diagnosis, and treatment of adult diseases.</p>
    </section>
  );
}

const sectionStyle = {
  padding: '2rem',
  margin: '2rem auto',
  maxWidth: '1000px',
  background: '#fff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const headingStyle = {
  color: '#1976d2'
};

export default About;
