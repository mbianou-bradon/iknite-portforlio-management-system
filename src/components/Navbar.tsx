import {AiFillHome, AiFillExclamationCircle} from "react-icons/ai"
import {TiGroup} from "react-icons/ti"
import {IoIosPerson, IoMdMenu} from "react-icons/io"
import {TfiLayoutGrid2Alt} from "react-icons/tfi"
import { NavLink } from 'react-router-dom'

export default function Navbar(): JSX.Element {

  function handleClick(){
    document.getElementById("mobile-menu")?.classList.toggle("hidden")
  }

  return (
    <nav className="flex items-center justify-between md:justify-around font-semibold py-5 bg-red-40 px-4 md:px-0 text-slate-900 relative">
      <div className="brand text-2xl text-secondary">IkniteSpace<span className="text-slate-900">In</span></div>
      <ul className="hidden md:flex gap-10 [&>*>a]:flex [&>*>a]:items-center [&>*>a]:gap-1 [&>*:hover]:text-violet-800 [&>*]:cursor-pointer">
        <li>
            <NavLink to="/" className={({isActive}) => isActive? "text-secondary" : "text-slate-900 hover:text-secondary"}>
                <h2>Home</h2>
                <AiFillHome/>
            </NavLink>
        </li>
        <li>
            <NavLink to="/projects" className={({isActive}) => isActive? "text-secondary" : "text-slate-900 hover:text-secondary"}>
                <h2>Project</h2>
                <TfiLayoutGrid2Alt />
            </NavLink>
        </li>
        <li>
            <NavLink to="/members" className={({isActive}) => isActive? "text-secondary" : "text-slate-900 hover:text-secondary"}>
                <div></div>
                <h2>Members</h2>
                <TiGroup/>
            </NavLink>
        </li>
        <li>
            <NavLink to="/About" className={({isActive}) => isActive? "text-secondary" : "text-slate-900 hover:text-secondary"}>
                <h2>About Iknite</h2>
                <AiFillExclamationCircle/>
            </NavLink>
        </li>
      </ul>

      <div className="md:flex gap-5 hidden">
        <div className="px-5 py-1.5 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary cursor-pointer active:scale-90">
            <h2>Login</h2>
        </div>
        <div className="flex items-center justify-center rounded-full bg-primary text-white w-10 h-10 text-3xl">
            <IoIosPerson/>
        </div>
      </div>

      <div id="menu" className="md:hidden text-2xl cursor-pointer" onClick={handleClick}><IoMdMenu /></div>


      {/* Mobile menu */}

      <div id="mobile-menu" className="hidden md:hidden absolute top-14 bg-white w-full h-screen z-50">
          <ul className="flex flex-col gap-10 py-5 [&>*>a]:flex [&>*>a]:items-center [&>*>a]:gap-1 [&>*:hover]:text-violet-800 [&>*]:cursor-pointer">
              <li onClick={handleClick}>
              <NavLink to="/" className={({isActive}) => isActive? "text-secondary" : "text-slate-900 hover:text-secondary"}>
                <h2>Home</h2>
                <AiFillHome/>
              </NavLink>
              </li>
              <li onClick={handleClick}>
                <NavLink to="/projects" className={({isActive}) => isActive? "text-secondary" : "text-slate-900 hover:text-secondary"}>
                  <h2>Project</h2>
                  <TfiLayoutGrid2Alt />
                </NavLink>
              </li>
              <li onClick={handleClick}>
                <NavLink to="/members" className={({isActive}) => isActive? "text-secondary" : "text-slate-900 hover:text-secondary"}>
                  <h2>Team</h2>
                  <TiGroup/>
                </NavLink>
              </li>
              <li onClick={handleClick}>
                  <a href="https://iknite.space/" target="_blank">
                    <h2>About Iknite</h2>
                    <AiFillExclamationCircle/>
                  </a>
              </li>
          </ul>

          
          <div className="w-fit px-5 py-1.5 bg-primary text-white rounded-lg hover:bg-white hover:text-primary border border-primary cursor-pointer active:scale-90">
            <h2>Login</h2>
          </div>
         
      </div>
        
    </nav>
  )
}
