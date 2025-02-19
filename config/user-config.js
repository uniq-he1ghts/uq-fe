import { api } from "@/config/axios.config";

// users
export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const createUsers = async (board) => {
  const response = await api.post("/users", board);
  return response.data;
};
export const deleteUsers = async (id) => {
  await api.delete(`/users/${id}`);
};

export const updateUsers = async (usersId, updatedFields) => {
  try {
    const response = await api.put(`/users/${usersId}`, updatedFields);
    return response.data;
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

// sub task
export const getSubUsers = async () => {
  const response = await api.get(`/users/viewUser`);
  return response.data;
};
export const createSubUsers = async (subusers) => {
  const response = await api.post("/users/subUsers", subusers);
  return response.data;
};
export const deleteSubUsers = async (id) => {
  await api.delete(`/users/subUsers/${id}`);
};

export const updateSubUsers = async (subusersId, updatedFields) => {
  try {
    const response = await api.put(
      `/users/subUsers/${subusersId}`,
      updatedFields
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
