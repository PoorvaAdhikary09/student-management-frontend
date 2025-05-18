import axios from "axios";

const API_URL = "http://localhost:8000"; // Your FastAPI backend URL

export const getStudents = async () => {
  const response = await axios.get(`${API_URL}/students/`);
  return response.data;
};

export const getStudentData = async (id) => {
 const response = await axios.get(`${API_URL}/students/${id}`);
  return response.data;
};

export const addStudent = async (student) => {
  return await axios.post(`${API_URL}/students/`, student);
};

export const updateStudent = async (id, student) => {
  return await axios.put(`${API_URL}/students/${id}`, student);
};

export const deleteStudent = async (id) => {
  return await axios.delete(`${API_URL}/students/${id}`);
};

