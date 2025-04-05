import { useTranslation } from 'react-i18next';
import headerBg from '../assets/img/header-bg.jpg';
import headerLogo from '../assets/img/header-logo.svg';

const Header = () => {

    const { t, i18n } = useTranslation()

    const HeaderLinks = [
        {
            id: 1,
            link: '/',
            title: t('about-us'),
        },
        {
            id: 2,
            link: '/Services are new',
            title: t('services'),
        },
        {
            id: 3,
            link: '/Portfolio',
            title: 'Portfolio',
        },
        {
            id: 4,
            link: '/Customer opinion',
            title: 'Mijozlar fikri',
        },
        {
            id: 5,
            link: '/Communication',
            title: 'Aloqa',
        },
    ]

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <header style={{ backgroundImage: `url(${headerBg})` }} className="bg-cover bg-center  pb-[59px]">
            <div className="container py-5 flex items-center justify-between">
                <div className='mr-[80px]'>
                    <img src={headerLogo} alt="insan logo" />
                </div>


                <ul className='flex space-x-4'>
                    {HeaderLinks.map(link => {
                        return (
                            <li key={link.id} >
                                <a className='font-medium text-xl text-[#111111]' href={link.link}>{link.title}</a>
                            </li>
                        )
                    })}
                </ul>

                <div className='flex items-center space-x-4'>
                    <button onClick={() => changeLanguage('ru')} className='font-medium text-2xl text-light-gray'>Ru</button>
                    <span className='w-[2px] h-[42.5px] bg-[#D9D9D9]'></span>
                    <button onClick={() => changeLanguage('uz')} className='font-medium text-2xl'>UZ</button>
                </div>
                <button className='btn-dark'>Bog'lanish</button>

            </div>
        </header>
    )
}

export default Header