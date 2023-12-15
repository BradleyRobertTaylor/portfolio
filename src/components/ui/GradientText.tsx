export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-500 dark:from-neutral-600 dark:via-neutral-500 dark:to-neutral-300 text-transparent bg-clip-text">
      {children}
    </span>
  );
}
