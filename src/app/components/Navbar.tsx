import { Download } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-neutral-800">
        <h1 className="text-xl font-bold tracking-widest text-emerald-400">
          TSUKI DEV
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-neutral-300">
          <a className="hover:text-emerald-400 transition">Home</a>
          <a className="hover:text-emerald-400 transition">About</a>
          <a className="hover:text-emerald-400 transition">Projects</a>
          <a className="hover:text-emerald-400 transition">Contact</a>
        </div>

        <button className="flex items-center gap-2 bg-emerald-400 text-black px-4 py-2 rounded-full font-medium hover:scale-105 transition">
          <Download size={16} />
          Download CV
        </button>
      </nav>
  );
};

export default Navbar;
