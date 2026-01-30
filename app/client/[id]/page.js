"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { clients } from "@/data/clients";

import ClientSummary from "@/components/ClientSummary";
import MealPlanTable from "@/components/MealPlanTable";
import QualityChecks from "@/components/QualityChecks";
import AIInsights from "@/components/AIInsights";
import CoachNotes from "@/components/CoachNotes";
import FinalRecommendation from "@/components/FinalRecommendation";

export default function ClientPage() {
  const params = useParams();          // ✅ CORRECT
  const { id } = params;               // id is string

  const client = clients.find(c => c.id === id);

  const [qualityResults, setQualityResults] = useState([]);
  const [aiInsight, setAiInsight] = useState("");
  const [coachNote, setCoachNote] = useState("");

  if (!client) {
    return <p style={{ padding: 20 }}>Client not found</p>;
  }

  return (
    <main style={{ padding: 20 }}>
      <ClientSummary client={client} />

      <MealPlanTable mealPlan={client.mealPlan} />

      <QualityChecks
        mealPlan={client.mealPlan}
        onResult={setQualityResults}
      />

      <AIInsights client={client} onInsight={setAiInsight} />

      <CoachNotes onChange={setCoachNote} />

      <FinalRecommendation
        qualityChecks={qualityResults}
        aiInsight={aiInsight}
        coachNote={coachNote}
      />
    </main>
  );
}
