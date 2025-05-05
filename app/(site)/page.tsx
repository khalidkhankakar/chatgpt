import { ChatInput } from "@/components/shared/chat-input";
import { Suggestions } from "@/components/shared/suggestions";
import { cn } from "@/lib/utils";

export default function page() {
  const preious_chat = false;
  return (
    <div className={cn("flex flex-col gap-4 justify-center t  h-full w-full border-2 border-red-400", preious_chat ? "items-end" : "items-center")}>

      {!preious_chat && <h3 className="font-bold text-5xl md:text-3xl">How I can help you today!</h3> }
      <ChatInput className="" />
      <Suggestions />
    </div>
  );
}
