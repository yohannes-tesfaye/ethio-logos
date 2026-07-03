import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata = {
  title: "Contribute to Ethio-Logos",
  description:
    "Request a logo or submit an SVG logo to the Ethio-Logos open source library.",
};

export default function ContributePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      <main className="flex-1 container mx-auto px-4 py-16 md:py-24 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            Contribute to Ethio-Logos
          </h1>
          <p className="text-lg text-muted-foreground text-balance">
            Help grow the library by submitting a missing formal brand logo, or
            requesting one to be added.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Logo Submission Section */}
          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Submit a Logo
              </h2>
              <p className="text-sm text-muted-foreground">
                Have an official SVG logo of an Ethiopian institution? Submit it
                here to add it to the package.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="orgName">Institution Name</Label>
                <Input
                  id="orgName"
                  placeholder="e.g., Ministry of Innovation"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="svgFile">Logo File (SVG or PNG)</Label>
                <Input
                  id="svgFile"
                  type="file"
                  accept=".svg,.png"
                  required
                  className="cursor-pointer"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="source">Source/Reference URL</Label>
                <Input
                  id="source"
                  type="url"
                  placeholder="Optional reference link"
                />
              </div>
              <Button type="button" className="w-full">
                Upload Logo
              </Button>
            </form>
          </section>

          {/* Logo Request Section */}
          <section className="space-y-6 md:border-l md:pl-12 border-border">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Request a Logo
              </h2>
              <p className="text-sm text-muted-foreground">
                Need a specific brand logo that isn't in the library yet? Drop a
                request and we'll try to find it.
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="requestOrg">Institution Name</Label>
                <Input
                  id="requestOrg"
                  placeholder="e.g., Commercial Bank of Ethiopia"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Additional Details</Label>
                <textarea
                  id="details"
                  placeholder="Any specific variations or helpful details?"
                  className="w-full min-h-[100px] rounded-lg border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  required
                />
              </div>
              <Button type="button" variant="secondary" className="w-full">
                Submit Request
              </Button>
            </form>
          </section>
        </div>

        <div className="mt-20 text-center rounded-lg border bg-muted/30 p-8">
          <h3 className="text-lg font-semibold mb-2">Are you a developer?</h3>
          <p className="text-muted-foreground text-sm mb-4 max-w-md mx-auto">
            You can also contribute directly via GitHub by opening a PR with
            your SVG assets.
          </p>
          <Button variant="outline">
            <a
              href="https://github.com/yohannes-tesfaye/ethio-logos"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository on GitHub
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
}
