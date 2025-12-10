"use client";

import Link from "next/link";
import { useState } from "react";
import { OrbitCircle } from "@/components/orbit-circle";
import { SpherealLogo } from "@/components/sphereal-logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAVIGATION_CONFIG = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
] satisfies Array<{ name: string; href: string }>;

export function SiteHeader() {
  const [openMobileNavigationMenu, setOpenMobileNavigationMenu] =
    useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <section className="container flex h-18 items-center justify-between">
          <Link href="/" className="flex items-center gap-4">
            <SpherealLogo />
            <p className="font-bold text-2xl">sphereal.ai</p>
          </Link>
          <div className="h-full max-lg:hidden">
            <nav className="h-full">
              {NAVIGATION_CONFIG.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative inline-flex h-full items-center px-10 font-bold text-muted-foreground text-xs uppercase tracking-widest before:absolute before:bottom-0 before:left-0 before:h-2 before:w-px before:bg-border before:content-[''] after:absolute after:right-0 after:bottom-0 after:h-2 after:w-px after:bg-border after:content-[''] hover:bg-muted/40"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="lg" className="max-lg:hidden">
              Log In
            </Button>
            <Button variant="rainbow" size="lg" className="max-lg:hidden">
              Sign Up
            </Button>
            <button
              className="relative size-10 cursor-pointer rounded-lg border-3 border-transparent [background:linear-gradient(var(--background),var(--background))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box] lg:hidden"
              aria-label="Menu"
              onClick={() => setOpenMobileNavigationMenu((open) => !open)}
            >
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <div
                  className={cn(
                    "-translate-y-1 h-0.5 w-4 bg-gray-100",
                    openMobileNavigationMenu &&
                      "translate-y-0 rotate-45 transition duration-300",
                  )}
                />
              </div>
              <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2">
                <div
                  className={cn(
                    "h-0.5 w-4 translate-y-1 bg-gray-100",
                    openMobileNavigationMenu &&
                      "-rotate-45 translate-y-0 transition duration-300",
                  )}
                />
              </div>
            </button>
          </div>
        </section>
      </header>
      {openMobileNavigationMenu && (
        <section className="fixed top-8 right-0 bottom-0 left-0 z-40 overflow-hidden bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div>
            <OrbitCircle />
            <OrbitCircle className="size-[350px]" />
            <OrbitCircle className="size-[500px]" />
            <OrbitCircle className="size-[650px]" />
            <OrbitCircle className="size-[800px]" />
          </div>
          <div className="container relative h-full">
            <nav className="flex h-full flex-col items-center justify-center gap-4 py-10">
              {NAVIGATION_CONFIG.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="h-10 font-bold text-muted-foreground text-xs uppercase tracking-widest"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" size="lg" className="w-full max-w-xs">
                Log In
              </Button>
              <Button variant="rainbow" size="lg" className="w-full max-w-xs">
                Sign Up
              </Button>
            </nav>
          </div>
        </section>
      )}
    </>
  );
}
