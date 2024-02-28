import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home.page";
import { Quiz } from "./pages/quiz/quiz.page";
import { theme } from "./theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/quiz/:quiz-id" element={<Quiz />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
