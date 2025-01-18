import gif from "../assets/sepuluh.jpeg";
import { useNavigate } from "react-router-dom";
const Sebelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] text-white min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px]" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px]">dah mulai nih keknya kemana2 bedua nih cieee... WKWKWKWKWKWKEK</h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d]" onClick={() => navigate("/12")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Sebelas;
