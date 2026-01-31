import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

/**
 * Service to handle PDF text extraction and cleaning.
 */
export const extractTextFromPDF = async (buffer) => {
  try {
    const data = await pdfParse(buffer);
    return cleanText(data.text);
  } catch (error) {
    throw new Error('Failed to parse PDF');
  }
};

/**
 * Cleans extracted text by removing extra whitespaces and line breaks.
 * @param {string} text - Raw text
 * @returns {string} - Cleaned text
 */
const cleanText = (text) => {
  if (!text) return '';
  return text
    .replace(/\s+/g, ' ') // Replace multiple spaces/newlines with single space
    .trim();
};
