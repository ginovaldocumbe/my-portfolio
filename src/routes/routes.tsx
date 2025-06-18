import Contact from "@/components/Contact";
// import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
// import About from "@/pages/About";
import ComingSoon from "@/pages/ComingSoon";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import type { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <ComingSoon />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/projects",
    element: <ComingSoon />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
