import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type OrbitCircleProps = ComponentPropsWithoutRef<"div"> & {};

export function OrbitCircle({ className, ...props }: OrbitCircleProps) {
  return (
    <div
      className={cn(
        "absolute-center -z-10 isolate size-[200px] rounded-full border border-muted",
        className,
      )}
      {...props}
    />
  );
}
