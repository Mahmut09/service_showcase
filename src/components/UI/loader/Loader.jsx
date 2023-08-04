import React from 'react'
import Styles from './Loader.module.scss';

const Loader = () => {
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.ldsGrid}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loader