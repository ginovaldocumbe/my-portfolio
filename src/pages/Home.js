"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Header_1 = require("@/components/Header");
var Hero_1 = require("@/components/Hero");
var Experience_1 = require("@/components/Experience/Experience");
var Skills_1 = require("@/components/Skills/Skills");
var Projects_1 = require("@/components/Projects/Projects");
var Contact_1 = require("@/components/Contact");
var Footer_1 = require("@/components/Footer");
var About_1 = require("@/components/About");
var Home = function () {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)(Hero_1.default, {}), (0, jsx_runtime_1.jsx)(About_1.default, {}), (0, jsx_runtime_1.jsx)(Experience_1.default, {}), (0, jsx_runtime_1.jsx)(Skills_1.default, {}), (0, jsx_runtime_1.jsx)(Projects_1.default, {}), (0, jsx_runtime_1.jsx)(Contact_1.default, {}), (0, jsx_runtime_1.jsx)(Footer_1.default, {})] }));
};
exports.default = Home;
