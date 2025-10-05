import BottomAppBar from "@/components/BottomAppBar";
import Info from "@/components/Info";
import ProjectCard from "@/components/ProjectCard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-neutral-900 px-2 py-2 text-white overflow-hidden ">
      <div className="p-3"></div>
      <div className="flex gap-3 w-full flex-1 min-h-0">
        <div className=" ">  <Sidebar /></div>
        <div className="flex-1 w-full ">
          <div className="flex flex-col mt-9 h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-neutral-800 rounded-2xl">
            <div className="flex flex-col items-center p-4">
              <Info />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 mb-6 justify-items-center">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomAppBar />
    </div>
  );
}
