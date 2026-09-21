import Link from "next/link";
import { cn } from "@/utils/cn";

/**
 * Global Button Component
 * Bound to CSS variables in globals.css (--gold, --primary, --radius-button).
 * Changing colors in globals.css automatically updates every button.
 */
export default function Button({
  children,
  href,
  variant = "gold", // "gold" | "blue" | "outline-gold" | "outline-blue"
  size = "md", // "sm" | "md" | "lg"
  withArrow = false,
  className = "",
  type = "button",
  ...props
}) {
  const variantClasses = {
    gold: "btn-gold",
    blue: "btn-blue",
    "outline-gold": "btn-outline-gold",
    "outline-blue": "btn-outline-blue",
  };

  const sizeClasses = {
    sm: "text-xs px-3.5 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-3.5",
  };

  const buttonClasses = cn(
    "btn",
    variantClasses[variant] || variantClasses.gold,
    sizeClasses[size] || sizeClasses.md,
    className
  );

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <i className="fa-solid fa-arrow-right text-xs ml-1" aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={buttonClasses} {...props}>
      {content}
    </button>
  );
}
