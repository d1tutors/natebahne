import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F1E6]">
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
