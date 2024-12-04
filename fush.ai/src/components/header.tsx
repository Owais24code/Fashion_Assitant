import { Bot, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <div className="space-y-4 text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/10">
        <Bot className="w-6 h-6 text-purple-300" />
        <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">
          Fashion Style Assistant
        </h1>
        <Sparkles className="w-5 h-5 text-purple-300" />
      </div>
      <p className="text-purple-200/80 max-w-md mx-auto">
        Your AI-powered fashion advisor, ready to help you discover the perfect
        style
      </p>
    </div>
  );
}
