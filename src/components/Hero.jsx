import { useTranslation } from 'react-i18next'
import headerBg from '../assets/img/header-bg.jpg'
import heroImg from '../assets/img/HeroImg.png'
const Hero = () => {

    const { t } = useTranslation()

    return (
        <section style={{ backgroundImage: `url(${headerBg})` }} className="bg-cover bg-center pb-14.5">
            <div className="container px-6 flex justify-between md:flex-row items-center">

                <div className="md:w-1/2 text-left">
                    <div className='flex items-center space-x-4 mb-5'>
                        <span className='w-[78px] h-[2px] bg-blue'></span>
                        <h4 className="font-medium text-2xl text-light-gray">{t('marketing-agency')}</h4>
                    </div>
                    <h1 className="text-6xl font-medium text-dark-blue mb-5">
                        {t('busines')}
                    </h1>
                    <p className="text-lg text-gray-600 mb-16">
                        {t('insan-marketing')}
                    </p>

                    <div className="mt-6 flex space-x-4">
                        <button className="btn-blue">{t('services')}</button>
                        <button className="btn-dark">{t('connection')}</button>
                    </div>
                </div>

                <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <img
                        src={heroImg}
                        alt="Biznes marketing"
                        className="w-full max-w-lg"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero