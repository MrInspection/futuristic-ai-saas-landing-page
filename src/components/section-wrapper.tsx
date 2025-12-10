import { PlusIcon } from "lucide-react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionWrapperProps = HTMLAttributes<HTMLDivElement> & {
  hasBorderTop?: boolean;
};

export function SectionWrapperBorder({
  children,
  className,
  hasBorderTop,
  ...props
}: SectionWrapperProps) {
  return (
    <div
      className={cn("relative border-x", hasBorderTop && "border-t", className)}
      {...props}
    >
      {hasBorderTop && (
        <>
          <div className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-0 bg-background">
            <PlusIcon className="size-6" />
          </div>
          <div className="-translate-y-1/2 absolute top-0 right-0 translate-x-1/2 bg-background">
            <PlusIcon className="size-6" />
          </div>
        </>
      )}
      {children}
    </div>
  );
}

export function SectionWrapperContent({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "container overflow-hidden py-24 md:py-36 lg:py-48",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
