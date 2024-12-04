"use client";

import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import ChatMessage from "@/components/chat-message";
import { Message } from "@/lib/types";
import { useChat } from "";

export default function ChatInterface() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      initialMessages: [
        {
          id: "initial",
          role: "assistant",
          content:
            "Hi! I'm your AI fashion assistant. I can help you discover the perfect style and recommend specific pieces from top brands. What kind of look are you interested in?",
        },
      ],
    });

  const adaptedMessages: Message[] = messages.map((message: Message) => ({
    id: parseInt(message.id) || Math.random().toString(),
    content: message.content,
    type: message.role === "user" ? "user" : "bot",
  }));

  return (
    <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/10">
      <ScrollArea className="h-[600px] p-4">
        <div className="space-y-4">
          {adaptedMessages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
      </ScrollArea>
      <div className="p-4 border-t border-purple-800/30 bg-purple-950/30">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            placeholder="Ask about fashion advice..."
            value={input}
            onChange={handleInputChange}
            className="flex-1 bg-white/5 border-purple-800/30 text-purple-100 placeholder:text-purple-300/50"
          />
          <Button
            type="submit"
            size="icon"
            className="bg-purple-600 hover:bg-purple-500 text-white"
            disabled={isLoading}
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
