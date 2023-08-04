import React from 'react'
import Styles from './CategoryCard.module.scss'
import { Link } from 'react-router-dom';
import NoImage from '../../../../assets/images/no-image.png';

const CategoryCard = ({ title, pictureUrl, categoryId }) => {
    const categoryImage = pictureUrl ? pictureUrl : NoImage;

    return (
        <Link to={`/services/${categoryId}`} className={Styles.card}>
            {title}
            <img src={categoryImage} alt="" />
        </Link>
    )
}

export default CategoryCard