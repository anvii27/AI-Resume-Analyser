import React from 'react';
import { History, Moon, Sun, Settings } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header style={{
      height: '64px',
      borderBottom: '1px solid var(--color-border)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'var(--color-bg)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{ fontWeight: 700, fontSize: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          background: 'var(--color-primary)', 
          borderRadius: '4px' 
        }}></div>
        AI Resume Analyzer
      </div>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <IconButton icon={<History size={20} />} label="History" />
        <IconButton icon={<Settings size={20} />} label="Settings" />
        <IconButton 
          icon={theme === 'light' ? <Moon size={20} /> : <Sun size={20} />} 
          label="Toggle Theme" 
          onClick={toggleTheme} 
        />
      </div>
    </header>
  );
};

const IconButton = ({ icon, label, onClick }) => (
  <button 
    onClick={onClick}
    title={label}
    style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-md)',
      color: 'var(--color-text-secondary)',
      transition: 'all 0.2s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
      e.currentTarget.style.color = 'var(--color-text-main)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = 'var(--color-text-secondary)';
    }}
  >
    {icon}
  </button>
);

export default Header;
