import React, { useState } from 'react'
import Styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const HeaderUI = ({ handleSearchServices, searchServiceName, handleChangeInput }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <button className={`${Styles.burgerMenu} ${isMenuOpen ? Styles.open : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav className={`${Styles.nav} ${isMenuOpen ? Styles.open : ''}`}>
                <NavLink to={"/"} >Категории</NavLink>
                <NavLink to={"/help-page"} >Помощь</NavLink>
                <NavLink to={"/blog"} >Блог</NavLink>
            </nav>
            <form className={`${Styles.search} ${isMenuOpen ? Styles.open : ''}`} onSubmit={handleSearchServices}>
                <input
                    type="text"
                    placeholder='Поиск'
                    value={searchServiceName}
                    onChange={handleChangeInput}
                />
            </form>
            <button className={`${Styles.btn} ${isMenuOpen ? Styles.open : ''}`}>
                Связаться с нами
            </button>
        </>
    )
}

export default HeaderUI