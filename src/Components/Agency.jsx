import React from 'react'
import Agency1 from '../assets/images/Agency.png'

const Agency = () => {
  return (
    <div className='container flex  items-center py-20 space-x-14'>
      <img className='' src={Agency1} alt="" />
      <div className='space-y-5'>
        <h2 className='text-5xl'>Biz  haqimizda</h2>
        <p className='text-black'>Biz brendlarni raqamli marketingini yuritamiz. Soddaroq  qilib aytganda, internet orqali har qanday biznesning  raqamli marketingini yurg'izib, ularga mijozlarini ko'payishi  uchun xizmat qilamiz.</p>
        <p className='mt-5 text-black'><b > Maqsadimiz:</b> Insonlarga foyda beruvchi sifatli  mahsulotlarni ommaga yetib borishida xizmat qilish!</p>
        <button className='btn-dark'>Xizmatlar yangi</button>
      </div>
    </div>
  )
}

export default Agency
