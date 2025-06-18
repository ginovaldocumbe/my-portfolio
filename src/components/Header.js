import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Menu, Layout } from "antd";
const Header = () => {
    const items = [
        {
            key: "about",
            label: (_jsx("a", { href: "#about", className: "text-white hover:text-primary transition-colors", children: "Sobre" })),
        },
        {
            key: "skills",
            label: (_jsx("a", { href: "#skills", className: "text-white hover:text-primary transition-colors", children: "Habilidades" })),
        },
        {
            key: "projects",
            label: (_jsx("a", { href: "#projects", className: "text-white hover:text-primary transition-colors", children: "Projectos" })),
        },
        {
            key: "contact",
            label: (_jsx("a", { href: "#contact", className: "text-white hover:text-primary transition-colors", children: "Contactos" })),
        },
    ];
    return (_jsx(Layout.Header, { style: {
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
        }, children: _jsxs("div", { className: "flex items-center w-full", children: [_jsx("a", { href: "/", className: "text-2xl font-(family-name:--font-pacifico) text-white", children: "GC" }), _jsx(Menu, { mode: "horizontal", defaultSelectedKeys: ["about"], items: items, style: {
                        justifyContent: "flex-end",
                        width: "100%",
                        backgroundColor: "transparent",
                        borderBottom: "none",
                    } })] }) }));
};
export default Header;
