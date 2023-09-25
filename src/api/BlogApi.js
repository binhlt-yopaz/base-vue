import BaseApi from './BaseApi';

const baseUrl = 'api/v1';

class BlogApi extends BaseApi {
  getBlog() {
    console.log('getBlog');
    return this.axios.get(this.baseUrl + '/categories').catch((error) => {
      throw new Error(error);
    });
  }
}

export default new BlogApi(baseUrl);
