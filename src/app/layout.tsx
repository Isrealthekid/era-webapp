import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "ERA - Engineering Resources Academy",
  description: "An organisation dedicated to graduate training and employment opportunities — bridging the gap between university and industry, one engineer at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
