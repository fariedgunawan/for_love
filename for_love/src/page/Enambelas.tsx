import gif from "../assets/limabelas.jpeg";
import { useNavigate } from "react-router-dom";
const EnamBelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#ee97a6] font-medium text-black min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          ini juga aku seneng bgt bisa bedua ngajar sama kamu di sekolahan itu pas di cimahi pulang malem jalan kaki bedua di kampuss woww sangat senang
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/17")}>
          next
        </button>
      </div>
    </div>
  );
};

export default EnamBelas;
