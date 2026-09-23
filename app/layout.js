import Link from "next/link";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "My Diary — Sushil Narang",
    template: "%s · My Diary",
  },
  description:
    "My Diary is where I, Sushil Narang, an educator at Chitkara University, write about teaching Artificial Intelligence — classroom notes, course reflections and ideas on AI, machine learning and GenAI.",
  keywords: [
    "Sushil Narang",
    "My Diary",
    "AI educator",
    "Chitkara University",
    "artificial intelligence courses",
    "machine learning blog",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
