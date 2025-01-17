import gif from "../assets/satu.jpeg";
import { useNavigate } from "react-router-dom";
const dua = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] text-white min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px]" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px]">
          kamu masi inget ini ga, dimana ini pertama kalinya aku ngerasain berdua sama kamu dan ternyata kamu orangnya baik,asik, dan terbuka sama aku. dan aku juga merasakan ada rasa yang agak berbeda waktu itu, rasa itu mungkin aku gabisa
          ungkapin dengan kata kata simple
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d]" onClick={() => navigate("/3")}>
          next
        </button>
      </div>
    </div>
  );
};

export default dua;
