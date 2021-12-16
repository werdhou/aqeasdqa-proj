import Container from "./Container";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Welcome";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/covid-cert/status/d0asvdd1d8f-78cf9-43f68-93ee2-40cbf436as3a"
          element={<Container />}
        />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
