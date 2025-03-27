import headerLogo from '../assets/img/header-logo.svg';
import headerBg from '../assets/img/header-bg.jpg';

const Header = () => {

    const HeaderLinks = [
        {
            id: 1,
            link: '/',
            title: 'Biz haqimizda',
        },
        {
            id: 2,
            link: '/Services are new',
            title: 'Xizmatlar yangi',
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

    return (
        <header className=''>
            <div className="conatiner flex items-center space-x-5">
                <img src={headerLogo} alt="insan logo" />


                <ul className='flex space-x-4'>
                    {HeaderLinks.map(link => {
                        return (
                            <li key={link.id} >
                                <a className='font-medium text-xl text-[#111111]' href={link.link}>{link.title}</a>
                            </li>
                        )
                    })}
                </ul>

                <div>
                    <h3>Ru</h3>
                    <span className='w-[2px] h-[42.5px] bg-[#D9D9D9]'></span>
                    <h3>UZ</h3>
                </div>

            </div>
        </header>
    )
}

export default Header