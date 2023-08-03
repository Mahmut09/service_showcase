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
            throw new Error('Ошибка');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Ошибка');
    }
};

export const postData = async (endpoint, body, headers = {}) => {
    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: JSON.stringify(body)
        });

        if (!response.ok) {
            throw new Error('Ошибка');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Ошибка');
    }
};
