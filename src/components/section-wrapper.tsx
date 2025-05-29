import {HTMLAttributes} from "react";
import {cn} from "@/lib/utils";

export function SectionWrapperBorder({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("border-x", className)} {...props}>
      {children}
    </div>
  )
}

export function SectionWrapperContent({children, className, ...props}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("container py-24 md:py-36 lg:py-48 overflow-hidden", className)} {...props}>
      {children}
    </div>
  )
}
