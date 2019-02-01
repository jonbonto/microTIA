import axios from 'axios'

const apiUrl = 'https://id.techinasia.com/wp-json/techinasia/3.0/posts';

export const postService = {
  getPosts,
  getPost,
};

function getPosts(page = 1) {
  // const requestOptions = {
  //   method: 'GET'
  // };

  return axios.get(`${apiUrl}?page=${page}`).then(response => response.data).catch(error => Promise.reject(error));
}

function getPost(slug) {
  // const requestOptions = {
  //   method: 'GET'
  // };

  return axios.get(`${apiUrl}/${slug}`).then(response => response.data).catch(error => Promise.reject(error));
}

// function handleResponse(response) {
//   return response.text().then(text => {
//     const data = text && JSON.parse(text);
//     if (!response.ok) {
//       const error = (data && data.message) || response.statusText;
//       return Promise.reject(error);
//     }

//     return data;
//   });
// }
