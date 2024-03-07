import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "../../services/apiAdvice";

export const useAdvice = () => {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["advice"],
    queryFn: getAdvice,
  });

  return { isLoading, data, error, refetch };
};
