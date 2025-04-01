import React from 'react'
import Agency1 from '../assets/images/Agency.png'

const Agency = () => {
  return (
    <div className='container flex  items-center py-20 space-x-28'>
    <div>
           <img src={Agency1} alt="" />
       </div>
       <div className='space-y-10'>
           <h1 className='text-5xl'>Коротко  <br /> о нас</h1>
           <p className='text-black'>Biz brendlarni raqamli marketingini yuritamiz. Soddaroq <br /> qilib aytganda, internet orqali har qanday biznesning <br /> raqamli marketingini yurg'izib, ularga mijozlarini ko'payishi <br /> uchun xizmat qilamiz.</p>
           <p className='mt-9 text-black'><span > Maqsadimiz:</span> Insonlarga foyda beruvchi sifatli <br /> mahsulotlarni ommaga yetib borishida xizmat qilish!</p>
           <button className='btn-dark'>нАШИ УСЛУГИ</button>
       </div>
       
     
     </div>
  )
}

export default Agency
