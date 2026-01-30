# SIA Health – Nutrition Plan Review Dashboard

## Overview

This project is an internal decision-support dashboard designed for nutritionists and health coaches at SIA Health.

The goal is not to provide medical advice or client-facing recommendations, but to:

- Review nutritionist-created meal plans
- Perform basic quality checks
- Use AI responsibly to surface high-level concerns
- Enable clear, human-led decisions

## Problem Statement

Nutritionists create personalized meal plans for clients with conditions such as PCOS, thyroid issues, gut health problems, etc.

Health coaches need a quick, structured way to:

- Validate meal plan quality
- Check alignment with client goals and symptoms
- Identify potential concerns before approval or iteration

## Solution Summary

This dashboard allows a health coach to:

1. Select a client
2. View client context (condition, goals, symptoms)
3. Review the assigned meal plan
4. Run rule-based quality checks
5. Generate AI-assisted plan insights
6. Add manual coach notes
7. View a final combined recommendation

The tool intentionally stops at the internal recommendation stage.

## Key Features

### 1. Client Review Dashboard

- Mock list of multiple clients
- Each client has:
  - Condition
  - Goals
  - Health logs (symptoms)
  - Meal plan (breakfast, lunch, dinner)

Client data is simplified and partially hardcoded, as allowed by the assignment.

### 2. Rule-Based Quality Checks (Check 1)

Implemented deterministic checks such as:

- **Protein distribution check** - Warns if meals fall below an assumed 10g protein threshold
- **Portion size check** - Ensures all meals have defined portions

Each check returns:

- Status: `OK / Warning / Needs Improvement`
- A short, explainable reason

Nutrition science accuracy is not assumed; logical estimation is used as per assignment instructions.

### 3. AI-Assisted Plan Fit (Check 2 – Optional)

An AI model (via Groq API) is used to:

- Assess alignment with client condition and goals
- Identify 1–2 high-level concerns
- Highlight possible contradictions with health logs

**Important:**

- AI output is never shown raw
- Responses are interpreted and summarized
- Final decisions remain human-led

### 4. Coach Notes & Final Recommendation

- Health coach can add manual notes
- A final recommendation dynamically combines:
  - Rule-based checks
  - AI insights
  - Coach judgment

This represents the end state of the internal workflow.

## Tech Stack

- **Frontend**: Next.js (App Router)
- **State Management**: React hooks
- **Styling**: Tailwind CSS
- **AI Integration**: Groq LLM (via secure API route)
- **Backend**: Not required (frontend-only + API route)
- **Database**: Not used (mock data as allowed)

## AI Usage & Responsibility

AI is used strictly as a decision-support tool, not an authority.

Steps taken to ensure responsible usage:

- Prompts are carefully framed with context
- AI output is constrained to concise insights
- Human interpretation is always applied before display
- No medical advice or diagnoses are generated

## Assumptions Made

- Protein values are approximate and assumed
- Health logs are treated as qualitative signals
- Client medical data is simplified intentionally
- The dashboard is for internal review only

## What Is Out of Scope (By Design)

- Client-facing portal
- Authentication or login system
- Database persistence
- Medical diagnosis or prescriptions
- Recommendation delivery workflows

These are intentionally excluded to match the assignment scope.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Groq API key (for AI insights feature)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sia-health-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
GROQ_API_KEY=your_groq_api_key_here
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
sia-health-dashboard/
├── app/
│   ├── page.js                    # Home page with client list
│   ├── client/[id]/page.js        # Individual client review page
│   └── api/
│       └── ai/insight/route.js    # AI insight API endpoint
├── components/
│   ├── ClientTable.jsx            # Client list table
│   ├── ClientSummary.jsx          # Client info display
│   ├── MealPlanTable.jsx          # Meal plan display
│   ├── QualityChecks.jsx          # Rule-based checks
│   ├── AIInsights.jsx             # AI-powered insights
│   ├── CoachNotes.jsx             # Manual notes input
│   └── FinalRecommendation.jsx    # Combined recommendation
├── data/
│   └── clients.js                 # Mock client data
├── utils/
│   └── aiPrompt.js                # AI prompt builder
└── README.md
```

## Usage

1. **View Clients**: Navigate to the home page to see all clients
2. **Select Client**: Click on a client name to view their details
3. **Review Meal Plan**: Examine the assigned meal plan
4. **Run Quality Checks**: Click "Run Checks" to validate the plan
5. **Generate AI Insights**: Click "Generate Insights" for AI analysis
6. **Add Coach Notes**: Enter your professional observations
7. **Review Recommendation**: See the final combined recommendation

## Future Improvements

With more time, this system could be extended to:

- Persist client data and reviews
- Add role-based access (nutritionist vs coach)
- Support longitudinal plan tracking
- Integrate structured health metrics
- Add real-time collaboration features
- Export reports and recommendations

## Final Note

This project focuses on clarity of thinking, structured decision-making, and responsible AI usage, aligning closely with SIA Health's internal tooling needs.

## License

This project is created as an assignment for SIA Health.