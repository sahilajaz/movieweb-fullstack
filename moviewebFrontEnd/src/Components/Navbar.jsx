import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { Link  } from 'react-router-dom';

const Navbar = () => {
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <nav className='flex justify-between px-8 items-center py-2 bg-[#555555]'>
      <GiHamburgerMenu 
          className='flex md:hidden text-2xl cursor-pointer' 
          onClick={() => setSideMenuOpen(true)} 
        />
      <section className='hidden md:flex items-center gap-2'>
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faVideoSlash} style={{ color: "gold", height: "23px" }} />
          <span className='text-[gold] ml-1 mr-3'>Gold</span> 
        </div>
        <Link to="/"><h3 className='text-white text-xl cursor-pointer'>Home</h3></Link>
      </section>
      <section className='hidden md:flex items-center gap-4'>
        <button className='border border-[#0fc0fc] px-5 py-1 text-[#0fc0fc] rounded-md font-bold hover:bg-white/95'>Login</button>
        <button className='border border-[#0fc0fc] px-5 py-1 text-[#0fc0fc] rounded-md font-bold hover:bg-white/95'>Register</button>
      </section>
      {isSideMenuOpen && (
        <div className="sidebar fixed h-full w-screen bg-black/50 backdrop-blur-sm top-0 right-0 z-50">
          <section className='text-black bg-[#555555] flex flex-col absolute left-0 top-0 h-screen py-8 px-16 gap-8 z-50 w-72'>
            <button onClick={() => setSideMenuOpen(false)}>
              <IoCloseOutline className='mt-0 mb-8 text-4xl cursor-pointer' />
            </button>
            <div className='flex items-center'>
          <FontAwesomeIcon icon={faVideoSlash} style={{ color: "gold", height: "23px" }} />
          <span className='text-[gold] ml-1 mr-3'>Gold</span> 
          </div>
          <Link to="/"><h3 className='text-white text-xl cursor-pointer'>Home</h3></Link>
            <button className='border border-[#0fc0fc] px-5 py-1 text-[#0fc0fc] rounded-md font-bold hover:bg-white/95'>Login</button>
            <button className='border border-[#0fc0fc] px-5 py-1 text-[#0fc0fc] rounded-md font-bold hover:bg-white/95'>Register</button>
          </section>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
