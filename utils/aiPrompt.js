export function buildAIPrompt(client, mealPlan) {
    // Safely access client data with fallbacks
    const condition = client?.condition || "Not specified";
    const goals = client?.goals || "Not specified";
    const logs = client?.logs && Array.isArray(client.logs) 
      ? client.logs.join(", ") 
      : "No symptoms logged";
  
    // Ensure mealPlan is an array
    const meals = Array.isArray(mealPlan) ? mealPlan : [];
  
    const mealPlanText = meals.length > 0
      ? meals.map(m => {
          // Handle different possible data structures
          const meal = m?.meal || "Unknown meal";
          const food = m?.food || m?.items || "Not specified";
          const portion = m?.portion || "Not specified";
          const protein = m?.protein || 0;
          
          return `- ${meal}: ${food}, Portion: ${portion}, Protein: ${protein}g`;
        }).join("\n")
      : "No meal plan provided";
  
    return `
  You are reviewing a meal plan for internal quality control.
  
  Client:
  - Condition: ${condition}
  - Goals: ${goals}
  - Symptoms: ${logs}
  
  Meal Plan:
  ${mealPlanText}
  
  Instructions:
  - Mention at least ONE concern if any logical mismatch exists.
  - If no issues, explicitly say "No major concerns identified".
  - Keep answer under 4 lines.
  - Do NOT give medical advice.
  `;
  }