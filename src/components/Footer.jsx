import React from 'react'
import insan from '../../src/assets/images/insan.svg'
const Footer = () => {
  return (
    <footer>
        <div className="container p-24  justify-center grid grid-cols-3   ">
            <div className='space-y-8'>
                <img src={insan} alt="insan logo" />
                <p className='text-dark-gray text-sm'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut.</p>
            </div>

            <div>
                <h3 className='text-3xl mb-4'>
                    Asosiy linklar
                </h3>

                <ul className='space-y-3 '>
                    <li>
                        <a className='text-blue' href="#">Biz haqimizda</a>
                    </li>

                    <li>
                        <a  href="#">Xizmatlar</a>
                    </li>

                    <li>
                        <a  href="#">Portfolio</a>
                    </li>

                    <li>
                        <a  href="#">Mijozlar fikri</a>
                    </li>

                    <li>
                        <a href="#">Aloqa</a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className='text-3xl mb-4'>
                Manzillar
                </h3>

                <ul className='space-y-3'>
                    <li>
                        <a href="#">Joylashuv: Qorasaroy chorraha, 1-uy</a>
                    </li>

                    <li>
                        <a href="#">Tel: +998 99 4466767</a>
                    </li>

                    <li>
                        <a href="#">Telegram: @insanmarketing</a>
                    </li>

                    <li>
                        <a href="#">Instagram: @insanmarketing</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
