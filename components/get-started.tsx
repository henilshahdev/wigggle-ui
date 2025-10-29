"use client";

import WidgetCli from "@/components/cli-commands";

import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";

export default function GetStarted() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> Get Started</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-left">Installation</DialogTitle>
          <DialogDescription className="sr-only">
            Use the CLI to add the base widget code to your project
          </DialogDescription>
        </DialogHeader>
        <div className="min-w-0 space-y-5">
          <h2>1. Install the widget using this command:</h2>
          <WidgetCli name="widget" />
          <h2>2. Update your import paths.</h2>
          <h2>3. Start adding widgets to your project.</h2>
        </div>
      </DialogContent>
    </Dialog>
  );
}
