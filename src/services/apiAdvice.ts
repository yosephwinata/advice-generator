import axiosInstance from "../axios/axiosInstance";

export const getAdvice = async () => {
  try {
    const response = await axiosInstance.get("/advice");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Advice could not be loaded");
  }
};
