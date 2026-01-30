import ClientTable from "@/components/ClientTable";
import { clients } from "@/data/clients";

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Nutritionist Review Dashboard</h1>
      <ClientTable clients={clients} />
    </main>
  );
}
