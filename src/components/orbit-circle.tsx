import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";

type OrbitCircleProps = ComponentPropsWithoutRef<"div"> & {}

export function OrbitCircle({className, ...props}: OrbitCircleProps) {
  return (
    <div className={cn("absolute-center size-[200px] rounded-full isolate -z-10 border border-muted", className)} {...props} />
  )
}
