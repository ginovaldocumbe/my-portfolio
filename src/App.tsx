import { Routes, Route } from "react-router-dom";
import routes from "@/routes/routes";

function App() {
  const redirectedUrl = sessionStorage.redirect;
  if (redirectedUrl) {
    sessionStorage.removeItem("redirect");
    const url = new URL(redirectedUrl);
    const pathname = url.pathname.replace("/my-portfolio", "");
    window.history.replaceState(null, "", pathname);
  }

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
