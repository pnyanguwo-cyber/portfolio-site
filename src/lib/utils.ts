export function cn(
  ...inputs: Array<string | number | boolean | null | undefined | Record<string, boolean>>
): string {
  return inputs.filter(Boolean).join(" ");
}

export function truncate(str: string, length: number): string {
  return str.length > length ? str.slice(0, length) + "..." : str;
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return d.toLocaleDateString("en-ZW", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function classNames(...classes: Array<string | undefined>): string {
  return classes.filter(Boolean).join(" ");
}