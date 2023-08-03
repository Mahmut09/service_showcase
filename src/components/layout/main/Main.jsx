import React from 'react'
import { Outlet } from 'react-router-dom'
import Styles from './Main.module.scss';
import Banner from '../../UI/banner/Banner';

const Main = () => {
    return (
        <main className={Styles.container}>
            <Banner />
            <Outlet />
        </main>
    )
}

export default Main