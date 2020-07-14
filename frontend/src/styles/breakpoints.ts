export type Breakpoints = "sm" | "md" | "lg" | "xl";

export const measures: Record<Breakpoints, number> = {
  lg: 1024,
  md: 768,
  sm: 0,
  xl: 1366,
};

export const rules: Record<
  Breakpoints | "smOnly" | "mdOnly" | "lgOnly" | "mobileSize",
  string
> = {
  lg: `(min-width: ${measures.lg}px)`,
  lgOnly: `(min-width: ${measures.lg}px) and (max-width: ${measures.xl - 1}px)`,
  md: `(min-width: ${measures.md}px)`,
  mdOnly: `(min-width: ${measures.md}px) and (max-width: ${measures.lg - 1}px)`,
  mobileSize: `(max-width: ${measures.lg - 1}px)`,
  sm: `(min-width: ${measures.sm}px)`,
  smOnly: `(max-width: ${measures.md - 1}px)`,
  xl: `(min-width: ${measures.xl}px)`,
};