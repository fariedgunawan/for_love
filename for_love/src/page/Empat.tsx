import gif from "../assets/tiga.jpeg";
import { useNavigate } from "react-router-dom";
const Empat = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#fdd8f8] font-medium text-[#871464] min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          kalo kamu inget moment ini, itu aku merhatiin kamu dibawah, aku mikir ko dia kalo seneng lucu bgt ya trus pemberani lagi naik histeria yang sekenceng itu wkwkwkw
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/5")}>
          next
        </button>
      </div>
    </div>
  );
};

export default Empat;
