import React from "react";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import logo3 from "../assets/images/logo3.png";
import { useTranslation } from "react-i18next";

const Customers = () => {
  const { t } = useTranslation();
  return (
    <div className="container px-6 py-[69px] mx-auto">
      <h1 className="font-bold text-[60px] text-center">{t("customers")}</h1>

      <div className="flex flex-wrap justify-center gap-[30px] mt-[80px]">
        <div className="div w-[414px] p-[40px] rounded-2xl shadow-md bg-white">
          <p className="text-[14px] leading-[166%] text-gray-700">
            {t("user1-commit")}
          </p>
          <div>
            <hr className="my-4 border-gray-300" />
            <div className="flex items-center gap-3">
              <img
                src={logo1}
                alt="Umar Najimov"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h2 className="text-[14px] font-medium">{t("user1-name")}</h2>
                <p className="text-[12px] text-gray-600">{t("user1-job")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="div w-[414px] p-[40px] rounded-2xl shadow-md bg-white">
          <p className="text-[14px] leading-[166%] text-gray-700">
            {t("user2-commit")}
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
                <h2 className="text-[14px] font-medium">{t("user2-name")}</h2>
                <p className="text-[12px] text-gray-600">{t("user2-job")}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="div w-[414px] p-[40px] rounded-2xl shadow-md bg-white">
          <p className="text-[14px] leading-[166%] text-gray-700">
            {t("user3-commit")}
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
                <h2 className="text-[14px] font-medium">{t("user3-name")}</h2>
                <p className="text-[12px] text-gray-600">{t("user3-job")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
