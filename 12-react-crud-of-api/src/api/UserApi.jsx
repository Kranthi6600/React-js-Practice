import axios from 'axios'

const API_BASE = 'https://6978df2dcd4fe130e3da8055.mockapi.io/api/v1/users';

export const getUsers = () => axios.get(API_BASE);

export const addUser = (user) => axios.post(API_BASE, user);

export const updateUser = (id, user) => axios.put(`${API_BASE}/${id}`, user);

export const deleteUser = (id) => axios.delete(`${API_BASE}/${id}`);