import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { extractTextFromPDF } from './services/pdfExtractor.js';
import { calculateMatchScore, getAIFeedback } from './services/analyzer.js';

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// File Upload Config (Memory Storage)
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// API Routes
app.get('/', (req, res) => {
  res.send('AI Resume Analyzer Backend is Running!');
});

app.post('/api/analyze', upload.single('resume'), async (req, res) => {
  try {
    const file = req.file;
    const jobDescription = req.body.jobDescription || '';

    if (!file) {
      return res.status(400).json({ error: 'No resume file uploaded' });
    }

    // Step 1 & 2: Extract & Clean
    const resumeText = await extractTextFromPDF(file.buffer);

    // Step 3 & 4: Simple Match
    const matchPercentage = calculateMatchScore(resumeText, jobDescription);

    // Step 5: AI Analysis
    const aiFeedback = await getAIFeedback(resumeText, jobDescription);

    // Response
    res.json({
      success: true,
      data: {
        resumeTextSnippet: resumeText.substring(0, 200) + '...',
        matchPercentage,
        aiFeedback
      }
    });

  } catch (error) {
    console.error('Analysis error:', error);
    res.status(500).json({ error: 'Failed to analyze resume' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
