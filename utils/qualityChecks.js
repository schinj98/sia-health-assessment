export function proteinCheck(mealPlan) {
    const lowProteinMeals = mealPlan.filter(m => m.protein < 10);
    if (lowProteinMeals.length === 0) {
      return { status: "OK", reason: "All meals meet protein range" };
    }
    return {
      status: "Warning",
      reason: `${lowProteinMeals.map(m => m.meal).join(", ")} protein below 10g`
    };
  }
  
  export function portionCheck(mealPlan) {
    const missing = mealPlan.some(m => !m.portion);
    return missing
      ? { status: "Needs Improvement", reason: "Missing portion sizes" }
      : { status: "OK", reason: "All portions defined" };
  }
  