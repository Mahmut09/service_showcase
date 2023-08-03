import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchData } from '../../../../api/Api';
import { useSelector } from 'react-redux'

const ServiceDetail = () => {
    const URL = useSelector(state => state.toolkit.URL);
    const { serviceId } = useParams();
    const [categoryData, setCategoryData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setIsLoading(true);
                const data = await fetchData(URL + `v1/service?category_id=${serviceId}`);
                setCategoryData(data);
            } catch (error) {
                console.log("Error", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, [URL, serviceId]);
    console.log(categoryData);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {
                categoryData.map(item => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    );
}

export default ServiceDetail