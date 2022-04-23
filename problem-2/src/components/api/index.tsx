import axios from 'axios';
import React from 'react';

const getRandom = () => {
    return Math.floor(Math.random() * 10) + 1;
};

const Api = (
    url: string,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const apiCall = async () => {
        setIsLoading(true);
        const rand = getRandom();
        const response = await axios.get(url + `/${rand}`);
        const result = await response.data;
        setIsLoading(false);
        return result;
    };
    return apiCall();
};

export default Api;
