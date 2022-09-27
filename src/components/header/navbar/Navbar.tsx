import { Link } from 'react-router-dom'
import navbarStyles from '../../../style/components/navbar.module.scss'
import { Search, MenuRight } from 'css.gg'
type Props = {}

export default function Navbar({}: Props) {
  return (
    <>
      <div className='w-full flex justify-between px-4 border-b-4 border-green-500 mb-6'>
        <div>
          <Link id='logo' className={navbarStyles.logoFont} to='/home'>
            tatli.dev
          </Link>
        </div>
        <div className={navbarStyles.menuItems + ' md:flex'}>
          <div className='hover:decoration-8 hover:underline decoration-yellow-100 hover:decoration-yellow-300 transition duration-300 ease-out hover:ease-in'>
            Home
          </div>
          <div className='hover:decoration-8 hover:underline decoration-green-100 hover:decoration-green-300 transition duration-300 ease-out hover:ease-in'>
            Categories
          </div>
          <div className='hover:decoration-8 hover:underline decoration-blue-100 hover:decoration-blue-300 transition duration-300 ease-out hover:ease-in'>
            Pages
          </div>
          <div className='hover:decoration-8 hover:underline decoration-red-100 hover:decoration-red-300 transition duration-300 ease-out hover:ease-in'>
            About me
          </div>
          <div className='hover:decoration-8 hover:underline decoration-orange-100 hover:decoration-orange-300 transition duration-300 ease-out hover:ease-in'>
            Contact
          </div>
        </div>
        <div className={navbarStyles.rightButtons}>
          <Search className='mr-5' />
          <MenuRight />
        </div>
      </div>
    </>
  )
}
