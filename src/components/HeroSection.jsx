import React from 'react';

const HeroSection = () => {
  return (
    <section style={{ 
      padding: '40px 0 24px 0', 
      textAlign: 'center' 
    }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: 700, 
        marginBottom: '8px',
        color: 'var(--color-text-main)'
      }}>
        Optimize Your Resume
      </h1>
      <p style={{ 
        fontSize: '16px', 
        color: 'var(--color-text-secondary)',
        maxWidth: '480px',
        margin: '0 auto'
      }}>
        Upload your resume and get instant, AI-powered feedback to increase your interview chances.
      </p>
    </section>
  );
};

export default HeroSection;
