import React from 'react'
import Styles from './Footer.module.scss';
import Logo from '../../../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            © 2021 Okeypost . Все права защищены.
            <img src={Logo} alt="" />
        </footer>
    )
}

export default Footer