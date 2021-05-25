import axios from 'axios';
import { appInfo } from '../configs/appInfo';

const api = axios.create({
  baseURL: appInfo.baseApiURL,
});

export default api;
