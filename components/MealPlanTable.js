export default function MealPlanTable({ mealPlan }) {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Meal Plan</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Meal
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Food
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Calories
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Protein (g)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {mealPlan.map((meal, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {meal.meal}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {meal.food}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {meal.calories}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {meal.protein}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }