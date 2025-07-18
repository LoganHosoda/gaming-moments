import axios from 'axios';

const API = axios.create({ 
  baseURL: process.env.NODE_ENV === 'production' 
    ? '' // Empty string for same-origin requests in production
    : 'http://localhost:5000'
});

API.interceptors.request.use((req) => {
  if(localStorage.getItem('profile')) {
    if(JSON.parse(localStorage.getItem('profile')).token) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    } else {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).result.sub}`;
    }
  }

  return req;
});

export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`); 
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const googleSignIn = (formData) => API.post('/user/googlesignin', formData);
