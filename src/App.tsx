import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@/routes/routes";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.PROD ? '/my-portfolio' : '/'}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
