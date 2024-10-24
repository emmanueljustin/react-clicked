import { NavLink } from 'react-router-dom';
// import logo from '../assets/react.svg'
// import Button from '../components/Button';

const NavBar = () => {
  return (
    <>
      <nav className="bg-white z-50 dark:bg-gray-900 fixed w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://google.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img className="rotate" src={logo} /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current text-blue-400" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.379 10.224 8 16l4.621-5.776A6.292 6.292 0 0 0 14 6.293V6A6 6 0 0 0 2 6v.293c0 1.429.486 2.815 1.379 3.93ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clip-rule="evenodd"/>
          </svg>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CL!CKED</span>
        </a>
        <div className="md:hidden flex">
          {/* <Button onClick={() => {document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}} class="bg-blue-600 text-white font-semi-bold py-2 px-3 rounded-md active:bg-opacity-65">Explore</Button> */}
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink to="/" className={({ isActive }) => `nav-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/services" className={({ isActive }) => `nav-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Services</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => `nav-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Login</NavLink>
            </li>
            <li>
            <NavLink to="/faq" className={({ isActive }) => `nav-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>FAQ</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar