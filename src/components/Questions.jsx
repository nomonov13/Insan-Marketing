import React from 'react'

const Questions = () => {
  return (
    <section className='bg-dark-blue'>
        <div className="container flex  space-x-48  items-center  p-8">
            <div className=' items-center space-y-3'>
                <h1 className='text-white text-5xl   font-semibold' >
                Savolingiz bormi?
                </h1>
                <p className='text-dark-gray text-sm '>Ma'lumotlaringizni qoldiring va biz tez orada siz bilan <br /> bog’lanamiz!</p>
            </div>
           <div className=' space-y-4 ' >
           <div >
           <input className='w-64 h-10 border-light-gray border-2 rounded-2xl text-center text-white' type="text" placeholder ='F.I.O' />
           </div>
           <div>
           <input className='w-64 h-10 border-light-gray border-2 rounded-2xl text-center text-white' type="number" placeholder ='Telefon raqamingiz' />
           </div>

           <button className='btn-white'>Yuborish</button>
           </div>
        </div>
    </section>
  )
}

export default Questions
