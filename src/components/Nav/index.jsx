import React from 'react'
import './style.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><FaRegUser/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#service"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav