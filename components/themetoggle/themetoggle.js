'use client';

export default function ThemeToggle() {
  return (
    <button
      onClick={() => {
        let bodyDataset = document.body.dataset;
        bodyDataset.theme = bodyDataset.theme === 'light' ? 'dark' : 'light';
      }}
    >
      Change Theme
    </button>
  );
}
