import BottomAppBar from "@/components/BottomAppBar";
import Info from "@/components/Info";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-screen bg-neutral-900 px-2 py-2 text-white">
      <div className="flex gap-3 w-full">
        <div className=" ">  <Sidebar /></div>
        <div className="flex-1 w-full">
          <Info />
        </div>
      </div>
      <BottomAppBar />
    </div>
  );
}
