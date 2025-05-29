"use client"

import logoImage from "@/assets/images/sphereal-logo.svg?url"
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {useState} from "react";
import {cn} from "@/lib/utils";
import {OrbitCircle} from "@/components/orbit-circle";

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
] satisfies Array<{ name: string, href: string }>

export function SiteHeader() {
  const [openMobileNavigationMenu, setOpenMobileNavigationMenu] = useState(false)

  return (
    <>
      <header
        className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <section className="container flex items-center justify-between h-18">
          <Link href="/" className="flex items-center gap-4">
            <div
              className="size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]"
              style={{
                maskImage: `url(${logoImage.src})`,
                maskSize: "contain"
              }}
            />
            <p className="font-bold text-2xl">sphereal.ai</p>
          </Link>
          <div className="h-full max-lg:hidden">
            <nav className="h-full">
              {NAVIGATION_CONFIG.map((item) => (
                <Link
                  key={item.name} href={item.href}
                  className="h-full px-10 relative font-bold text-xs tracking-widest text-muted-foreground uppercase inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-border before:left-0 after:content-[''] after:absolute after:bottom-0 after:h-2 after:w-px after:bg-border after:right-0 hover:bg-muted/40"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="lg" className="max-lg:hidden">Log In</Button>
            <Button variant="rainbow" size="lg" className="max-lg:hidden">Sign Up</Button>
            <button
              className="size-10 rounded-lg border-3 border-transparent relative lg:hidden
            cursor-pointer [background:linear-gradient(var(--background),var(--background))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]"
              aria-label="Menu" onClick={() => setOpenMobileNavigationMenu((open) => !open)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className={cn("w-4 h-0.5 bg-gray-100 -translate-y-1", openMobileNavigationMenu && "translate-y-0 rotate-45 transition duration-300")}/>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className={cn("w-4 h-0.5 bg-gray-100 translate-y-1", openMobileNavigationMenu && "translate-y-0 -rotate-45 transition duration-300")}/>
              </div>
            </button>
          </div>
        </section>
      </header>
      {openMobileNavigationMenu && (
        <section
          className="fixed top-8 left-0 z-40 bottom-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 overflow-hidden">
          <div>
            <OrbitCircle/>
            <OrbitCircle className="size-[350px]"/>
            <OrbitCircle className="size-[500px]"/>
            <OrbitCircle className="size-[650px]"/>
            <OrbitCircle className="size-[800px]"/>
          </div>
          <div className="container h-full relative">
            <nav className="h-full flex flex-col gap-4 items-center py-10 justify-center">
              {NAVIGATION_CONFIG.map((item) => (
                <Link
                  key={item.name} href={item.href}
                  className="uppercase font-bold text-xs tracking-widest text-muted-foreground h-10"
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" size="lg" className="w-full max-w-xs">Log In</Button>
              <Button variant="rainbow" size="lg" className="w-full max-w-xs">Sign Up</Button>
            </nav>
          </div>
        </section>
      )}
    </>
  )
}
