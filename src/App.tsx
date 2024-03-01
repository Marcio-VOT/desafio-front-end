import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppStyle } from "./AppStyle";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {

  return (
    <AppStyle>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </BrowserRouter>
    </AppStyle>
  )
}

export default App
