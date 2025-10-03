import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-neutral-900 px-2 py-2 text-white">
      <div className="flex gap-3">
        <div className="">  <Sidebar /></div>
        <div className=""></div>
      </div>
    </div>
  );
}
