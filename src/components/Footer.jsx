export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-teal-400 mb-2">
          Growdea Technologies
        </h2>
        <p className="text-gray-400">
          Accelerating drug discovery with AI, insilico simulations, and molecular intelligence.
        </p>

        <div className="mt-6 flex justify-center space-x-6 text-gray-400">
          <a href="#" className="hover:text-teal-400">Privacy</a>
          <a href="#" className="hover:text-teal-400">Terms</a>
          <a href="#" className="hover:text-teal-400">Contact</a>
        </div>

        <p className="text-gray-600 text-sm mt-8">
          © {new Date().getFullYear()} Growdea Technologies. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
