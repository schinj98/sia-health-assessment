import { useState } from "react";

export default function AIInsights({ client, onInsight }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateInsight = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/ai/insight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          client: client,
          mealPlan: client.mealPlan
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.insight || "Failed to generate insights");
      }

      onInsight(data.insight);
    } catch (err) {
      console.error("Error generating insights:", err);
      setError(err.message);
      onInsight("AI analysis failed. Please review manually.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">AI Insights</h2>
        <button
          onClick={generateInsight}
          disabled={loading}
          className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate Insights"}
        </button>
      </div>

      <p className="text-sm text-gray-600">
        Get AI-powered recommendations based on client profile and meal plan
      </p>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-700">{error}</p>
        </div>
      )}
    </div>
  );
}