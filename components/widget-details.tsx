"use client";

import { JSX, useEffect, useState } from "react";
import { CodeIcon } from "lucide-react";
import type { RegistryItem } from "shadcn/registry";

import { convertRegistryPaths } from "@/lib/utils";
import WidgetCli from "@/components/cli-commands";
import CodeBlock, { highlight } from "@/components/code-block";
import CopyButton from "@/components/copy-button";
import { Button } from "@/registry/default/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/default/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/default/ui/tooltip";

export default function WidgetDetails({ widget }: { widget: RegistryItem }) {
  const [code, setCode] = useState<string | null>(null);
  const [highlightedCode, setHighlightedCode] = useState<JSX.Element | null>(
    null,
  );

  useEffect(() => {
    const handleEmptyCode = () => {
      setCode("");
      setHighlightedCode(null);
    };

    const loadCode = async () => {
      try {
        const response = await fetch(`/r/${widget.name}.json`);
        if (!response.ok) {
          handleEmptyCode();
          return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          handleEmptyCode();
          return;
        }

        const data = await response.json();
        const codeContent = convertRegistryPaths(data.files[0].content) || "";
        setCode(codeContent);

        // Pre-highlight the code
        const highlighted = await highlight(codeContent, "tsx");
        setHighlightedCode(highlighted);
      } catch (error) {
        console.error("Failed to load code:", error);
        handleEmptyCode();
      }
    };

    loadCode();
  }, [widget.name]);

  return (
    <div className="absolute top-1 right-2 flex gap-1 peer-data-comp-loading:hidden lg:top-2">
      <Dialog>
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <span>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-foreground transition-none disabled:opacity-100"
                  >
                    <CodeIcon size={16} aria-hidden={true} />
                  </Button>
                </DialogTrigger>
              </span>
            </TooltipTrigger>
            <TooltipContent className="text-muted-foreground px-2 py-1 text-xs">
              View code
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-left">Installation</DialogTitle>
            <DialogDescription className="sr-only">
              Use the CLI to add widgets to your project
            </DialogDescription>
          </DialogHeader>
          <div className="min-w-0 space-y-5">
            <WidgetCli name={widget.name} />
            <div className="space-y-4">
              <p className="text-lg font-semibold tracking-tight">Code</p>
              <div className="relative">
                {code === "" ? (
                  <p className="text-muted-foreground text-sm">
                    No code available. If you think this is an error, please{" "}
                    <a
                      href="https://github.com/wigggle-ui/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium underline underline-offset-4 hover:no-underline"
                    >
                      open an issue
                    </a>
                    .
                  </p>
                ) : (
                  <>
                    <CodeBlock
                      code={code}
                      lang="tsx"
                      preHighlighted={highlightedCode}
                    />
                    <CopyButton componentSource={code} />
                  </>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
