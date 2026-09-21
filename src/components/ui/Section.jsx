import { cn } from "@/utils/cn";

/**
 * Global Section Component
 * Bound directly to the global CSS section tokens (--section-padding-y).
 * Guarantees uniform vertical top-to-bottom spacing throughout the entire website.
 */
export default function Section({
  children,
  className = "",
  size = "default", // "default" | "sm" | "none"
  as: Component = "section",
  ...props
}) {
  const paddingClass =
    size === "sm"
      ? "section-padding-sm"
      : size === "none"
      ? "py-0"
      : "section-padding";

  return (
    <Component className={cn(paddingClass, className)} {...props}>
      {children}
    </Component>
  );
}
