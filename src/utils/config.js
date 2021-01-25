import defaultImg from '../images/default-news.jpg';

export const MAIN_API_URL = 'https://api.medjestik.news.students.nomoreparties.xyz';
export const NEWS_API_KEY = '5ca7124814d249cea46d441e72d02c6e';
export const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
export const PROXY_URL_EVERYTHING = 'https://nomoreparties.co/news/v2/everything';
export const PROXY_URL_HEADLINES = 'https://nomoreparties.co/news/v2/top-headlines';//Планы по доработке проекта: фильтр новостей
export const PAGE_SIZE = 100;
export const STEP_COUNT_NEWS = 3;


const dateTo = new Date().toISOString().slice(0, 10);

const dateFrom = new Date(Date.now() - (24 * 3600 * 1000 * 7)).toISOString().slice(0, 10);

export const DATE_TO = dateTo;
export const DATE_FROM = dateFrom;
export const DEFAULT_NEWS_IMG = defaultImg;