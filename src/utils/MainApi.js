import { MAIN_API_URL } from './config.js';

function handleResponse (res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(res)
    }
}

export const register = ({ email, password, name }) => {
    return fetch(`${MAIN_API_URL}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    })
    .then(res => handleResponse(res));
};

export const login= ({ email, password }) => {
    return fetch(`${MAIN_API_URL}/signin`, {
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(res => handleResponse(res));
};

export const getMe = ({ token }) => {
    return fetch(`${MAIN_API_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => handleResponse(res))
};

export const getNews = ({ token }) => {
  return fetch(`${MAIN_API_URL}/articles`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => handleResponse(res))
};

export const createNews = (keyword, title, text, date, source, link, image, token) => {
  return fetch(`${MAIN_API_URL}/articles`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ keyword, title, text, date, source, link, image })
  })
  .then(res => handleResponse(res))
};

export const removeNews = (newsId, token) => {
  return fetch(`${MAIN_API_URL}/articles/${newsId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },

  })
  .then(res => handleResponse(res))
};