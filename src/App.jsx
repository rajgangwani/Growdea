// src/App.jsx
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />

      {/* hero immediately after nav - hero handles its own padding/offset */}
      <Hero />

      <Technology />
      <Footer />
    </div>
  );
}
