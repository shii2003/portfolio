import DesktopHomePage from "@/components/DesktopHomePage";
import MobileHomePage from "@/components/MobileHomePage";

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
