import Image from "next/image";
import navy from "../img/navy.png";
import ColorIndicator from "./ColorIndicator";

const herocontainer = () => {
  return (
    <div className="justify-between flex flex-row items-center">
      <div className="text-6xl">
        <h1>
          <span className="font-bold">The Perfect Moment</span>
          <br /> Between Past And <br />
          Future.
        </h1>
      </div>
      <div className=" flex flex-row items-center ">
        <Image src={navy} width={500} height={500} alt="" />
        <ColorIndicator />
      </div>
    </div>
  );
};

export default herocontainer;
