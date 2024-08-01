import { FaUserLarge } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";

import Social from "@/components/sociel/Sociel";


const ContacLeft = () => {
  return (
    <div id="touch">
    <div className="text-left my-5">
      <h3>
          Get in touch 
      </h3>
      <p className="my-5">
          If you have any questions or proposals, you can simply write to us.<br/> We will answer you as soon as possible.
      </p>
  </div>
  <div className="text-left flex justify-start justify-items-center my-5">
    <FaUserLarge   />
      <div  className="head ms-1">
          <span><b>Name :</b></span>
          <span>Amine Triki</span>
      </div>
  </div>
  <div className="text-lef flex justify-start justify-items-center my-5">
    <RiMapPinLine />
      <div className="head ms-1">
          <span><b>Address :</b></span>
          <span>Sakiet Ezzit , Sfax , Tunisia</span>
      </div>
  </div>
  <div className="text-lef flex justify-start justify-items-center my-5">
    <RiMailLine />
      <div  className="head ms-1">
          <span><b>Email :</b></span>
          <span>Contact@aminetriki.com.tn</span>
      </div>
  </div>
  <div className="my-3">
                <Social />
    </div>
</div>
  )
}
export default ContacLeft;