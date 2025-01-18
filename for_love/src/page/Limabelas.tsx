import gif from "../assets/empatbelas.jpeg";
import { useNavigate } from "react-router-dom";
const LimaBelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#ee97a6] font-medium text-black min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          kann.. dah bedua trus ini kedoknya ngajarin backend katanya tpi ya aku sih backend cuman formalitas sisanya aku pengen be2 aja makan sama kamu
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] animate-jump mt-[30px] text-[#be185d]" onClick={() => navigate("/16")}>
          next
        </button>
      </div>
    </div>
  );
};

export default LimaBelas;
