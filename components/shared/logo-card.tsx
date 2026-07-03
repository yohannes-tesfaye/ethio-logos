import type { ComponentType, SVGProps } from "react";
import type { LogoMeta } from "../../lib/types";

type EthioLogo = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

interface LogoCardProps {
  logo: LogoMeta;
  Component: EthioLogo;
  isSelected?: boolean;
  onClick: () => void;
}

export function LogoCard({ logo, Component, isSelected, onClick }: LogoCardProps) {
  return (
    <button
      onClick={onClick}
      id={`logo-${logo.name}`}
      className={`group relative flex flex-col items-center gap-2 rounded-lg border bg-card p-4 text-left transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer ${
        isSelected ? "border-primary ring-1 ring-primary bg-primary/5" : ""
      }`}
    >
      <div className="absolute right-2 top-2">
        <span className={`inline-flex rounded px-2 py-1 text-[10px] font-bold uppercase tracking-wider border ${
          logo.isRaster 
            ? "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400"
            : "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 dark:text-emerald-400"
        }`}>
          {logo.isRaster ? "PNG" : "SVG"}
        </span>
      </div>
      <div className="flex h-16 w-full items-center justify-center mt-2">
        <Component style={{ maxWidth: 64, maxHeight: 64, width: "100%", height: "auto" }} />
      </div>
      <div className="w-full space-y-1 text-center mt-2">
        <p className="line-clamp-2 text-sm font-bold leading-tight text-foreground">{logo.title}</p>
        <p className="font-mono text-[11px] text-foreground/70">{logo.name}</p>
      </div>
    </button>
  );
}
