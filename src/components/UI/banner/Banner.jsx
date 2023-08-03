import React from 'react'
import Styles from './Banner.module.scss';
import BannerImage from '../../../assets/images/promo.png';

const Banner = () => {
    return (
        <div className={Styles.banner}>
            <div className={Styles.bannerText}>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rerum aut quasi ex odit, dolore voluptatem blanditiis hic tempora, quidem magnam id officia quaerat, culpa suscipit? Laboriosam, error? Obcaecati, minima?
                </p>
                <button>Получить</button>
            </div>
            <div className="banner-image">
                <img src={BannerImage} alt="promo-banner" />
            </div>
        </div>
    )
}

export default Banner