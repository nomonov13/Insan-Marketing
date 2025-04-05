import React from 'react'

const Questions = () => {
  return (
    <section className='bg-dark-blue py-20'>
      <div className="container flex  items-center justify-center space-x-48">
        <div className='items-center space-y-3'>
          <h1 className='text-white text-5xl   font-semibold' >
            Savolingiz bormi?
          </h1>
          <p className='text-dark-gray text-sm '>Ma'lumotlaringizni qoldiring va biz tez orada siz bilan <br /> bog’lanamiz!</p>
        </div>
        <div className='space-y-4' >
          <div >
            <input className='py-3.5 px-14.5 border-2 border-[#FFFFFF73] rounded-2xl text-center font-normal text-xl text-white placeholder:text-white' type="text" placeholder='F.I.O' />
          </div>
          <div>
            <input className='py-3.5 px-14.5 border-2 border-[#FFFFFF73] rounded-2xl text-center font-normal text-xl text-white placeholder:text-white' type="number" placeholder='Telefon raqamingiz' />
          </div>
          <button className='btn-white'>Yuborish</button>
        </div>
      </div>
    </section>
  )
}

export default Questions
