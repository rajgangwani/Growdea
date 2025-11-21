import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-4 left-0 w-full z-50 flex justify-center pointer-events-none">
        <div
          className="
            pointer-events-auto
            max-w-6xl w-[90%]
            bg-black/40 backdrop-blur-xl
            border border-white/10
            rounded-2xl px-6 py-3
            flex items-center justify-between
          "
        >
          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img src={logo} className="h-10 object-contain" alt="Growdea Logo" />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-10 text-sm text-gray-300">
            {["Home", "Analogue", "R&D", "Publications", "Careers"].map((item) => (
              <li key={item} className="cursor-pointer hover:text-white">
                {item}
              </li>
            ))}
          </ul>

          {/* DESKTOP BUTTON */}
          <button className="hidden md:block px-5 py-2 rounded-lg bg-gradient-to-r from-teal-400 to-[#7B5CFF] text-black font-semibold">
            Request Demo
          </button>

          {/* MOBILE HAMBURGER ICON */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10"
            onClick={() => setOpen(!open)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[3px] bg-white rounded-full"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-[3px] bg-white rounded-full"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[3px] bg-white rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDE DOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="
              md:hidden
              fixed top-[90px] left-1/2 -translate-x-1/2
              w-[90%] bg-black/70 backdrop-blur-xl
              border border-white/10 rounded-2xl
              p-6 flex flex-col gap-4 text-white z-40
            "
          >
            {["Home", "Analogue", "R&D", "Publications", "Careers"].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                className="py-3 px-3 rounded-lg hover:bg-white/10 cursor-pointer text-lg"
                onClick={() => setOpen(false)}
              >
                {item}
              </motion.div>
            ))}

            <button className="mt-3 w-full px-5 py-3 rounded-lg bg-gradient-to-r from-teal-400 to-[#7B5CFF] text-black font-semibold">
              Request Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
