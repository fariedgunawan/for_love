import gif from "../assets/tujuhbelas.jpeg";
import { useNavigate } from "react-router-dom";
const DelapanBelas = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-gradient-to-tr from-[#be185d] via-[#f472b6] to-[#fbcfe8] text-white min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <img src={gif} alt="" className="w-[150px] rounded-lg mb-[30px] md:w-[200px]" />
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px]">
          dan di sini lah akhirnya aku menyatakan suka aku sama kamu dengan modal nekat dan yolo ygy, aku bener2 pasrah kamu abis ini mau apain aku, aku mau hubungan kita ga gini2 aja soalnya, kalo bisa kamu trus sama aku kenapa ga yakan?
          jadi aku confess dengan harapan kamu bisa trus sama aku dan kalo bisa serius sama aku
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d]" onClick={() => navigate("/19")}>
          next
        </button>
      </div>
    </div>
  );
};

export default DelapanBelas;
