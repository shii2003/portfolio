import BlogCard from "@/components/BlogCard";
import BottomAppBar from "@/components/BottomAppBar";
import DesktopHomePage from "@/components/DesktopHomePage";
import Info from "@/components/Info";
import MobileHomePage from "@/components/MobileHomePage";
import ProjectCard from "@/components/ProjectCard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-neutral-900 px-2 py-2 text-white w-full">
      <div className='hidden md:block'>
        <DesktopHomePage />
      </div>
      <div className='block md:hidden'>
        <MobileHomePage />
      </div>
    </div>
  );
}
