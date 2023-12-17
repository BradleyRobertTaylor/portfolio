export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-neutral-400 dark:bg-gradient-to-r dark:from-zinc-600 dark:via-zinc-400 dark:to-zinc-600 dark:text-transparent dark:bg-clip-text">
      {children}
    </span>
  );
}
