import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Flight Frontend",
  description: "Next.js frontend for Spring Boot flights API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}