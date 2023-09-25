import BaseApi from './BaseApi';

const baseUrl = 'auth';

class AuthApi extends BaseApi {
  login(data) {
    return this.axios.post(this.baseUrl + '/login', data).catch((error) => {
      return error.response;
    });
  }
  forgotPassword(data) {
    return this.axios.post(this.baseUrl + '/forgot-password', data);
  }
  renewPassword(data) {
    return this.axios.post(this.baseUrl + '/renew-password', data);
  }
  verifyExpired(data) {
    return this.axios.post(this.baseUrl + '/verify-expired', data);
  }
}

export default new AuthApi(baseUrl);
