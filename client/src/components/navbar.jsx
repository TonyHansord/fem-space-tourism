import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '/assets/shared/logo.svg'

const NavLink = ({ to, children }) => {
  return (
    <li className='text-white'>
      <Link to={to} className='flex gap-3'>
        {children}
      </Link>
    </li>
  )
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

const Navbar = () => {
  const pages = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Destination',
      url: '/destination'
    },
    {
      name: 'Crew',
      url: '/crew'
    },
    {
      name: 'Technology',
      url: '/technology'
    }
  ]

  return (
    <nav className='flex top-5 right-0 w-screen p-4'>
      <div className='absolute flex items-center w-[50vw] top-5 left-10 h-20 z-10'>
        <img src={logo} alt='logo' className='size-10 ' />
        <svg className='h-20 w-[50vw] z-10'>
          <line x1='100' y1='40' x2='800' y2='40' stroke='#979797' />
        </svg>
      </div>

      <div className='absolute backdrop-blur-xl w-[50vw] top-5 right-0 h-20 z-0'>
        <ul className='flex justify-center space-x-4 p-7'>
          {pages.map((page, index) => (
            <NavLink key={index} to={page.url}>
              <h1 className='text-white text-xl tracking-widest font-bold barlow-condensed-regular'>
                0{index}
              </h1>
              <h1 className='text-white text-xl tracking-widest font-thin barlow-condensed-regular'>
                {page.name.toUpperCase()}
              </h1>
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
