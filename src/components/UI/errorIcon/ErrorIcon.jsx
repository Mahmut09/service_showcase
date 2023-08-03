import React from 'react'
import errorIcon from '../../../assets/images/cross.png';
import Styles from './ErrorIcon.module.scss';

const ErrorIcon = () => {
    return (
        <div className={Styles.wrapper}>
            <img src={errorIcon} className={Styles.icon} alt="Ok" />
            Попробуйте позднее
        </div>
    )
}

export default ErrorIcon