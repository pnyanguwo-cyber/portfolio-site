interface TechStackBadgeProps {
  name: string;
}

export function TechStackBadge({ name }: TechStackBadgeProps) {
  return (
    <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-zinc-800 dark:text-zinc-200">
      {name}
    </span>
  );
}