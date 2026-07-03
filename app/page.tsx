"use client";

import { useState, useMemo } from "react";
import * as Icons from "@/src";
import logosMetadata from "./logos-metadata.json";
import { type LogoMeta } from "@/lib/types";
import { SiteHeader } from "@/components/site-header";
import { LogoCard } from "@/components/logo-card";
import { LogoDrawer } from "@/components/logo-drawer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon, SearchIcon } from "lucide-react";

const allLogos = logosMetadata as LogoMeta[];

function TerminalInstall() {
  const [copied, setCopied] = useState(false);
  const cmd = "npm install ethio-logos";

  const onCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-4 py-2 text-sm font-mono text-muted-foreground w-fit mx-auto">
      <span className="select-none">$</span>
      <span className="text-foreground">{cmd}</span>
      <Button variant="ghost" size="icon-sm" onClick={onCopy} className="ml-2 h-6 w-6">
        {copied ? <CheckIcon className="h-3.5 w-3.5 text-green-600" /> : <CopyIcon className="h-3.5 w-3.5" />}
      </Button>
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedLogo, setSelectedLogo] = useState<LogoMeta | null>(null);

  const filteredLogos = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allLogos;
    return allLogos.filter(
      (logo) =>
        logo.title.toLowerCase().includes(q) ||
        logo.amharicName?.includes(q) ||
        logo.tags?.some((tag) => tag.toLowerCase().includes(q)) ||
        logo.name.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center rounded-full border bg-muted/30 px-3 py-1 text-sm text-muted-foreground mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary/60 mr-2"></span>
            {allLogos.length} Official Logos
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto">
            SVG React Logos for <br className="hidden md:block" />
            Ethiopian Institutions
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            A tree-shakable, TypeScript-ready package providing optimized official SVG logos of Ethiopian universities, banks, and brands.
          </p>
          <TerminalInstall />
        </section>

        {/* Search & Grid Section */}
        <section className="container mx-auto px-4 pb-24">
          <div className="sticky top-14 z-20 bg-background/95 backdrop-blur-sm py-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 border-b sm:border-b-0">
            <div className="relative max-w-xl mx-auto">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, Amharic (ዩኒቨርሲቲ, ባንክ...), or tag..."
                className="pl-11 h-12 text-base rounded-full bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary/20"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="text-center mt-4 text-sm text-muted-foreground">
              {filteredLogos.length} {filteredLogos.length === 1 ? "logo" : "logos"} found
            </div>
          </div>

          {filteredLogos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground mb-4">No logos found matching "{query}".</p>
              <Button variant="outline" onClick={() => setQuery("")}>Clear search</Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {filteredLogos.map((logo) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const Component = (Icons as any)[logo.name];
                if (!Component) return null;
                return (
                  <LogoCard
                    key={logo.name}
                    logo={logo}
                    Component={Component}
                    onClick={() => setSelectedLogo(logo)}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>

      <LogoDrawer
        logo={selectedLogo}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        Component={selectedLogo ? (Icons as any)[selectedLogo.name] : null}
        open={!!selectedLogo}
        onOpenChange={(open) => {
          if (!open) setSelectedLogo(null);
        }}
      />
    </div>
  );
}
