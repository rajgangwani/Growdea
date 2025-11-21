import { motion } from "framer-motion";

const features = [
  {
    title: "Insilico Molecular Simulation",
    desc: "High-precision insilico-accelerated molecular dynamics that outperform traditional CPU simulations.",
    icon: "🧬",
  },
  {
    title: "AI-Driven Drug Ranking",
    desc: "Hybrid ML + physics-based scoring delivers reproducible candidate rankings with lab-grade confidence.",
    icon: "⚡",
  },
  {
    title: "Structure Intelligence",
    desc: "Deep-learning models optimized for protein–ligand interactions and interaction-pattern prediction.",
    icon: "🔬",
  },
];

export default function Technology() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#04060a] via-[#05070d] to-black text-white overflow-hidden">      
      {/* Background gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700/20 via-teal-500/10 to-black opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14">
          <span className="text-teal-400">Insilico Technology</span> that Powers Discovery
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-teal-500/20"
            >
              <div className="text-5xl mb-6">{f.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-300 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
