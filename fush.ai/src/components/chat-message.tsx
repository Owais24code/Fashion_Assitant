import { User, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { Message } from "@/lib/types.js";

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl",
        message.type === "user"
          ? "bg-white/10 backdrop-blur-sm ml-auto max-w-[80%]"
          : "bg-purple-950/50 backdrop-blur-sm mr-auto max-w-[80%]"
      )}
    >
      <div className="min-w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-700/50">
        {message.type === "user" ? (
          <User className="w-4 h-4 text-purple-200" />
        ) : (
          <Bot className="w-4 h-4 text-purple-200" />
        )}
      </div>
      <div className="space-y-2">
        <p className="text-sm leading-relaxed text-purple-100">
          {message.content}
        </p>
        {message.suggestions && (
          <div className="mt-2 space-y-2">
            {message.suggestions.map((suggestion, index) => (
              <div
                key={index}
                className="bg-purple-900/30 rounded-lg p-3 border border-purple-700/30"
              >
                <h4 className="text-sm font-medium text-purple-200 mb-2">
                  {suggestion.category}
                </h4>
                <div className="space-y-1">
                  {suggestion.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex justify-between text-xs"
                    >
                      <span className="text-purple-300">
                        {item.brand} - {item.item}
                      </span>
                      <span className="text-purple-400">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
