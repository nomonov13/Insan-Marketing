import React from 'react'

import smm from '../assets/smm.svg'
import web from '../assets/web.svg'
import branding from '../assets/branding.svg'

const Xizmatlar = () => {
  return (
    <div>
      <div className='container'>
        <h1 className='text-dark-blue text-5xl text-center mb-32 mt-32'>Bizning Xizmatlar:</h1>

        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          <li className='bg-dark-blue w-full h-72 text-white rounded-2xl text-center'>
            <div className='flex justify-center items-center'>
              <img src={smm} alt="smm" className='w-24 h-24 mx-auto' />
            </div>
            <h3 className='text-4xl mb-3'>SMM</h3>
            <p className='px-4'>
              Ijtimoiy media marketingi <br />
              orqali mahsulot yoki xizmatni <br />
              keng auditoriyaga targ'ib qilish.
            </p>
          </li>

          <li className='bg-dark-blue w-full h-72 text-white rounded-2xl text-center'>
            <div className='flex justify-center items-center'>
              <img src={web} alt="web" className='w-24 h-24 mx-auto' />
            </div>
            <h3 className='text-4xl mb-3 mt-5'>Web</h3>
            <p className='px-4'>
              Biznesingiz uchun ijodiy va <br />
              sifatli veb-sayt yarataylik
            </p>
          </li>

          <li className='bg-dark-blue w-full h-72 text-white rounded-2xl text-center'>
            <div className='flex justify-center items-center'>
              <img src={branding} alt="branding" className='w-24 h-24 mx-auto' />
            </div>
            <h3 className='text-4xl mb-3 mt-5'>Branding</h3>
            <p className='px-4'>
              Kompaniyangizning "Yuzini" bozorda <br />
              shakllantirish uchun nom, logotip, gaydline <br />
              va brend kitobini ishlab chiqish.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Xizmatlar
