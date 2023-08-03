import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Styles from './Header.module.scss'
import Logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <header className={Styles.header}>
            
            <Link to={"/"} className={Styles.logo}>
                <img src={Logo} alt="logo" />
            </Link>
            <nav className={Styles.nav}>
                <NavLink to={"/"} >Категории</NavLink>
                <NavLink to={"/services"} >Сервисы</NavLink>
                <NavLink to={"/help"} >Помощь</NavLink>
                <NavLink to={"/blog"} >Блог</NavLink>
            </nav>
            <button className={Styles.btn}>
                Связаться с нами
            </button>

        </header>
    )
}

export default Header