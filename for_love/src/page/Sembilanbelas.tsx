import gif from "../assets/delapanbelas.jpeg";
import { useNavigate } from "react-router-dom";
const SembilanBelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#fdd8f8] font-medium text-[#871464] min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[250px] rounded-lg mb-[30px] md:w-[250px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          eh dia terima gais dan mau jadi pasangan aku selamanya..... di satu sisi aku seneng bisa dapetin kamu, disatu sisi aku harus berfikir gimana caranya bahagiain kamu selalu dan nurutin semua apa mau kamu
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] animate-jump text-[#be185d]" onClick={() => navigate("/20")}>
          next
        </button>
      </div>
    </div>
  );
};

export default SembilanBelas;
