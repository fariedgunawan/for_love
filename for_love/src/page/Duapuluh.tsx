import { useNavigate } from "react-router-dom";
const DuaPuluh = () => {
  const navigate = useNavigate();
  return (
    <div className="landing bg-[#fdd8f8] font-medium text-[#871464] min-h-screen">
      <div className="body flex flex-col justify-center items-center min-h-screen">
        <h2 className=" md:text-[22px] text-center font-semibold px-[20px] md:w-[800px] animate-fade-up">
          makasih ya alma.... kamu dah nerima aku di kehidupan kamu dan mau aku dampingin... suatu kebahagian yang gabisa aku bayar sama sekali dan gabisa diganti dengan apa pun itu, makasih juga kamu dah selalu nemenin aku kemana pun itu
          dengan kata "ngintil" nya kamu itu.... kita sekarang dah mau jalan 2 bulan sayang aku selalu seneng dan bangga punya cewe kayak kamu, udah effort, baik, perhatian,sayang bgt sama pasangannya.
        </h2>
        <button className="btn h-[10px] px-[20px] bg-white border-none hover:bg-[#f472b6] mt-[30px] text-[#be185d] animate-jump" onClick={() => navigate("/21")}>
          next
        </button>
      </div>
    </div>
  );
};

export default DuaPuluh;
