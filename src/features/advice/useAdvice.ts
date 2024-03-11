import { useQuery } from "@tanstack/react-query";
import { getAdvice } from "../../services/apiAdvice";

export const useAdvice = () => {
  const query = useQuery({
    queryKey: ["advice"],
    queryFn: getAdvice,
    // refetchOnWindowFocus: false, // default: true
  });
  // console.log("query", query); // Uncomment for debugging
  const { data, error, refetch, isLoading, isFetching, isRefetching } = query;

  return { data, error, refetch, isLoading, isFetching, isRefetching };
};
