"use client";

import { MenuTwoLineIcon, PencilEdit02Icon, SidebarLeftIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { ChevronDown, EllipsisVertical, Share, User } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Sidebar } from "./sidebar";

function Navbar() {
  const isLoggedIn = true;
  return (
    <nav className="flex items-center justify-between  py-2 px-3 ">
      {
        isLoggedIn
          ? (
              <Button className="flex items-center justify-center lg:hidden  border-transparent shadow-none" variant="outline">
                <HugeiconsIcon size={50} className="size-5" icon={MenuTwoLineIcon} />
              </Button>
            )
          : (
              <Button className="flex items-center justify-center lg:hidden border-transparent shadow-none" variant="outline">
                <HugeiconsIcon size={50} className="size-5" icon={PencilEdit02Icon} />
              </Button>
            )
      }

      <div className="hidden lg:flex  items-center gap-2">
        {isLoggedIn && (
          <Sidebar />
        )}
        <Button className=" flex items-center justify-center border-transparent shadow-none" variant="outline">
          <HugeiconsIcon size={50} className="size-5" icon={PencilEdit02Icon} />
        </Button>
        <div className=" flex items-center gap-2">
          <h1 className="font-semibold text-gray-500 text-xl">ChatGPT</h1>
          <ChevronDown className="text-gray-600" />
        </div>

      </div>

      <div className="lg:hidden flex items-center gap-2">
        <h1 className="font-semibold text-gray-500 text-xl">ChatGPT</h1>
        <ChevronDown className="text-gray-600" />
      </div>

      {
        isLoggedIn
          ? (
              <Button className="flex items-center justify-center lg:hidden border-transparent shadow-none" variant="outline">
                <HugeiconsIcon size={50} className="size-5" icon={PencilEdit02Icon} />
              </Button>
            )
          : (
              <div className="flex items-center gap-2">
                <Button className="hidden lg:block rounded-3xl">Sign up</Button>
                <Button>Log in</Button>
              </div>
            )
      }
      {
        isLoggedIn && (
          <div className="hidden lg:block">
            <Button variant="outline" className="border-gray-600 font-semibold rounded-3xl shadow-none">
              <Share className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" className="border-transparent rounded-full shadow-none">
              <EllipsisVertical className="size-5" />
            </Button>
            <Button variant="outline" className="border-transparent rounded-full shadow-none">
              <User className="size-5" />
            </Button>
          </div>
        )

      }

    </nav>
  );
}

export default Navbar;
