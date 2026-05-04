import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import MyProjects from "@/components/my-projects";
import MyStack from "@/components/my-stack";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <MyStack />
      <MyProjects />
      <Contact />
    </main>
  );
}
