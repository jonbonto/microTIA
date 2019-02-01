let apiUrl = 'https://id.techinasia.com/wp-json/techinasia/3.0/posts';
if (process.env.NODE_ENV === 'production') {
  apiUrl = 'http://cors.io/?' + apiUrl;
}

export const postService = {
  getPosts,
  getPost,
};
const nocors = {
  mode: 'no-cors'
};

function getPosts(page = 1) {
  const requestOptions = {
    ...nocors,
    method: 'GET'
  };

  return fetch(`${apiUrl}?page=${page}`, requestOptions).then(handleResponse);
}

function getPost(slug) {
  const requestOptions = {
    ...nocors,
    method: 'GET'
  };

  return fetch(`${apiUrl}/${slug}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
