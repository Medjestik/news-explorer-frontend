import { PROXY_URL_EVERYTHING, NEWS_API_KEY, PAGE_SIZE, DATE_TO, DATE_FROM } from './config.js';

export const getNews = (keyword) => {
    return fetch(`${PROXY_URL_EVERYTHING}?q=${keyword}&apiKey=${NEWS_API_KEY}&pageSize=${PAGE_SIZE}&from=${DATE_FROM}&to=${DATE_TO}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(res.statusText);   
    });
};
