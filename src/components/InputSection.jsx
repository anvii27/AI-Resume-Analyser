import React, { useState } from 'react';
import { Upload, FileText, Sparkles } from 'lucide-react';

const InputSection = ({ onAnalyze, isAnalyzing }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="input-section">
      {/* Resume Upload Area */}
      <div 
        className="upload-area"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-upload').click()}
        style={{
          border: `2px dashed ${isDragging ? 'var(--color-primary)' : 'var(--color-border)'}`,
          backgroundColor: isDragging ? 'var(--color-surface-hover)' : 'transparent',
          borderRadius: '12px',
          padding: '40px',
          minHeight: '200px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          marginBottom: '24px'
        }}
        onMouseEnter={(e) => {
           if(!isDragging) e.currentTarget.style.borderColor = 'var(--color-border-hover)';
        }}
        onMouseLeave={(e) => {
           if(!isDragging) e.currentTarget.style.borderColor = 'var(--color-border)';
        }}
      >
        <input 
          type="file" 
          id="file-upload" 
          style={{ display: 'none' }} 
          accept=".pdf,.doc,.docx"
          onChange={handleFileSelect}
        />
        
        {file ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ 
              width: '64px', 
              height: '64px', 
              background: 'var(--color-success-bg)', 
              color: 'var(--color-success)', 
              borderRadius: '50%',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <FileText size={32} />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '4px' }}>{file.name}</h3>
            <p className="text-secondary" style={{ fontSize: '14px' }}>Ready to analyze</p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', pointerEvents: 'none' }}>
            <div style={{ 
              width: '48px', 
              height: '48px', 
              background: 'var(--color-surface)', 
              borderRadius: '50%',
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              color: 'var(--color-text-muted)'
            }}>
              <Upload size={24} />
            </div>
            <p style={{ fontSize: '16px', fontWeight: 500, marginBottom: '4px' }}>
              Tap to upload resume
            </p>
            <p className="text-secondary" style={{ fontSize: '14px' }}>
              or drag and drop PDF
            </p>
          </div>
        )}
      </div>

      {/* Job Description Input */}
      <div style={{ marginBottom: '32px' }}>
        <label style={{ 
          display: 'block', 
          fontSize: '12px', 
          fontWeight: 600, 
          letterSpacing: '0.5px',
          color: 'var(--color-text-muted)',
          marginBottom: '8px',
          textTransform: 'uppercase'
        }}>
          Job Description (Optional)
        </label>
        <textarea 
          placeholder="Paste the job description here to check compatibility..."
          style={{
            width: '100%',
            minHeight: '160px',
            padding: '16px',
            borderRadius: '8px',
            border: '1px solid var(--color-border)',
            backgroundColor: 'transparent',
            color: 'var(--color-text-main)',
            resize: 'vertical',
            fontSize: '14px',
            lineHeight: '1.5',
            outline: 'none'
          }}
          onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
          onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
        />
      </div>

      {/* Action Button */}
      <button 
        onClick={onAnalyze}
        disabled={!file || isAnalyzing}
        style={{
          width: '100%',
          height: '48px',
          backgroundColor: isAnalyzing ? 'var(--color-surface-hover)' : 'var(--color-primary)',
          color: isAnalyzing ? 'var(--color-text-muted)' : 'var(--color-primary-text)',
          borderRadius: '8px',
          fontWeight: 600,
          fontSize: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          opacity: (!file && !isAnalyzing) ? 0.5 : 1,
          cursor: (!file || isAnalyzing) ? 'not-allowed' : 'pointer'
        }}
      >
        {isAnalyzing ? (
          <>Analyzing...</>
        ) : (
          <>
            <Sparkles size={18} />
            Run Analysis
          </>
        )}
      </button>
    </div>
  );
};

export default InputSection;
