import axios from "axios";

const url = "http://localhost:5000/";

export const fetchPost = async () => await axios.get(url);

export const createPost = async (newPost) => await axios.post(url, newPost);

export const updatePost = async (id, updatePost) => await axios.patch(`${url}${id}`, updatePost);

export const deletePost = async (id) => await axios.delete(`${url}${id}`);

export const likePost = async (id) => await axios.patch(`${url}${id}/likePost`);
