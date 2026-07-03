"use client";

import { useState, useMemo, useEffect } from "react";
import * as Icons from "@/src";
import logosMetadata from "./logos-metadata.json";
import { type LogoMeta } from "@/lib/types";
import { SiteHeader } from "@/components/shared/site-header";
import { LogoCard } from "@/components/shared/logo-card";
import { LogoDrawer } from "@/components/shared/logo-drawer";
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
    <div className="flex items-center gap-2 rounded-lg border bg-muted/50 px-4 py-2 text-sm font-mono text-muted-foreground w-fit mx-auto cursor-pointer" onClick={onCopy}>
      <span className="select-none">$</span>
      <span className="text-foreground">{cmd}</span>
      <Button
        variant="ghost"
        size="icon-sm"
        className="ml-2 h-7 w-7 cursor-pointer"
      >
        {copied ? (
          <CheckIcon className="h-5 w-5 text-green-600" />
        ) : (
          <CopyIcon className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedLogo, setSelectedLogo] = useState<LogoMeta | null>(null);

  // Initialize selected logo from URL query parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const logoName = params.get("logo");
    if (logoName) {
      const found = allLogos.find((l) => l.name === logoName);
      if (found) setSelectedLogo(found);
    }
  }, []);

  // Sync selectedLogo state to URL query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (selectedLogo) {
      params.set("logo", selectedLogo.name);
      window.history.replaceState(null, "", `?${params.toString()}`);
    } else {
      params.delete("logo");
      window.history.replaceState(
        null,
        "",
        params.size > 0 ? `?${params.toString()}` : window.location.pathname
      );
    }
  }, [selectedLogo]);

  const filteredLogos = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allLogos;
    return allLogos.filter(
      (logo) =>
        logo.title.toLowerCase().includes(q) ||
        logo.amharicName?.includes(q) ||
        logo.tags?.some((tag) => tag.toLowerCase().includes(q)) ||
        logo.name.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground w-[95vw] mx-auto">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 text-center">
          <div className="inline-flex items-center rounded-full border bg-muted/30 px-3 py-1 text-sm text-muted-foreground mb-6">
            <span className="flex h-2 w-2 rounded-full bg-primary/60 mr-2"></span>
            {allLogos.length} Official Logos
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-5xl mx-auto">
            SVG React Logos for <br className="hidden md:block" />
            Ethiopian Institutions
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-foreground/80 font-medium mb-10">
            A tree-shakable, TypeScript-ready package providing optimized
            official SVG logos of Ethiopian universities, banks, and brands.
          </p>
          <TerminalInstall />
        </section>

        {/* Search & Grid Section */}
        <section className="container mx-auto px-4 pb-24">
          <div className="sticky top-14 z-20 bg-background/95 backdrop-blur-sm py-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 border-b sm:border-b-0">
            <div className="relative max-w-xl mx-auto">
              <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-foreground/70" />
              <Input
                type="search"
                placeholder="Search by name, Amharic (ዩኒቨርሲቲ, ባንክ...), or tag..."
                className="pl-14 h-16 text-lg rounded-full bg-muted/30 border-muted-foreground/20 focus-visible:ring-primary/20"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="text-center mt-4 text-base font-medium text-foreground/80">
              {filteredLogos.length}{" "}
              {filteredLogos.length === 1 ? "logo" : "logos"} found
            </div>
          </div>

          {filteredLogos.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-foreground/80 mb-4">
                No logos found matching "{query}".
              </p>
              <Button variant="outline" onClick={() => setQuery("")}>
                Clear search
              </Button>
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
                    isSelected={selectedLogo?.name === logo.name}
                    onClick={() => setSelectedLogo(logo)}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>

      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://linkedin.com/in/yohannes-tesfaye"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 cursor-pointer"
            >
              Yohannes Tesfaye
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/yohannes-tesfaye/ethio-logos"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 cursor-pointer"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>

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
