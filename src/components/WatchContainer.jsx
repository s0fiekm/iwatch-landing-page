import Image from "next/image";
import navy from "../img/navy.png";
import mint from "../img/mint.png";
import ocean from "../img/ocean.png";

const watchcontainer = () => {
  return (
    <div className="flex flex-row justify-end gap-14">
      <div className=" align-items: flex-end relative bg-[#6D7688] w-[150px] h-[100px] rounded-3xl flex flex-row ">
        <Image
          src={navy}
          width={150}
          height={150}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className=" align-items: flex-end relative bg-[#CFDFE9] w-[150px] h-[100px] rounded-3xl flex flex-row">
        <Image
          src={ocean}
          class="absolute -top-10 left-1/2 transform -translate-x-1/2"
        />
      </div>
      <div className=" align-items: flex-end relative bg-[#6ADDCC] w-[150px] h-[100px] rounded-3xl flex flex-row ">
        <Image
          src={mint}
          width={150}
          height={150}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2"
        />
      </div>
    </div>
  );
};

export default watchcontainer;
