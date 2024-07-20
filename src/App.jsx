import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContainer from "./features/auth/AuthContainer";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AuthContainer />;
    </QueryClientProvider>
  );
}

export default App;
