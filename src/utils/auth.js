import Cookies from 'js-cookie';
// import axios from 'axios';

const tokenKey = 'token';

export async function isLogged() {
  // console.log('check token');
  if (getToken() === undefined) {
    return false;
  }
  return true;
  // return await axios.get(process.env.BASE_API + '/users/base-info',
  //   {
  //     headers: {
  //       Authorization: `Bearer ${getToken()}`,
  //     },
  //   }
  // ).then(() => {
  //   return true;
  // }).catch(async() => {
  //   removeToken();
  //   return false;
  // });
}

export function setToken(token) {
  return Cookies.set(tokenKey, token);
}

export function removeToken() {
  return Cookies.remove(tokenKey);
}

export function getToken() {
  return Cookies.get(tokenKey);
}
