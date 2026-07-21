import './globals.css';

export const metadata = {
  title: 'KivoPlan | Your AI guide for life’s biggest decisions',
  description: 'Create personalized AI roadmaps for career, moving, money, wellness, travel, and business decisions.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
