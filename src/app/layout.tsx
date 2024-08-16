"use client";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className="flex min-h-screen bg-slate-100">
        {children}
      </body>
    </html>
  );
}
