import {apiClient} from '../lib';
import {CONFIGS} from '../resources';

async function getMostViewedArticles() {
  const result = await apiClient.get(
    '/svc/mostpopular/v2/viewed/7.json?api-key=' + CONFIGS.APIS.NYT.KEY,
  );

  return await result;
}

const articlesServices = {
  getMostViewedArticles,
};

export default articlesServices;
