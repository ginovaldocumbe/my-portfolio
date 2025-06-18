"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var antd_1 = require("antd");
var Header = function () {
    var items = [
        {
            key: "about",
            label: ((0, jsx_runtime_1.jsx)("a", { href: "#about", className: "text-white hover:text-primary transition-colors", children: "Sobre" })),
        },
        {
            key: "skills",
            label: ((0, jsx_runtime_1.jsx)("a", { href: "#skills", className: "text-white hover:text-primary transition-colors", children: "Habilidades" })),
        },
        {
            key: "projects",
            label: ((0, jsx_runtime_1.jsx)("a", { href: "#projects", className: "text-white hover:text-primary transition-colors", children: "Projectos" })),
        },
        {
            key: "contact",
            label: ((0, jsx_runtime_1.jsx)("a", { href: "#contact", className: "text-white hover:text-primary transition-colors", children: "Contactos" })),
        },
    ];
    return ((0, jsx_runtime_1.jsx)(antd_1.Layout.Header, { style: {
            position: "sticky",
            top: 0,
            zIndex: 1000,
            width: "100%",
            paddingLeft: 5,
            paddingRight: 5,
            background: "rgba(255, 255, 255, 0.2)", // Escurecido para contraste
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)", // Elevation aqui
            backdropFilter: "blur(10px)", // efeito opcional de vidro
            transition: "box-shadow 0.3s ease-in-out",
        }, children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center w-full", children: [(0, jsx_runtime_1.jsx)("a", { href: "/", className: "text-2xl font-(family-name:--font-pacifico) text-white", children: "GC" }), (0, jsx_runtime_1.jsx)(antd_1.Menu, { mode: "horizontal", defaultSelectedKeys: ["about"], items: items, style: {
                        justifyContent: "flex-end",
                        width: "100%",
                        backgroundColor: "transparent",
                        borderBottom: "none",
                    } })] }) }));
};
exports.default = Header;
