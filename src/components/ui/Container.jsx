import { cn } from "@/utils/cn";

/**
 * Global Container Component
 * Bound directly to the global CSS container tokens (--container-max-width).
 * Consistent left & right horizontal margins and responsive padding across all devices.
 */
export default function Container({ children, className = "", ...props }) {
  return (
    <div className={cn("global-container", className)} {...props}>
      {children}
    </div>
  );
}
