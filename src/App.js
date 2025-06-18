import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "@/routes/routes";
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: routes.map((route, index) => (_jsx(Route, { path: route.path, element: route.element }, index))) }) }));
}
export default App;
