"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// Skills.jsx
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var SkillBar_1 = require("@/components/Skills/SkillBar"); // Certifique-se que o caminho está correto
var Skills = function () {
    var _a = (0, react_1.useState)(false), isVisible = _a[0], setIsVisible = _a[1];
    var skillCategories = (0, react_1.useMemo)(function () { return [
        {
            id: 'frontend',
            title: 'Desenvolvimento Frontend',
            icon: lucide_react_1.Code,
            iconBgColor: 'bg-blue-50',
            iconColorHex: '#3b82f6', // Cor primária AntD
            skills: [
                { label: 'JavaScript/TypeScript', percent: 95 },
                { label: 'React.js', percent: 90 },
                { label: 'Vue.js / Quasar Framework', percent: 88 },
                { label: 'HTML5/CSS3', percent: 98 },
                { label: 'Tailwind CSS / SASS', percent: 92 },
            ],
        },
        {
            id: 'backend',
            title: 'Desenvolvimento Backend',
            icon: lucide_react_1.Server,
            iconBgColor: 'bg-green-50',
            iconColorHex: '#10b981', // Cor secundária AntD
            skills: [
                { label: 'Node.js (Express/NestJS)', percent: 88 },
                { label: 'Python (Django/Flask)', percent: 85 },
                { label: 'SQL / NoSQL (MongoDB, PostgreSQL)', percent: 90 },
                { label: 'APIs RESTful / GraphQL', percent: 82 },
            ],
        },
        {
            id: 'mobile',
            title: 'Desenvolvimento Mobile',
            icon: lucide_react_1.Smartphone,
            iconBgColor: 'bg-purple-50',
            iconColorHex: '#8b5cf6', // Cor roxa AntD
            skills: [
                { label: 'Quasar Framework', percent: 90 },
                { label: 'React Native', percent: 75 },
                { label: 'Ionic', percent: 70 },
            ],
        },
        {
            id: 'tools-other',
            title: 'Ferramentas e Outras Habilidades',
            icon: lucide_react_1.Wrench,
            iconBgColor: 'bg-yellow-50',
            iconColorHex: '#f59e0b', // Cor amarela AntD
            skills: [
                { label: 'Git / GitHub / GitLab', percent: 95 },
                { label: 'Docker / CI/CD', percent: 80 },
                { label: 'Metodologias Ágeis (Scrum/Kanban)', percent: 85 },
                { label: 'UI/UX Design', percent: 78 },
            ],
        },
    ]; }, []);
    (0, react_1.useEffect)(function () {
        var element = document.getElementById("skills-section");
        if (window.location.hash === "#skills" && element) {
            setIsVisible(true);
        }
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.1 });
        if (element)
            observer.observe(element);
        return function () {
            if (element)
                observer.unobserve(element);
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("section", { id: "skills", className: "py-10 bg-gray-100", children: (0, jsx_runtime_1.jsxs)("div", { className: " mx-auto px-6", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-16 text-gray-800", children: "Habilidades & Tecnologias" }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5", id: "skills-section", children: skillCategories.map(function (category, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-8 rounded-lg shadow-md transition delay-50 duration-100 ease-in-out hover:-translate-y-1 hover:scale-105\n              ".concat(isVisible ? 'visible' : ''), style: { transitionDelay: "".concat(index * 0.15, "s") }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-16 h-16 ".concat(category.iconBgColor, " rounded-lg flex items-center justify-center mb-6"), children: [category.icon && (0, jsx_runtime_1.jsx)(category.icon, { className: "w-8 h-8", style: { color: category.iconColorHex } }), " "] }), (0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-6 text-gray-800", children: category.title }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: category.skills.map(function (skill, skillIdx) { return ((0, jsx_runtime_1.jsx)(SkillBar_1.default, { label: skill.label, percent: isVisible ? skill.percent : 0, color: category.iconColorHex }, skillIdx)); }) })] }, category.id)); }) })] }) }));
};
exports.default = Skills;
