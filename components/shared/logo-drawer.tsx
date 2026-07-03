"use client";

import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import type { LogoMeta } from "../../lib/types";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckIcon, CopyIcon } from "lucide-react";

type EthioLogo = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number | string }
>;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={handleCopy}
      aria-label="Copy code"
      className="cursor-pointer"
    >
      {copied ? (
        <CheckIcon className="h-5 w-5 text-green-600" />
      ) : (
        <CopyIcon className="h-5 w-5" />
      )}
    </Button>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="space-y-1.5">
      <p className="text-sm font-medium text-foreground/70">{label}</p>
      <div className="relative rounded-lg border border-border/50 bg-muted/40 p-4 pr-12">
        <pre className="overflow-x-auto text-sm leading-relaxed text-foreground">
          <code>{code}</code>
        </pre>
        <div className="absolute right-3 top-3">
          <CopyButton text={code} />
        </div>
      </div>
    </div>
  );
}

interface LogoDrawerProps {
  logo: LogoMeta | null;
  Component: EthioLogo | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function LogoDrawer({
  logo,
  Component,
  open,
  onOpenChange,
}: LogoDrawerProps) {
  if (!logo || !Component) return null;

  const importCode = `import { ${logo.name} } from "ethio-logos";`;
  const usageCode = `const App = () => {\n  return (\n    <${logo.name} />\n  );\n};\n\nexport default App;`;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-sm overflow-y-auto">
        <SheetHeader className="pb-0">
          <SheetTitle>{logo.title}</SheetTitle>
          <SheetDescription>{logo.amharicName}</SheetDescription>
        </SheetHeader>

        <Separator />

        {/* Logo preview */}
        <div className="flex items-center justify-center bg-muted/30 rounded-md p-8 mx-4">
          <Component
            style={{
              maxWidth: 160,
              maxHeight: 120,
              width: "100%",
              height: "auto",
            }}
          />
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-2 px-4 text-sm mt-2">
          <div>
            <p className="text-foreground/70 mb-1">Format</p>
            <span className={`inline-flex rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider border ${
              logo.isRaster 
                ? "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400"
                : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400"
            }`}>
              {logo.isRaster ? "PNG" : "SVG"}
            </span>
          </div>
          <div>
            <p className="text-foreground/70 mb-1">Size</p>
            <p className="font-bold text-foreground">{logo.sizeFormatted}</p>
          </div>
        </div>

        <Separator />

        {/* Code blocks */}
        <div className="flex flex-col gap-4 px-4 pb-4">
          <CodeBlock label="Import" code={importCode} />
          <CodeBlock label="Usage" code={usageCode} />

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {logo.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-2.5 py-1 text-[11px] font-medium text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
