import headerBg from '../assets/img/header-bg.jpg';
import headerLogo from '../assets/img/header-logo.svg';

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
                    <h3 className='font-medium text-2xl text-light-gray'>Ru</h3>
                    <span className='w-[2px] h-[42.5px] bg-[#D9D9D9]'></span>
                    <h3 className='font-medium text-2xl text-blue'>UZ</h3>
                </div>
                <button className='btn-dark'>Bog'lanish</button>

            </div>
        </header>
    )
}

export default Header