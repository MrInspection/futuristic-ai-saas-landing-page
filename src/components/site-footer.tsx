import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {ExternalLink, Star} from "lucide-react";
import Link from "next/link";
import {siteConfig} from "@/site-config";
import {SpherealLogo} from "@/components/sphereal-logo";

export function SiteFooter() {
  return (
    <>
      <footer className="border-t">
        <div className="container py-6 md:px-20">
          <section className="flex max-md:flex-col max-md:gap-4 items-center justify-between">
            <Link href="/" className="inline-flex items-center gap-4">
              <SpherealLogo className="size-8" />
              <p className="font-bold text-xl">sphereal.ai</p>
            </Link>
            <nav className="flex items-center gap-6">
              <p className="text-muted-foreground text-sm font-medium hover:text-foreground cursor-pointer transition duration-300">
                Contact
              </p>
              <p
                className="text-muted-foreground text-sm font-medium hover:text-foreground cursor-pointer transition duration-300">
                Privacy
              </p>
              <p
                className="text-muted-foreground text-sm font-medium hover:text-foreground cursor-pointer transition duration-300">
                Terms & Conditions
              </p>
            </nav>
          </section>
        </div>
      </footer>
      <section className="bg-black border-t-2 p-4">
        <div className="md:px-20 container flex max-md:flex-col max-md:gap-4 items-center justify-between">
          <div className="text-sm text-muted-foreground max-md:text-center max-md:text-balance">
            Build by <a href={siteConfig.links.creatorGithubUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 font-medium">Moussa</a>.
            The source code is available on <a href={siteConfig.links.repositoryUrl} target="_blank" rel="noreferrer" className="underline underline-offset-4 font-medium">GitHub</a>.
          </div>
          <div className="max-md:hidden">
            <Link
              href={siteConfig.links.repositoryUrl}
              target="_blank" rel="noreferrer" className={cn(buttonVariants({variant: "outline", size: "sm"}))}
            >
              <Star className="size-4 fill-current" /> Star on GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
