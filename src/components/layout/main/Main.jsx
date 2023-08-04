import React from 'react'
import { Outlet } from 'react-router-dom'
import Styles from './Main.module.scss';

const Main = () => {
    return (
        <main className={Styles.container}>
            <Outlet />
        </main>
    )
}

export default Main