import gif from "../assets/empatbelas.jpeg";
import { useNavigate } from "react-router-dom";
const LimaBelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] text-white min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[150px] rounded-lg mb-[30px] md:w-[200px]" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px]">kann.. dah bedua trus ini kedoknya ngajarin backend katanya tpi ya aku sih backend cuman formalitas sisanya aku pengen be2 aja makan sama kamu</h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d]" onClick={() => navigate("/16")}>
          next
        </button>
      </div>
    </div>
  );
};

export default LimaBelas;
