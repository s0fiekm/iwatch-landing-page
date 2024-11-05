import Navigation from "@/components/Navigation";
import HeroContainer from "@/components/HeroContainer";
import Button from "@/components/Button";
import WatchContainer from "@/components/WatchContainer";

export default function Home() {
  return (
    <div className="pl-10 pr-10 flex flex-col justify-around bg-custom h-screen">
      <Navigation />
      <HeroContainer />
      <Button />
      <WatchContainer />
    </div>
  );
}
