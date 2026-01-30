import { useState } from "react";

export default function QualityChecks({ mealPlan, onResult }) {
  const [loading, setLoading] = useState(false);

  const runChecks = () => {
    setLoading(true);
    
    // Simulate quality checks
    setTimeout(() => {
      const totalCalories = mealPlan.reduce((sum, m) => sum + m.calories, 0);
      const totalProtein = mealPlan.reduce((sum, m) => sum + m.protein, 0);

      const checks = [
        {
          name: "Total Calories",
          value: totalCalories,
          status: totalCalories >= 1800 && totalCalories <= 2200 ? "pass" : "warning"
        },
        {
          name: "Total Protein",
          value: `${totalProtein}g`,
          status: totalProtein >= 100 ? "pass" : "warning"
        },
        {
          name: "Meal Count",
          value: mealPlan.length,
          status: mealPlan.length >= 3 ? "pass" : "fail"
        }
      ];

      onResult(checks);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Quality Checks</h2>
        <button
          onClick={runChecks}
          disabled={loading}
          className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Running..." : "Run Checks"}
        </button>
      </div>

      <p className="text-sm text-gray-600">
        Validate nutritional targets and meal plan completeness
      </p>
    </div>
  );
}