import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-sky-blue selection:text-white">
      <Navbar />
      <Hero />
      <Features />
      <Comparison />
      <Footer />
    </main>
  );
}
