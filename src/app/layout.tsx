"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar/NavBar";
import Loader from "@/components/common/loader";
import { ThemeProvider } from "@/components/theme/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const renderContent = (): React.ReactNode => {
    if (loading) {
      return <Loader />;
    }

    return (
      <>
        <NavBar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-hidden">{children}</main>
        </div>
      </>
    );
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="h-screen overflow-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-screen flex flex-col">{renderContent()}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
