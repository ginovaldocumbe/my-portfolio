"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("@/routes/routes");
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: routes_1.default.map(function (route, index) { return ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: route.path, element: route.element }, index)); }) }) }));
}
exports.default = App;
