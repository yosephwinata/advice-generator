import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdviceCard from "./features/advice/AdviceCard";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="bg-dark-blue flex min-h-screen items-center justify-center font-extrabold">
        <AdviceCard />
      </div>
    </QueryClientProvider>
  );
}

export default App;
