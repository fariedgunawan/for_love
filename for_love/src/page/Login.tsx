import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [namaCewe, setNamaCewe] = useState("");
  const [namaCowo, setNamaCowo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = () => {
    if (namaCewe.toLowerCase() !== "alma") {
      alert("NOOO Kamu siapa !!");
    } else if (namaCowo.toLowerCase() !== "faried") {
      alert("Kamu punya cowo lain ya huhu...");
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/landing");
  };

  return (
    <div className="min-h-screen bg-[#ee97a6] font-medium text-black flex justify-center items-center">
      <div className="max-w-screen-xl m-0 sm:m-10 sm:rounded-lg flex justify-center flex-1 px-[20px]">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold text-white">Mastiin dulu</h1>

            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="Nama Panggilan Cewenya"
                  value={namaCewe}
                  onChange={(e) => setNamaCewe(e.target.value)}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="text"
                  placeholder="Nama Panggilan Cowonya"
                  value={namaCowo}
                  onChange={(e) => setNamaCowo(e.target.value)}
                />
                <button
                  className="mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={handleLogin}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>

                  <span className="ml-3">Try</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
            <h2 className="text-lg font-bold mb-4">Konten ini termasuk unsur baper</h2>
            <p className="text-gray-700 mb-6">Yakin mau lanjut?</p>
            <div className="flex justify-end">
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300" onClick={closeModal}>
                Bodoamat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
