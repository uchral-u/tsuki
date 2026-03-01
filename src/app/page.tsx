import Image from "next/image";
import { Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="bg-black text-white min-h-screen font-sans scroll-smooth">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md flex justify-between items-center px-10 py-6 border-b border-neutral-800">
        <h1 className="text-xl font-bold tracking-widest text-violet-400">
          ⋆. 𐙚˚࿔ Tsuki 𝜗𝜚˚⋆
        </h1>

        <div className="hidden md:flex gap-8 text-sm text-violet-300">
          <a
            href="#home"
            className="hover:text-violet-400 transition cursor-pointer"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-violet-400 transition cursor-pointer"
          >
            About
          </a>
          <a
            href="#stats"
            className="hover:text-violet-400 transition cursor-pointer"
          >
            Stats
          </a>
          <a
            href="#contact"
            className="hover:text-violet-400 transition cursor-pointer"
          >
            Contact
          </a>
        </div>
      </nav>

      {/* --- HOME SECTION --- */}
      <section
        id="home"
        className="px-10 py-32 grid md:grid-cols-2 gap-10 items-center"
      >
        <div className="space-y-6">
          <p className="text-violet-700 tracking-widest text-sm">
            ˚⋆𐙚｡INTRODUTION𖦹.ᡣ𐭩˚
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
            FRONTEND <br /> DEVELOPER
          </h2>

          <p className="text-neutral-300 text-lg leading-relaxed">
            Hello I'm Nandin but I like to be called Tsuki. I'm 15 years old.
            I'm learning to become a frontend developer.
          </p>

          <a
            href="mailto:tsukikotsukasa200@gmail.com"
            className="inline-flex items-center gap-2 bg-violet-100 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            <Mail size={18} />
            Contact Me ⋆.ೃ࿔🌸*:･
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-80 h-80 bg-violet-400 rounded-full blur-3xl opacity-20"></div>

          <Image
            src="/me2.jpg"
            alt="Tsuki"
            width={350}
            height={450}
            className="relative z-10 rounded-3xl object-cover"
          />
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section
        id="stats"
        className="px-10 py-14 border-t border-b border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        <Stat number="4+" label="Month Learning🎀" />
        <Stat number="∞" label="Motivation🎀" />
        <Stat number="24/7" label="Thinking About Code🎀" />
        <Stat number="100%" label="Trying My Best🎀" />
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="px-10 py-24 grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <p className="text-violet-400 tracking-widest text-sm mb-3">
            ABOUT ME
          </p>

          <h3 className="text-3xl font-bold mb-6">
            A Girl With Big Engineer Dreams 🎀
          </h3>

          <p className="text-neutral-300 leading-relaxed mb-8">
            Hello I'm 15 year old girl who is trying to be some kind of engineer
            and I'm trying my best to learn codes 🎀.
          </p>

          <p className="text-violet-300 font-semibold mb-4">I learned:</p>

          <div className="flex flex-wrap gap-4">
            <Ribbon text="HTML 🎀" />
            <Ribbon text="CSS 🎀" />
            <Ribbon text="TailwindCSS 🎀" />
            <Ribbon text="JavaScript 🎀" />
            <Ribbon text="React 🎀" />
            <Ribbon text="Next.js 🎀" />
            <Ribbon text="TypeScript 🎀" />
          </div>
        </div>

        <div className="relative flex flex-col items-center">
          <p className="mb-4">────୨ৎ────</p>
          <div className="relative flex justify-center w-full">
            <div className="bg-violet-200 w-72 h-96 rounded-3xl absolute"></div>
            <Image
              src="/me.png"
              alt="Tsuki"
              width={300}
              height={400}
              className="relative z-10 object-cover rounded-3xl"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 p-8 col-span-full">
          <div className="animate-bounce-slow bg-zinc-900 border-2 border-pink-400 p-6 rounded-2xl shadow-[0_0_20px_rgba(244,114,182,0.3)] max-w-xs text-center">
            <div className="text-4xl mb-2">✨</div>
            <h3 className="text-pink-300 font-mono font-bold text-lg">
              Currently Coding...
            </h3>
            <p className="text-zinc-400 text-sm mt-2">
              Turning caffeine into{" "}
              <span className="text-blue-400">JavaScript</span> magic.
            </p>

            <div className="w-full bg-zinc-800 h-3 rounded-full mt-4 overflow-hidden border border-zinc-700">
              <div className="bg-pink-500 h-full w-[75%] animate-pulse"></div>
            </div>
            <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">
              Brain Power: 75%
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT/FOOTER SECTION --- */}
      <footer
        id="contact"
        className="relative py-24 text-center border-t border-neutral-800 overflow-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-r from-emerald-500/10 via-transparent to-emerald-500/10 blur-3xl"></div>

        <h4 className="text-4xl font-extrabold tracking-widest mb-6">
          THIS IS JUST THE BEGINNING. ˚˖𓍢🌷✧˚.🎀⋆
        </h4>

        <p className="text-neutral-400 max-w-xl mx-auto">
          I am still learning. Still building. Still dreaming. One day I will
          become the engineer I imagined 🎀.
        </p>

        <p className="mt-10 text-sm text-neutral-600">
          © 2026 Tsuki — Built with ambition and late night coding(but really
          tho).
        </p>
      </footer>
    </main>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <h5 className="text-3xl font-bold text-violet-400">{number}</h5>
      <p className="text-neutral-400 text-sm">{label}</p>
    </div>
  );
}

function Ribbon({ text }: { text: string }) {
  return (
    <div className="relative bg-violet-400 text-black px-6 py-2 font-semibold rounded-lg shadow-lg">
      <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-black rotate-45"></span>
      {text}
    </div>
  );
}
