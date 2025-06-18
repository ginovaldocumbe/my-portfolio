import { jsx as _jsx } from "react/jsx-runtime";
import Contact from "@/components/Contact";
// import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
// import About from "@/pages/About";
import ComingSoon from "@/pages/ComingSoon";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
const routes = [
    {
        path: "/",
        element: _jsx(Home, {}),
    },
    {
        path: "/about",
        element: _jsx(ComingSoon, {}),
    },
    {
        path: "/skills",
        element: _jsx(Skills, {}),
    },
    {
        path: "/projects",
        element: _jsx(ComingSoon, {}),
    },
    {
        path: "/contact",
        element: _jsx(Contact, {}),
    },
    {
        path: "*",
        element: _jsx(NotFound, {}),
    },
];
export default routes;
