import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
 
// RootLayout根组件类似index.html，页面展示
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}