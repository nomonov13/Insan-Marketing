import React from 'react';

const Numbers = () => {
  const NumberList = [
    { value: "+30", label: "ПРОЕКТОВ" },
    { value: "+25", label: "СММ ПРОЕКТОВ" },
    { value: "+5", label: "БРЕНДИНГ ПРОЕКТОВ" }
  ];

  return (
    <div className="text-center p-6">
      <h2 className="text-6xl font-bold text-blue-900 mb-6">Мы в цифрах:</h2>
      <div className="flex justify-center gap-6">
        {NumberList.map((item, index) => (
          <div
            key={index}
            className="bg-white  rounded-xl p-6 text-center border border-blue-900 mt-7"
            style={{ width: '400px', height: '270px', borderRadius: '15px',  }}
          >
            <p className="text-9xl font-bold text-blue-900 mt-5">{item.value}</p>
            <p className="text-3xl text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;