import { CONFIGS } from '../resources/index';

class ApiClient {
  constructor() {
    if (ApiClient.instance) {
      return ApiClient.instance;
    }

    this.baseUrl = CONFIGS.APIS.NYT.BASE;
    ApiClient.instance = this;
  }

  async get(url) {
    const response = await fetch(`${this.baseUrl}${url}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async post(url, data) {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async update(url, data) {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  async delete(url) {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}

const apiClient = new ApiClient();

export default apiClient;