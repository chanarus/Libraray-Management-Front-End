import axios from 'axios';

export const getRequest = (url, params) => {
  const requestOptions = {
    headers: {
      Accept: 'application/json'
    },
    params
  };

  return axios.get(url, requestOptions).then(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error.response.data);
    }
  );
};

export const postRequest = (url, body) => {
  const requestOptions = {
    headers: {
      Accept: 'application/json'
    }
  };

  return axios.post(url, body, requestOptions).then(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error.response.data);
    }
  );
};

export const putRequest = (url, body) => {
  const requestOptions = {
    headers: {
      Accept: 'application/json'
    }
  };

  return axios.put(url, body, requestOptions).then(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error.response.data);
    }
  );
};

export const deleteRequest = url => {
  const requestOptions = {
    headers: {
      Accept: 'application/json'
    }
  };

  return axios.delete(url, requestOptions).then(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error.response.data);
    }
  );
};
