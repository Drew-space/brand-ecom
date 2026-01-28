import Image from "next/image";
import Topbar from "@/app/pages/Topbar";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";
import Collection from "./pages/Collection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Collection />
    </main>
  );
}
