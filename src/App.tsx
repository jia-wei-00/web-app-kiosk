import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/services";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Hero />
      <Services />
    </ThemeProvider>
  );
}

export default App;
