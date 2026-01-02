"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  description?: string
  action: {
    text: string
    href: string
    variant?: "default" | "glow"
  }
  withGlow?: boolean
  className?: string
}

export function CTASection({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("py-16 md:py-24 relative overflow-hidden", className)}>
      <div className="container-custom relative z-10">
        <div className="relative rounded-3xl border border-border bg-gradient-to-br from-card via-card to-muted p-8 md:p-12 lg:p-16 text-center shadow-lg overflow-hidden">
          {/* Badge */}
          {badge && (
            <Badge
              variant="outline"
              className="mb-6 animate-fade-in-up opacity-0 border-primary/30 text-primary"
            >
              {badge.text}
            </Badge>
          )}

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gradient mb-4 animate-fade-in-up opacity-0 delay-100">
            {title}
          </h2>

          {/* Description */}
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0 delay-200">
              {description}
            </p>
          )}

          {/* Action Button */}
          <Link to={action.href} className="animate-fade-in-up opacity-0 delay-300 inline-block">
            <Button 
              className={cn(
                "btn-hero",
                action.variant === "glow" && "shadow-glow"
              )}
            >
              {action.text}
            </Button>
          </Link>

          {/* Glow Effect */}
          {withGlow && (
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
              <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[200%] aspect-square bg-gradient-to-b from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
