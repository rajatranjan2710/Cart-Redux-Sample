import React from 'react'
import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'
import '../styles/header.css'
import { useSelector } from 'react-redux'

const Header = () => {

    const {cartItem} = useSelector(state=>state.cart)
  return (
    <nav className='header'>
        <h3>Logo Here</h3>
        <div className='nav-items'>
            <Link to={"/"} className='link'>Home</Link>
            <Link to={"/cart"}className='link'>
                <FiShoppingCart className='svg'/>
                <p>{cartItem.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header