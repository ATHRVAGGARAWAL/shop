import * as React from "react"
import { cn } from "@/lib/utils"

const Section = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
    <section
        ref={ref}
        className={cn("py-12 md:py-16 lg:py-20", className)}
        {...props}
    />
))
Section.displayName = "Section"

export { Section }
