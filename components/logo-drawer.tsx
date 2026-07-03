"use client";

import { useState } from "react";
import type { ComponentType, SVGProps } from "react";
import type { LogoMeta } from "@/lib/types";
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

type EthioLogo = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <Button variant="ghost" size="icon-sm" onClick={handleCopy} aria-label="Copy code">
      {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
    </Button>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs text-muted-foreground">{label}</p>
      <div className="relative rounded-md border bg-muted/50 p-3 pr-10">
        <pre className="overflow-x-auto text-xs leading-relaxed">
          <code>{code}</code>
        </pre>
        <div className="absolute right-2 top-2">
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

export function LogoDrawer({ logo, Component, open, onOpenChange }: LogoDrawerProps) {
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
          <Component style={{ maxWidth: 160, maxHeight: 120, width: "100%", height: "auto" }} />
        </div>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-2 px-4 text-xs">
          <div>
            <p className="text-muted-foreground">Type</p>
            <p className="font-medium">{logo.type}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Size</p>
            <p className="font-medium">{logo.sizeFormatted}</p>
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
                className="rounded-full border px-2 py-0.5 text-[10px] text-muted-foreground"
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
