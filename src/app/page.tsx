import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="section-container text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} CUIPENGZHI. 保留所有权利.
          </p>
          <p className="text-xs mt-2">
            使用 Next.js + Tailwind CSS 构建
          </p>
        </div>
      </footer>
    </div>
  );
}
