import gif from "../assets/tujuhbelas.jpeg";
import { useNavigate } from "react-router-dom";
const DelapanBelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#fdd8f8] font-medium text-[#871464] min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[200px] rounded-lg mb-[30px] md:w-[200px] animate-fade-down" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          dan di sini lah akhirnya aku menyatakan suka aku sama kamu dengan modal nekat dan yolo ygy, aku bener2 pasrah kamu abis ini mau apain aku, aku mau hubungan kita ga gini2 aja soalnya, kalo bisa kamu trus sama aku kenapa ga yakan?
          jadi aku confess dengan harapan kamu bisa trus sama aku dan kalo bisa serius sama aku
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/hasil")}>
          next
        </button>
      </div>
    </div>
  );
};

export default DelapanBelas;
