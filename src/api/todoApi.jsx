import axios from "axios";

const BASE_URL = "https://685d7c4f769de2bf0860d677.mockapi.io";

export const getTodos = () => axios.get(`${BASE_URL}/Todos`);
export const getTodo = (id) => axios.get(`${BASE_URL}/Todos/${id}`);
export const addTodo = (data) => axios.post(`${BASE_URL}/Todos`, data);
export const updateTodo = (id, data) => axios.put(`${BASE_URL}/Todos/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${BASE_URL}/Todos/${id}`);
