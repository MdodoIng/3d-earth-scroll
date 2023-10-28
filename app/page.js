"use client";
import Image from "next/image";
import SmoothScroll from "@/components/SmoothScroll";
import Projects from "@/components/Projects";
import dynamic from "next/dynamic";

const Earth = dynamic(() => import("@/components/Earth"), {
  ssr: false,
  loading: () => (
    <Image
      src="/assets/placeholder.png"
      width={100}
      height={200}
      className="h-full object-contain"
    />
  ),
});

export default function Home() {
  return (
    <SmoothScroll>
      <main className="h-[60vh] bg-[#0f0f0f] mt-[100vh] mb-[100vh] relative flex items-center justify-center">
        <Earth />
        <Projects />
      </main>
    </SmoothScroll>
  );
}
