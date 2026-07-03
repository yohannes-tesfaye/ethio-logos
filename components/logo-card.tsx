import type { ComponentType, SVGProps } from "react";
import type { LogoMeta } from "@/lib/types";

type EthioLogo = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

interface LogoCardProps {
  logo: LogoMeta;
  Component: EthioLogo;
  onClick: () => void;
}

export function LogoCard({ logo, Component, onClick }: LogoCardProps) {
  return (
    <button
      onClick={onClick}
      id={`logo-${logo.name}`}
      className="group flex flex-col items-center gap-2 rounded-lg border bg-card p-4 text-left transition-colors hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div className="flex h-16 w-full items-center justify-center">
        <Component style={{ maxWidth: 64, maxHeight: 64, width: "100%", height: "auto" }} />
      </div>
      <div className="w-full space-y-0.5 text-center">
        <p className="line-clamp-2 text-xs font-medium leading-tight">{logo.title}</p>
        <p className="font-mono text-[10px] text-muted-foreground">{logo.name}</p>
      </div>
    </button>
  );
}
