export const metadata = {
  metadataBase: new URL('https://www.fildev.io'),  // Replace with your production URL when deploying
  title: 'FIL Dev Summit',
  description: 'Official site for the Filecoin Dev Summit 2023',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
