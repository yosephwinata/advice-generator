import axiosInstance from "../axios/axiosInstance";

interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

export const getAdvice = async (): Promise<AdviceResponse> => {
  try {
    const response = await axiosInstance.get<AdviceResponse>("/advice");
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Advice could not be loaded");
  }
};
