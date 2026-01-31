/**
 * Service to handle analysis logic.
 */

/**
 * Calculates a simple similarity score between two texts.
 * Uses a basic word overlap (Jaccard Index) approach for demonstration.
 */
export const calculateMatchScore = (text1, text2) => {
  if (!text2) return 0; // If no job description, score is 0 or irrelevant

  const set1 = new Set(text1.toLowerCase().split(/\s+/));
  const set2 = new Set(text2.toLowerCase().split(/\s+/));

  const intersection = new Set([...set1].filter((x) => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  if (union.size === 0) return 0;

  const score = (intersection.size / union.size) * 100;
  // Normalize score slightly for better UX (raw Jaccard is usually low)
  return Math.min(Math.round(score * 2.5), 95);
};

/**
 * MOCK AI Service.
 * Replace this with a real call to OpenAI/Anthropic/Gemini.
 */
export const getAIFeedback = async (resumeText, jobDescription) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    missingSkills: [
      "Experience with Cloud Infrastructure (AWS/Azure)",
      "Knowledge of CI/CD pipelines",
      "Unit Testing frameworks (Jest/Vitest)",
    ],
    improvementSuggestions: [
      "Quantify your achievements. Add metrics to your project descriptions.",
      "Move your 'Skills' section to the top for better visibility.",
      "Tailor your summary to mention specific technologies from the job description.",
      "Check for consistent formatting in your 'Experience' dates.",
      "Include a link to your portfolio or GitHub profile.",
    ],
  };
};
