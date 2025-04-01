import React from "react";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";

const Customers = () => {
  return (
    <div className="container px-6 py-[69px] mx-auto">
      <h1 className="font-bold text-[60px] text-center">
        Mijozlarning sharhlari
      </h1>

      <div className="flex flex-wrap justify-center gap-[30px] mt-[80px]">
        {/* 1-sharh */}
        <div className="w-[414px] p-[40px] rounded-2xl shadow-md bg-white">
          <p className="text-[14px] leading-[166%] text-gray-700">
            Sizlarning jamoangiz bilan juda ham yaxshi ishlayapman. Ishingizga
            mas'uliyat bilan yondashasizlar. Bundan keyin ham birgalikda ishlash
            nasib qilsin. Ishlaringizga rivoj. Alloh sizlardan rozi bo'lsin.
          </p>
          <hr className="my-4 border-gray-300" />
          <div className="flex items-center gap-3">
            <img
              src={logo1}
              alt="Umar Najimov"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h2 className="text-[14px] font-medium">Umar Najimov</h2>
              <p className="text-[12px] text-gray-600">
                “Parfum Embassy” atirlar do‘koni
              </p>
            </div>
          </div>
        </div>

        {/* 2-sharh */}
        <div className="div w-[414px] p-[40px] rounded-2xl shadow-md bg-white">
          <p className="text-[14px] leading-[166%] text-gray-700">
            Zo'r ish olib borishadi, shartnomaga to'liq amal qilinadi, barcha
            majburiyatlar bajariladi. Ishilarga omad.
          </p>
          <div>
            <hr className="my-4 border-gray-300" />
            <div className="flex items-center gap-3">
              <img
                src={logo2}
                alt="Abror Topilov"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-[14px] font-medium">Sultonmurod Abdusalomov</h2>
                <p className="text-[12px] text-gray-600">
                “allOne” taksi platformasi asoschisi
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="div w-[414px] p-[40px] rounded-2xl shadow-md bg-white">
          <p className="text-[14px] leading-[166%] text-gray-700">
            Barcha postlar o'z vaqtida chiqadi, kontent sifatli. Mas'uliyatli
            agentlik, menga yoqdi.
          </p>
          <div>
            <hr className="my-4 border-gray-300" />
            <div className="flex items-center gap-3">
              <img
                src={logo3}
                alt="Abror Topilov"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-[14px] font-medium">Abror Topilov</h2>
                <p className="text-[12px] text-gray-600">
                  “Dezintash” dezinfeksiya korxonasi rahbari
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
