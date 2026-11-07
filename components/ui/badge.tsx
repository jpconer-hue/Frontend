import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

export function Badge({
  className = "",
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
        variant === "secondary"
          ? "bg-secondary text-secondary-foreground"
          : variant === "outline"
          ? "border"
          : "bg-primary text-primary-foreground"
      } ${className}`}
      {...props}
    />
  );
}