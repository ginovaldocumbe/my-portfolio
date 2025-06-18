"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// src/components/Contact.jsx
var react_1 = require("react");
var lucide_react_1 = require("lucide-react"); // Ícones do Lucide React
var antd_1 = require("antd"); // Componentes Ant Design
var icons_1 = require("@ant-design/icons"); // Ícone de carregamento do AntD
var TextArea = antd_1.Input.TextArea;
var Contact = function () {
    var form = antd_1.Form.useForm()[0]; // Hook para gerir o formulário AntD
    var _a = (0, react_1.useState)(false), loading = _a[0], setLoading = _a[1]; // Estado para o carregamento do envio
    var onFinish = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var response, errorData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    // `values` contém os dados validados do formulário
                    // console.log('Valores do formulário AntD:', values);
                    setLoading(true); // Inicia o estado de carregamento
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 6, 7, 8]);
                    return [4 /*yield*/, fetch('/api/contact', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(values), // Os valores já incluem o consentimento
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) return [3 /*break*/, 3];
                    antd_1.message.success('Mensagem enviada com sucesso! Em breve entrarei em contacto.');
                    form.resetFields(); // Limpa os campos do formulário
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, response.json()];
                case 4:
                    errorData = _a.sent();
                    antd_1.message.error("Ocorreu um erro ao enviar a mensagem: ".concat(errorData.message || 'Tente novamente.'));
                    _a.label = 5;
                case 5: return [3 /*break*/, 8];
                case 6:
                    error_1 = _a.sent();
                    console.error('Erro ao enviar formulário:', error_1);
                    antd_1.message.error('Não foi possível enviar a sua mensagem. Verifique a sua ligação à internet.');
                    return [3 /*break*/, 8];
                case 7:
                    setLoading(false); // Termina o estado de carregamento
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    }); };
    var _b = (0, react_1.useState)(false), isVisible = _b[0], setIsVisible = _b[1];
    (0, react_1.useEffect)(function () {
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.2 });
        var element = document.getElementById("contact-section");
        if (element)
            observer.observe(element);
        return function () {
            if (element)
                observer.unobserve(element);
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("section", { id: "contact", className: "py-20 bg-gray-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-6", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800", children: "Entrar em Contacto" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 text-center max-w-2xl mx-auto mb-16 leading-relaxed", children: "Tem um projeto em mente ou quer discutir uma potencial colabora\u00E7\u00E3o? Gostaria muito de saber a sua opini\u00E3o." }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col md:flex-row gap-12 ".concat(isVisible ? "animate-fade-in-up visible" : "opacity-0"), id: "contact-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-1/3", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-8 rounded-lg shadow-md h-full", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-6 text-gray-800", children: "Informa\u00E7\u00F5es de Contacto" }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 flex items-center justify-center text-blue-600 mr-4", children: (0, jsx_runtime_1.jsx)(lucide_react_1.MapPinned, { size: 24 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-medium text-gray-800", children: "Localiza\u00E7\u00E3o" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: "Maputo, Mo\u00E7ambique" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 flex items-center justify-center text-blue-600 mr-4", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Mail, { size: 24 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-medium text-gray-800", children: "Email" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: (0, jsx_runtime_1.jsx)("a", { href: "mailto:ginovaldo@example.com", className: "hover:underline", children: "ginovaldo@example.com" }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-start", children: [(0, jsx_runtime_1.jsx)("div", { className: "w-10 h-10 flex items-center justify-center text-blue-600 mr-4", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Phone, { size: 24 }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { className: "font-medium text-gray-800", children: "Telefone" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: (0, jsx_runtime_1.jsx)("a", { href: "tel:+258841234567", className: "hover:underline", children: "+258 84 123 4567" }) })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-10", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl font-bold mb-6 text-gray-800", children: "Siga-me" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-4", children: [(0, jsx_runtime_1.jsx)("a", { href: "https://github.com/o-ginovaldo", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Github, { size: 20 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://linkedin.com/in/o-ginovaldo", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Linkedin, { size: 20 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://twitter.com/o-ginovaldo", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Twitter, { size: 20 }) }), (0, jsx_runtime_1.jsx)("a", { href: "https://dribbble.com/o-ginovaldo", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300", children: (0, jsx_runtime_1.jsx)(lucide_react_1.Dribbble, { size: 20 }) })] })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "w-full md:w-2/3", children: (0, jsx_runtime_1.jsx)("div", { className: "bg-white p-8 rounded-lg shadow-md", children: (0, jsx_runtime_1.jsxs)(antd_1.Form, { form: form, name: "contact_form", layout: "vertical" // Labels acima dos inputs
                                    , onFinish: onFinish, initialValues: { consent: false }, className: "space-y-6" // Tailwind CSS para espaçamento
                                    , children: [(0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: "name", label: (0, jsx_runtime_1.jsx)("span", { className: "text-gray-700", children: "O seu Nome" }), rules: [{ required: true, message: 'Por favor, insira o seu nome!' }], children: (0, jsx_runtime_1.jsx)(antd_1.Input, { placeholder: "O seu nome completo", className: "ant-input-lg" }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: "email", label: (0, jsx_runtime_1.jsx)("span", { className: "text-gray-700", children: "O seu Email" }), rules: [
                                                { required: true, message: 'Por favor, insira o seu email!' },
                                                { type: 'email', message: 'Por favor, insira um email válido!' }
                                            ], children: (0, jsx_runtime_1.jsx)(antd_1.Input, { placeholder: "email@exemplo.com", className: "ant-input-lg" }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: "subject", label: (0, jsx_runtime_1.jsx)("span", { className: "text-gray-700", children: "Assunto" }), rules: [{ required: true, message: 'Por favor, insira o assunto!' }], children: (0, jsx_runtime_1.jsx)(antd_1.Input, { placeholder: "Assunto da mensagem", className: "ant-input-lg" }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: "message", label: (0, jsx_runtime_1.jsx)("span", { className: "text-gray-700", children: "A sua Mensagem" }), rules: [{ required: true, message: 'Por favor, insira a sua mensagem!' }], children: (0, jsx_runtime_1.jsx)(TextArea, { rows: 5, placeholder: "Escreva a sua mensagem aqui...", className: "ant-input-lg" }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { name: "consent", valuePropName: "checked" // Para o Checkbox, usa 'checked' em vez de 'value'
                                            , rules: [{ validator: function (_, value) { return value ? Promise.resolve() : Promise.reject(new Error('Deve aceitar a política de privacidade')); } }], children: (0, jsx_runtime_1.jsx)(antd_1.Checkbox, { children: (0, jsx_runtime_1.jsxs)("span", { className: "text-gray-600 text-sm", children: ["Concordo com o processamento dos dados pessoais de acordo com a ", (0, jsx_runtime_1.jsx)("a", { href: "/politica-de-privacidade", className: "text-blue-600 hover:underline", children: "pol\u00EDtica de privacidade" }), "."] }) }) }), (0, jsx_runtime_1.jsx)(antd_1.Form.Item, { children: (0, jsx_runtime_1.jsx)(antd_1.Button, { type: "primary" // Estilo primário do AntD (geralmente azul)
                                                , htmlType: "submit", loading: loading, icon: loading ? (0, jsx_runtime_1.jsx)(icons_1.LoadingOutlined, {}) : null, className: "w-full md:w-auto px-8 py-3 rounded-md font-medium transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50", 
                                                // As classes Tailwind sobrepõem/complementam as do AntD.
                                                // Ajuste o `bg-blue-600` e `hover:bg-blue-700` no seu CSS global se as cores do AntD não combinarem.
                                                style: { height: 'auto', padding: '12px 32px', backgroundColor: '#2563EB', borderColor: '#2563EB' }, children: loading ? 'A enviar...' : 'Enviar Mensagem' }) })] }) }) })] })] }) }));
};
exports.default = Contact;
