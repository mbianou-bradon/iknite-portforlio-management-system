import React from 'react'
import {AiFillHome, AiFillExclamationCircle} from "react-icons/ai"
import {TiGroup} from "react-icons/ti"
import {IoIosPerson, IoMdMenu} from "react-icons/io"
import {TfiLayoutGrid2Alt} from "react-icons/tfi"

export default function Navbar(): JSX.Element {
  return (
    <nav className="flex items-center justify-between md:justify-around font-semibold py-5 bg-red-400 px-4 md:px-0">
      <div className="brand text-2xl text-violet-700">Space<span className="text-black">In</span></div>
      <ul className="hidden md:flex gap-10 [&>*>a]:flex [&>*>a]:items-center [&>*>a]:gap-1 [&>*:hover]:text-violet-800 [&>*]:cursor-pointer">
        <li>
            <a href="">
                <h2>Home</h2>
                <AiFillHome/>
            </a>
        </li>
        <li>
            <a href="">
                <h2>Project</h2>
                <TfiLayoutGrid2Alt />
            </a>
        </li>
        <li>
            <a href="">
                <div></div>
                <h2>Members</h2>
                <TiGroup/>
            </a>
        </li>
        <li>
            <a href="">
                <h2>About Iknite</h2>
                <AiFillExclamationCircle/>
            </a>
        </li>
      </ul>

      <div className="md:flex gap-5 hidden">
        <div className="px-5 py-1.5 bg-violet-700 text-white rounded-lg hover:bg-white hover:text-violet-600 border border-violet-700 cursor-pointer active:scale-90">
            <h2>Login</h2>
        </div>
        <div className="flex items-center justify-center rounded-full bg-violet-700 text-white w-10 h-10 text-3xl">
            <IoIosPerson/>
        </div>
      </div>

      <div className="md:hidden text-2xl"><IoMdMenu /></div>
    </nav>
  )
}
