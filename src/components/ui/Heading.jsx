import { cn } from "@/utils/cn";

/**
 * Global Heading Component
 * Guaranteed typography hierarchy across the entire website.
 * Uses fluid font-size tokens defined centrally in globals.css.
 */
export default function Heading({
  as: Tag = "h2",
  children,
  className = "",
  ...props
}) {
  return (
    <Tag className={cn(Tag, className)} {...props}>
      {children}
    </Tag>
  );
}
