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
        <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 md:p-12 lg:p-16 text-center overflow-hidden"
          style={{
            boxShadow: '0 -16px 128px 0 hsla(var(--secondary) / 0.3) inset, 0 -16px 32px 0 hsla(var(--primary) / 0.2) inset, 0 8px 32px -8px hsla(var(--primary) / 0.3)'
          }}
        >
          {/* Badge */}
          {badge && (
            <Badge
              variant="outline"
              className="mb-6 animate-fade-in-up opacity-0 border-secondary/50 text-secondary bg-secondary/10"
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
                action.variant === "glow" && "shadow-lg"
              )}
            >
              {action.text}
            </Button>
          </Link>

          {/* Glow Effect - Blue and Gold Blend */}
          {withGlow && (
            <>
              <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-secondary/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-gradient-to-r from-primary/10 via-secondary/15 to-primary/10 blur-2xl pointer-events-none" />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
