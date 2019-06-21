
const API_ENDPOINT = 'https://uxcandy.com/~shapoval/test-task-backend/v2/';

class API {

  async getData() {
    const url = `${API_ENDPOINT}?developer=Konstantin`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Connection failed, HTTP status ${response.status}`);
    }

    const data = await response.json();

    return data;
  };


  async selectPage(page) {
    const url = `${API_ENDPOINT}?developer=Konstantin&page=${page}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Connection failed, HTTP status ${response.status}`);
    }

    const data = await response.json();

    return data;
  };


  async putData(tasks) {
    const url = `${API_ENDPOINT}create?developer=Konstantin`;

    const formData = new FormData();
    formData.append("username", tasks.name);
    formData.append("email", tasks.email);
    formData.append("text", tasks.text);

    const fetchInit = {
      method: 'POST',
      body: formData
    }
    const response = await fetch(url, fetchInit);

    if (!response.ok) {
      throw new Error(`Connection failed, HTTP status ${response.status}`);
    }

    const createData = await response.json();
    return createData;
  };


  async updateData(data) {
    const url = `${API_ENDPOINT}edit/${data.id}?developer=Konstantin`;

    const formData = new FormData();
    formData.append("text", data.text);
    formData.append("token", data.token);

    const fetchInit = {
      method: 'POST',
      body: formData
    }
    const response = await fetch(url, fetchInit);

    if (!response.ok) {
      throw new Error(`Connection failed, HTTP status ${response.status}`);
    }

    const updateData = await response.json();
    return updateData;
  };


  async sortByEmail(page) {
    const url = `${API_ENDPOINT}?developer=Konstantin&page=${page}&sort_field=email`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Connection failed, HTTP status ${response.status}`);
    }

    const data = await response.json();

    return data;
  };


  async sortByUsername(page) {
    const url = `${API_ENDPOINT}?developer=Konstantin&page=${page}&sort_field=username`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Connection failed, HTTP status ${response.status}`);
    }

    const data = await response.json();

    return data;
  };


  async getToken(values) {
    const url = `${API_ENDPOINT}login?developer=Konstantin`;

    const formData = new FormData();
    formData.append("username", values.name);
    formData.append("password", values.password);

    const fetchInit = {
      method: 'POST',
      body: formData
    }
    const response = await fetch(url, fetchInit);

    if (!response.ok) {
      throw new Error(`Connection failed, HTTP status ${response.status}`);
    }

    const data = await response.json();
    return data;
  };
  

}

export default new API();