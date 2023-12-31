import AuthProvider from "@/components/AuthProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { cn } from "@/libs/utils";
import Header from "@/components/Header";
import StateProvider from "@/components/StateProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotipulse",
  description: "A web app to see your personal Spotify data. Cloned the spotify app of Brittany Chiang.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(manrope.className, "bg-black text-white")}>
        <StateProvider>
          <AuthProvider>
            <Header />
            {children}
          </AuthProvider>
        </StateProvider>
      </body>
    </html>
  );
}
