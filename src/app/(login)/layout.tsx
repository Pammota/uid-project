"use client";
import "./globals.css";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen w-full gap-4 bg-gray-200 items-center justify-between p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
