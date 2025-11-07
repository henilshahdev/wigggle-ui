import Link from "next/link";
import { EllipsisIcon, GitBranchIcon } from "lucide-react";

import {
  Widget,
  WidgetContent,
  WidgetHeader,
} from "@/registry/default/ui/widget";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar";
import { Label } from "@/registry/default/ui/label";
import { Icons } from "@/registry/default/ui/icons";
import { Button } from "@/registry/default/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu";
import { cn } from "@/registry/default/lib/utils";

export default function WidgetDemo() {
  return (
    <Widget size="md" className="gap-3">
      <WidgetHeader className="items-center justify-between">
        <div className="flex justify-start gap-3">
          <Avatar className="size-10">
            <AvatarImage
              src="https://github.com/wigggle-ui.png"
              alt="@wigggleui"
            />
            <AvatarFallback>WUI</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <Label className="font-normal">wigggle-ui</Label>
            <Label className="text-muted-foreground">
              wigggle-ui.vercel.app
            </Label>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <EllipsisIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="bg-background w-60 p-2 font-light"
            align="start"
          >
            <DropdownMenuItem className="group flex items-center justify-between">
              Add Favorite
              <AnimatedStar />
            </DropdownMenuItem>
            <DropdownMenuItem>Visit with Toolbar</DropdownMenuItem>
            <DropdownMenuItem>View Logs</DropdownMenuItem>
            <DropdownMenuItem>Manage Domains</DropdownMenuItem>
            <DropdownMenuItem>Transfer Project</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </WidgetHeader>
      <WidgetContent className="w-full flex-col items-start justify-start gap-3">
        <Link
          href="https://github.com/wigggle-ui/ui"
          target="_blank"
          className="bg-secondary hover:bg-muted/50 flex w-max items-center justify-center gap-1.5 rounded-full px-2 py-1.5 text-xs font-light transition-colors duration-300"
        >
          <Icons.GitHub className="size-4" />
          wigggle-ui/ui
        </Link>
        <Label className="text-sm font-normal">
          feat: added weather-md-01, weather-md-02 widgets
        </Label>
        <Label className="text-muted-foreground text-sm font-normal">
          <span>3d ago on </span>
          <GitBranchIcon className="size-4" />
          <span>main</span>
        </Label>
      </WidgetContent>
    </Widget>
  );
}

function AnimatedStar() {
  const baseClasses =
    "invisible absolute scale-0 transition-all ease-in-out group-hover:visible";

  return (
    <div className="relative flex items-center justify-center">
      <Icons.vercelMagic
        className={cn(
          baseClasses,
          "fill-vercel-purple stroke-vercel-purple size-[5px] -translate-x-0.5 -translate-y-1 transition-all duration-[340ms] group-hover:-translate-x-2 group-hover:-translate-y-[9px] group-hover:scale-150",
        )}
      />
      <Icons.vercelMagic
        className={cn(
          baseClasses,
          "fill-vercel-yellow stroke-vercel-yellow size-1 translate-x-1 -translate-y-1 transition-all duration-[260ms] group-hover:translate-x-2 group-hover:-translate-y-2.5 group-hover:scale-125",
        )}
      />
      <Icons.vercelMagic
        className={cn(
          baseClasses,
          "fill-vercel-blue stroke-vercel-blue size-[3.5px] translate-x-1.5 translate-y-0.5 transition-all duration-200 group-hover:translate-x-[9px] group-hover:translate-y-[3px] group-hover:scale-105",
        )}
      />
      <Icons.vercelMagic
        className={cn(
          baseClasses,
          "fill-vercel-teal stroke-vercel-teal size-1 translate-x-0 translate-y-2 transition-all duration-[180ms] group-hover:translate-x-0 group-hover:translate-y-[9px] group-hover:scale-125",
        )}
      />
      <Icons.vercelMagic
        className={cn(
          baseClasses,
          "fill-vercel-pink stroke-vercel-pink size-[3.5px] -translate-x-1.5 translate-y-0.5 transition-all duration-150 group-hover:-translate-x-[9px] group-hover:translate-y-[3px] group-hover:scale-105",
        )}
      />
      <Icons.vercelStar />
    </div>
  );
}
