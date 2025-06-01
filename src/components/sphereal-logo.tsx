import LogoImage from "@/assets/images/sphereal-logo.svg?url"
import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

type SpherealLogoProps = ComponentPropsWithoutRef<"div"> & {}

export function SpherealLogo({className, style, ...props}: SpherealLogoProps) {
  return (
    <div
      className={cn("size-10 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))]", className)} {...props}
      style={{
        maskImage: `url(${LogoImage.src})`,
        maskSize: "contain",
        ...style,
      }}
    />
  )
}
