import React from 'react'
import Styles from './CategoryCard.module.scss'
import { Link } from 'react-router-dom';

const CategoryCard = ({ title, pictureUrl, categoryId }) => {
    return (
        <Link to={`/services/${categoryId}`} className={Styles.card}>
            {title}
            <img src={pictureUrl} alt="" />
        </Link>
    )
}

export default CategoryCard