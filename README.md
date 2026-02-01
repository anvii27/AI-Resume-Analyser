# AI Resume Analyzer 📄🤖

An AI-powered web application that evaluates resumes against job descriptions to generate a match score and provide actionable improvement suggestions using NLP similarity techniques and AI-driven feedback.

Designed to simulate ATS-style screening and help users optimize their resumes for specific roles.

---

## 🚀 Overview

AI Resume Analyzer allows users to upload a resume PDF and paste a job description.

The system then:

- Extracts text from resume files  
- Cleans and preprocesses the content  
- Computes similarity between resume and job description  
- Generates AI-powered insights on missing skills and improvements  

This helps users understand how well their resume aligns with target job roles.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite  
- **Backend:** Node.js / FastAPI  
- **Text Processing:** PDF parsing (pdf-parse)  
- **AI Engine:** LLM API for feedback generation  
- **Version Control:** GitHub  

---

## ✨ Key Features

- Resume PDF upload and text extraction  
- Job description input interface  
- NLP-based match percentage scoring  
- AI-generated feedback and improvement tips  
- Clean responsive UI with light/dark mode support  
- Modular backend architecture  

---

## 🏗️ System Architecture

1. User uploads resume and enters job description  
2. Backend extracts and cleans resume text  
3. NLP similarity algorithm computes match score  
4. AI analyzes gaps and suggests improvements  
5. Results are displayed on the frontend  

---

## 🚦 Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/ai-resume-analyzer.git
cd ai-resume-analyzer

