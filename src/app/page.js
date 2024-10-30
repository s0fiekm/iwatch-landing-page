import Navigation from "@/components/Navigation";
import HeroContainer from "@/components/HeroContainer";
import Button from "@/components/Button";
import WatchContainer from "@/components/WatchContainer";

export default function Home() {
  return (
    <div className="pl-10 pr-10 flex flex-col justify-around bg-gradient-to-r from-[#C8DCE5] to-[#B6CCDA] h-screen">
      <Navigation />
      <HeroContainer />
      <Button />
      <WatchContainer />
    </div>
  );
}
