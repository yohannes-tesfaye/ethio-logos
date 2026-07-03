import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-background border-b">
      <div className="container mx-auto flex h-12 items-center gap-4 px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-sm font-serif text-primary"
        >
          {/* <span className="size-5 rounded bg-primary text-primary-foreground inline-flex items-center justify-center text-[10px] font-bold">
            E
          </span> */}
          Ethio-Logos
          <span className="text-muted-foreground font-normal text-xs">
            v0.1.1
          </span>
        </Link>

        <Separator orientation="vertical" className="h-4" />

        <nav className="flex items-center gap-1 text-sm text-muted-foreground">
          <button className="px-2 py-1 rounded-md hover:bg-muted hover:font-semibold">
            <Link href="/">Browse</Link>
          </button>
          <button className="px-2 py-1 rounded-md hover:bg-muted hover:font-semibold">
            <Link href="/wishlist">Pending SVGs</Link>
          </button>
          <button className="px-2 py-1 rounded-md hover:bg-muted hover:font-semibold">
            <Link href="/contribute">Contribute</Link>
          </button>
        </nav>

        <div className="ml-auto flex gap-2.5 items-center">
          <ModeToggle />
          <div className="text-sm border border-input rounded-md px-3 py-1">
            <a
              href="https://github.com/yohannes-tesfaye/ethio-logos"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
