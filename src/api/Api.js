export const fetchData = async (endpoint, headers = {}) => {
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        });

        if (!response.ok) {
            throw new Error('Что-то пошло не так');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
        throw error;
    }
};
