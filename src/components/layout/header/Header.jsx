import React from 'react'
import { NavLink } from 'react-router-dom'
import Styles from './Header.module.scss'
import logo from '../../../assets/images/logo.png'

const Header = () => {
    return (
        <header className={Styles.header}>
            
            <div className={Styles.logo}>
                <img src={logo} alt="logo" />
            </div>
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