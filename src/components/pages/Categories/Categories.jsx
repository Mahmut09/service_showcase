import React, { useEffect, useState } from 'react'
import Styles from './Categories.module.scss'
import { useSelector } from 'react-redux'
import { fetchData } from '../../../api/Api';
import CategoryCard from './CategoryCard/CategoryCard';

const Categories = () => {
    const URL = useSelector(state => state.toolkit.URL);
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const data = await fetchData(URL + 'v1/service-category');
                setCategories(data);
            } catch (error) {
                console.log("Error", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, [URL]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <section className={Styles.categories}>
            {
                categories.map(item => (
                    <CategoryCard
                        key={item.id}
                        title={item.title}
                        pictureUrl={item.picture_url}
                        categoryId={item.id}
                    />
                ))
            }
        </section>
    )
}

export default Categories