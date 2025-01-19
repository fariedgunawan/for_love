import gif from "../assets/tigabelas.jpeg";
import { useNavigate } from "react-router-dom";
const EmpatBelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#fdd8f8] font-medium text-[#871464] min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          NAH INI NIH KENAPA NIH TIBA TIBA BE2 ? AHAHAHAHAH dah gitu ngobrol asik bgt lagi, aku disini dah mikir "lama lama be2 kemana mana nih dah bull shit bawa orang ke3 mending be2 sekalian"
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/15")}>
          next
        </button>
      </div>
    </div>
  );
};

export default EmpatBelas;
