"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Contact_1 = require("@/components/Contact");
// import Projects from "@/components/Projects/Projects";
var Skills_1 = require("@/components/Skills/Skills");
// import About from "@/pages/About";
var ComingSoon_1 = require("@/pages/ComingSoon");
var Home_1 = require("@/pages/Home");
var NotFound_1 = require("@/pages/NotFound");
var routes = [
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(Home_1.default, {}),
    },
    {
        path: "/about",
        element: (0, jsx_runtime_1.jsx)(ComingSoon_1.default, {}),
    },
    {
        path: "/skills",
        element: (0, jsx_runtime_1.jsx)(Skills_1.default, {}),
    },
    {
        path: "/projects",
        element: (0, jsx_runtime_1.jsx)(ComingSoon_1.default, {}),
    },
    {
        path: "/contact",
        element: (0, jsx_runtime_1.jsx)(Contact_1.default, {}),
    },
    {
        path: "*",
        element: (0, jsx_runtime_1.jsx)(NotFound_1.default, {}),
    },
];
exports.default = routes;
