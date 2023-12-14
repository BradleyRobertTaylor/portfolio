export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-neutral-300 via-neutral-500 to-neutral-600 inline-block text-transparent bg-clip-text">
      {children}
    </span>
  );
}
