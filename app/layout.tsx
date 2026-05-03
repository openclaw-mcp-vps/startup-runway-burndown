import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Runway Calculator — Startup Runway & Burndown Modeling",
  description: "Calculate your startup runway with growth scenario modeling. Interactive burndown charts, hiring plans, and revenue projections for founders and CFOs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="749b5a84-2c7e-4baa-8898-5de158647bb8"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
