import logoImg from '../assets/logo.svg';

const env = process.env;

export const appInfo = {
  name: env.REACT_APP_TITLE,
  logo: logoImg,

  baseApiURL: env.REACT_APP_API_URL,
  mainColor: env.REACT_APP_MAIN_COLOR,
};
