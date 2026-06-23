import { ModeToggle } from "@/components/modeToggle/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <div className="absolute top-6 right-6">
        <ModeToggle />
      </div>

      <div className="max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center rounded-full border px-4 py-1 text-sm">
          🌊 FloatChatAI
        </div>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Chat with the
          <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Ocean
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          AI-powered conversational interface for ARGO ocean data discovery,
          geospatial analytics, and interactive scientific visualization.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg">Get Started</Button>

          <Button variant="outline" size="lg">
            View Documentation
          </Button>

          <Button variant="secondary" size="lg">
            Explore Dashboard
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">🤖 Agentic RAG</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Natural language access to complex oceanographic datasets.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">🌍 Geospatial Analytics</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore ARGO float trajectories and location-based insights.
            </p>
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">📊 Visualization</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Interactive maps, depth profiles, and ocean data dashboards.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
