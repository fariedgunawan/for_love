import gif from "../assets/1156579_20140430100009.gif";
import { useNavigate } from "react-router-dom";
const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] text-white min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[250px] rounded-lg mb-[30px] md:w-[300px]" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px]">
          hai alma... kesayangan aku, pujaan hati akuuu, pendamping aku ini aku ada sedikit sesuatu buat kamu, mungkin gabagus2 bgt tpi semoga punya kesan tersendiri
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d]" onClick={() => navigate("/1")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Landing;
