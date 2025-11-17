import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "LaunchGrid | Freelance Web Development",
  description: "We design and build modern, high-performance websites for startups and small businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
