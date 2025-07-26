import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";
import MovieSection from "./components/movie";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookingForm from "./components/booking.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Hero id="home" />
        <Services id="packages" />
        <MovieSection id="trending" />
        <BookingForm id="booking" />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
