import {ComponentPropsWithoutRef} from "react";
import {cn} from "@/lib/utils";
import {cva, VariantProps} from "class-variance-authority";

const globeVariants = cva(
  "bg-gradient-to-b to-gray-950 size-8 rounded-full rotate-135",
  {
    variants: {
      color: {
        violet: "from-violet-400",
        teal: "from-teal-400",
        fuchsia: "from-fuchsia-400"
      },
      size: {
        sm: "size-4",
        md: "size-6",
        lg: "size-8"
      }
    },
    defaultVariants: {
      size: "lg",
      color: "violet"
    }
  }
)

type MiniGlobeProps = ComponentPropsWithoutRef<"div"> & VariantProps<typeof globeVariants> & {}

export function MiniGlobe({className, color, size, ...props}: MiniGlobeProps) {
  return (
    <div className={cn(globeVariants({color, size, className}))} {...props} />
  )
}
