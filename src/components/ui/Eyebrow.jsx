import { cn } from "@/utils/cn";

/**
 * Global Eyebrow Component
 * Renders the small uppercase category label with the signature golden dash line
 * as seen in the reference UI ("ABOUT US", "EXPLORE BY LOCATION", "GET STARTED").
 */
export default function Eyebrow({ children, className = "", line = true, ...props }) {
  return (
    <div className={cn("eyebrow", className)} {...props}>
      {line && <span className="eyebrow-line" />}
      <span>{children}</span>
    </div>
  );
}
