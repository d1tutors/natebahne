import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--tan)' }}>
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
