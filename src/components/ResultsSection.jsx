import React from 'react';
import { CheckCircle2, AlertTriangle, Info } from 'lucide-react';

const ResultsSection = () => {
  return (
    <div className="results-section">
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ 
          fontSize: '12px', 
          fontWeight: 600, 
          letterSpacing: '0.5px', 
          textTransform: 'uppercase',
          marginBottom: '4px'
        }}>
          Analysis Results
        </h2>
        <p className="text-secondary" style={{ fontSize: '14px' }}>Generated based on current market standards.</p>
      </div>

      {/* Score Card */}
      <div style={{
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        padding: '24px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px'
      }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-secondary)', marginBottom: '4px' }}>
            OVERALL SCORE
          </div>
          <div style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1 }}>84</div>
        </div>
        
        <div style={{ flex: 2, minWidth: '200px' }}>
          <div style={{ 
            height: '6px', 
            width: '100%', 
            backgroundColor: 'var(--color-surface-hover)', 
            borderRadius: '3px',
            marginBottom: '12px',
            overflow: 'hidden'
          }}>
             <div style={{ 
               height: '100%', 
               width: '84%', 
               backgroundColor: 'var(--color-primary)',
               borderRadius: '3px'
             }}></div>
          </div>
          <p style={{ fontSize: '14px', lineHeight: 1.5 }}>
            <span className="font-semibold">Great match!</span> Your profile strongly aligns with the requirements for Senior Frontend Engineer roles.
          </p>
        </div>
      </div>

      {/* Feedback Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
        <FeedbackCard 
          type="success"
          title="Strong Technical Skills"
          description="Your experience with React, TypeScript, and Node.js is highlighted well and matches top requirements."
        />
        <FeedbackCard 
          type="warning"
          title="Measurable Impact Missing"
          description="Try to quantify your achievements. Instead of 'Improved performance', use 'Improved load times by 40%'."
        />
        <FeedbackCard 
          type="info"
          title="Formatting Suggestion"
          description="Consider moving your Education section below Experience for better hierarchy at this seniority level."
        />
      </div>

      {/* Keywords */}
      <div style={{ marginBottom: '24px' }}>
         <h3 style={{ 
           fontSize: '12px', 
           fontWeight: 600, 
           letterSpacing: '0.5px', 
           textTransform: 'uppercase',
           marginBottom: '12px',
           color: 'var(--color-text-muted)'
         }}>
           Extracted Keywords
         </h3>
         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
           {['React', 'TypeScript', 'System Design', 'CI/CD', 'AWS', 'Team Leadership'].map(tag => (
             <span key={tag} style={{
               padding: '6px 12px',
               backgroundColor: 'var(--color-surface)',
               border: '1px solid var(--color-border)',
               borderRadius: '6px',
               fontSize: '13px',
               color: 'var(--color-text-secondary)'
             }}>
               {tag}
             </span>
           ))}
         </div>
      </div>
    </div>
  );
};

const FeedbackCard = ({ type, title, description }) => {
  const styles = {
    success: { icon: CheckCircle2, color: 'var(--color-success)', bg: 'var(--color-success-bg)' },
    warning: { icon: AlertTriangle, color: 'var(--color-warning)', bg: 'var(--color-warning-bg)' },
    info: { icon: Info, color: 'var(--color-info)', bg: 'var(--color-info-bg)' }
  };

  const currentStyle = styles[type];
  const Icon = currentStyle.icon;

  return (
    <div style={{
      border: '1px solid var(--color-border)',
      borderRadius: '12px',
      padding: '20px',
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start'
    }}>
      <div style={{ color: currentStyle.color, marginTop: '2px' }}>
        <Icon size={20} />
      </div>
      <div>
        <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{title}</h4>
        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResultsSection;
