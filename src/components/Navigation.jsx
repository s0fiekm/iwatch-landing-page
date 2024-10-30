import Headertxt from "./Headertxt";
import { SiApple } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag } from "react-icons/fi";

const navigation = () => {
  return (
    <nav className="flex flex-direction:row justify-between items-center ">
      <div>
        <SiApple className="text-5xl text-white" />
      </div>
      <ul className="flex flex-direction: row; gap-36">
        <Headertxt headertxt="Mac" />
        <Headertxt headertxt="iPhone" />
        <Headertxt headertxt="iPad" />
        <Headertxt headertxt="iWatch" />
        <Headertxt headertxt="Support" />
      </ul>
      <div className="flex flex-direction:row gap-4 ">
        <IoSearchOutline className="text-white text-2xl" />
        <div class="h-6 w-px bg-white"></div>
        <FiShoppingBag className="text-white text-2xl" />
      </div>
    </nav>
  );
};

export default navigation;
