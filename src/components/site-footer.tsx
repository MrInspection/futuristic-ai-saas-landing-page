import { Star } from "lucide-react";
import Link from "next/link";
import { SpherealLogo } from "@/components/sphereal-logo";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site-config";

export function SiteFooter() {
  return (
    <>
      <footer className="border-t">
        <div className="container py-6 md:px-20">
          <section className="flex items-center justify-between max-md:flex-col max-md:gap-4">
            <Link href="/" className="inline-flex items-center gap-4">
              <SpherealLogo className="size-8" />
              <p className="font-bold text-xl">sphereal.ai</p>
            </Link>
            <nav className="flex items-center gap-6">
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Contact
              </p>
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Privacy
              </p>
              <p className="cursor-pointer font-medium text-muted-foreground text-sm transition duration-300 hover:text-foreground">
                Terms & Conditions
              </p>
            </nav>
          </section>
        </div>
      </footer>
      <section className="border-t-2 bg-black p-4">
        <div className="container flex items-center justify-between max-md:flex-col max-md:gap-4 md:px-20">
          <div className="text-muted-foreground text-sm max-md:text-balance max-md:text-center">
            Build by{" "}
            <a
              href={siteConfig.links.creatorGithubUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Moussa
            </a>
            . The source code is available on{" "}
            <a
              href={siteConfig.links.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </div>
          <div className="max-md:hidden">
            <Link
              href={siteConfig.links.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              <Star className="size-4 fill-current" /> Star on GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
