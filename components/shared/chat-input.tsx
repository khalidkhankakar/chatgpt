"use client";

import { ArrowUp, Loader2, SendIcon } from "lucide-react";
import * as React from "react";
import TextareaAutosize from "react-textarea-autosize";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function ChatInput({
  className,
}: Props) {
  const [input, setInput] = React.useState<string>("");
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isLoading = false;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form)
        form.requestSubmit();
    }
  };

  return (
    <div className={cn("relative w-full transition-all duration-1000 max-w-4xl mx-auto", className)}>
      <form
        onSubmit={handleSubmit}
        className="relative flex items-end w-full overflow-hidden bg-background rounded-3xl border shadow-md focus-within:ring-1 focus-within:ring-ring"
      >
        <TextareaAutosize
          ref={inputRef}
          tabIndex={0}
          placeholder="Ask anything..."
          className="min-h-[80px]  w-full resize-none border-0 bg-transparent px-4 py-[1.3rem] focus-visible:outline-none focus-visible:ring-0 sm:text-sm"
          autoFocus
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          maxRows={5}
        />
        <div className="absolute right-2 bottom-2">
          <Button
            size="icon"
            type="submit"
            disabled={isLoading || !input.trim()}
            variant="ghost"
            className="h-8 w-8 rounded-md bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ArrowUp className="h-4 w-4" />}
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
