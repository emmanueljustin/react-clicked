import { NavLink } from 'react-router-dom';
import Container from "../components/Container"
import Header from "../components/Header"
import Icon from '../components/Icon';
import { useState } from 'react';
import profPic from "../../assets/boy.jpg";
import Image from '../components/Images';
import Text from '../components/Text';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { logout } from '../../store/authSlice';

// onClick={() => {document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })}}

const NavBar = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.auth.token)
  const [showList, setShowList] = useState(false)
  const [showProfileOptions, setShowProfileOptions] = useState(false)

  return (
    <>
      <Container class="fixed w-full p-5 bg-gray-900 shadow-md z-40">
        <Container class="flex items-center justify-between px-10 w-full h-10">
          <Container class="flex items-center space-x-2 select-none cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current text-blue-400" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M3.379 10.224 8 16l4.621-5.776A6.292 6.292 0 0 0 14 6.293V6A6 6 0 0 0 2 6v.293c0 1.429.486 2.815 1.379 3.93ZM8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" clipRule="evenodd"/>
            </svg>
            <Header class="text-2xl text-white font-semibold">CL!CKED</Header>
          </Container>

          <Container class="hidden md:flex items-center justify-center space-x-5">
            <NavLink to="/" className={({ isActive }) => `nav-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Home</NavLink>
            <NavLink to="/services" className={({ isActive }) => `nav-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Services</NavLink>
            <NavLink to="/faq" className={({ isActive }) => `nav-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>FAQ</NavLink>
            
            {/* Authenticated navigation */}
            {token === "" && (
              <NavLink to="/login" className={({ isActive }) => `nav-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Login</NavLink>
            )}
            
            {token !== "" && (
              <Container onClick={() => setShowProfileOptions(!showProfileOptions)} class="relative cursor-pointer">
                <Image imgSrc={profPic} class="w-10 h-10 rounded-full object-cover border-2" alt="pic" />

                {showProfileOptions && (
                  <Container class="absolute mt-1 -right-10 flex flex-col justify-center bg-gray-800 rounded-md shadow-md cursor-pointer overflow-clip space-y-2 z-50">
                    <NavLink to="/profile" className={({ isActive }) => `profile-items ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Profile</NavLink>
                    <Text class="profile-items">Transactions</Text>
                    <Text class="profile-items">Booking</Text>
                    <Container onClick={() => dispatch(logout())}>
                      <Text class="profile-items">Logout</Text>
                    </Container>
                  </Container>
                )}
              </Container>
            )}
          </Container>

          {/* This is for smaller screen */}
          <Container onClick={() => setShowList(!showList)} class="block relative md:hidden rounded-md border-white border px-3 py-2 cursor-pointer text-white hover:text-black hover:bg-white">
            <Icon class="fa-solid fa-bars fa-xl" />

            {showList && (
            <Container class="absolute flex flex-col items-center justify-center mt-6 right-0 rounded-md bg-gray-800 shadow-md overflow-clip z-50">
              <NavLink to="/" className={({ isActive }) => `nav-items-min ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Home</NavLink>
              <NavLink to="/services" className={({ isActive }) => `nav-items-min ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Services</NavLink>
              <NavLink to="/faq" className={({ isActive }) => `nav-items-min ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>FAQ</NavLink>
              <NavLink to="/login" className={({ isActive }) => `nav-items-min ${isActive ? 'bg-gray-100 bg-opacity-25' : ''}`}>Login</NavLink>
            </Container>
            )}
          </Container>
        </Container>
      </Container>
    </>
  )
}

export default NavBar