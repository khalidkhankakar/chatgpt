import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ChatGptIcon, PencilEdit02Icon, Search01Icon, SidebarLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Hint } from "./hint";

export function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="flex items-center justify-center border-transparent shadow-none" variant="outline">
          <HugeiconsIcon size={50} className="size-5" icon={SidebarLeftIcon} />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-64" side="left">
        <SheetHeader>
          <SheetTitle className="hidden">Edit profile</SheetTitle>

          <div className="flex items-center justify-between">
            <SheetClose asChild>
              <Button className="flex items-center justify-center border-transparent shadow-none" variant="outline">
                <HugeiconsIcon size={50} className="size-6" icon={SidebarLeftIcon} />
              </Button>
            </SheetClose>

            <div className="flex items-center gap-2 mr-4">
              <Button className="flex items-center justify-center  border-transparent shadow-none" variant="outline">
                <HugeiconsIcon size={50} className="size-6" icon={Search01Icon} />
              </Button>
              <Button className="flex items-center justify-center border-transparent shadow-none" variant="outline">
                <HugeiconsIcon size={50} className="size-6" icon={PencilEdit02Icon} />
              </Button>
            </div>
          </div>
        </SheetHeader>

        <ScrollArea className="px-2">

          <Hint label="New chat" side="right">
            <div className="flex  rounded-md  items-center gap-2 py-1 px-3 hover:bg-slate-200 hover:dark:bg-slate-800">
              <HugeiconsIcon icon={ChatGptIcon} />
              <p>ChatGPT</p>
            </div>
          </Hint>

        </ScrollArea>

      </SheetContent>
    </Sheet>
  );
}
