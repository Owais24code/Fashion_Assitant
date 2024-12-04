import ChatInterface from "@/components/chat-interface";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 dark:from-black dark:via-purple-950 dark:to-black">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <div className="mt-8">
          <ChatInterface />
        </div>
        <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </main>
  );
}
