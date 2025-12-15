import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheShift from "@/components/TheShift";
import Features from "@/components/Features";
import ProductDetails from "@/components/ProductDetails";
import Trust from "@/components/Trust";
import FounderStory from "@/components/FounderStory";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-sky-blue selection:text-white">
      <Navbar />
      <Hero />
      <TheShift />
      <Features />
      <ProductDetails />
      <Trust />
      <FounderStory />
      <Comparison />
      <Footer />
    </main>
  );
}
