import BlogCard from "@/components/BlogCard";
import BottomAppBar from "@/components/BottomAppBar";
import Info from "@/components/Info";
import ProjectCard from "@/components/ProjectCard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-neutral-900 px-2 py-2 text-white overflow-hidden border">
      <div className="p-3"></div>
      <div className="flex gap-3 w-full flex-1 min-h-0 border ">
        <div className="border border-amber-200">  <Sidebar /></div>
        <div className="flex-1 w-full border border-red-500 ">
          <div className="flex flex-col mt-9 h-[calc(100vh-8rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-neutral-800 rounded-2xl">
            <div className="flex flex-col items-center p-4 ">
              <Info />
              <div className="flex flex-col">
                <div className="flex items-center text-lg px-2 py-2 font-semibold border-b border-neutral-700">
                  PROJECTS
                </div>
                <div className=" border grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6  justify-center items-center ">
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </div>
                <div className="flex items-center text-lg px-2 py-2 font-semibold border-b border-neutral-700">
                  BLOG
                </div>
                <div className="flex flex-col gap-6 mt-4 mb-6 items-start px-2 py-2 " >
                  <BlogCard />
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomAppBar />
    </div>
  );
}
