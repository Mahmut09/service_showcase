import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../../../../api/Api';
import { useSelector } from 'react-redux'
import ServicePlug from '../ServicePlug/ServicePlug';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceDetail = () => {
    const URL = useSelector(state => state.toolkit.URL);
    const { serviceId } = useParams();
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                setFetchError(null);
                const data = await fetchData(URL + `v1/service?category_id=${serviceId}`);
                setCategoryData(data);
            } catch (error) {
                setFetchError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, [URL, serviceId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (categoryData.length === 0) {
        return <ServicePlug />
    }

    if (fetchError) {
        return <h2>Сервисы временно не доступны, попробуйте позже.</h2>;
    }

    return (
        <>
            {
                categoryData.map(item => (
                    <ServiceCard
                        key={item.id}
                        name={item.name.replace("_", " ")}
                        site={item.site}
                        pictureUrl={item.picture_url}
                        fields={item.fields}
                    />
                ))
            }
        </>
    );
}

export default ServiceDetail