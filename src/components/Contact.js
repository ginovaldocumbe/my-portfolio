import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/Contact.jsx
import { useState, useEffect } from 'react';
import { MapPinned, Mail, Phone, Github, Linkedin, Twitter, Dribbble } from 'lucide-react'; // Ícones do Lucide React
import { Form, Input, Button, Checkbox, message } from 'antd'; // Componentes Ant Design
import { LoadingOutlined } from '@ant-design/icons'; // Ícone de carregamento do AntD
const { TextArea } = Input;
const Contact = () => {
    const [form] = Form.useForm(); // Hook para gerir o formulário AntD
    const [loading, setLoading] = useState(false); // Estado para o carregamento do envio
    const onFinish = async (values) => {
        // `values` contém os dados validados do formulário
        // console.log('Valores do formulário AntD:', values);
        setLoading(true); // Inicia o estado de carregamento
        // --- AQUI É ONDE VAI INTEGRAR O SEU SERVIÇO DE BACKEND/FORMULÁRIOS ---
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values), // Os valores já incluem o consentimento
            });
            if (response.ok) {
                message.success('Mensagem enviada com sucesso! Em breve entrarei em contacto.');
                form.resetFields(); // Limpa os campos do formulário
            }
            else {
                const errorData = await response.json();
                message.error(`Ocorreu um erro ao enviar a mensagem: ${errorData.message || 'Tente novamente.'}`);
            }
        }
        catch (error) {
            console.error('Erro ao enviar formulário:', error);
            message.error('Não foi possível enviar a sua mensagem. Verifique a sua ligação à internet.');
        }
        finally {
            setLoading(false); // Termina o estado de carregamento
        }
        // --- FIM DA INTEGRAÇÃO DO BACKEND ---
    };
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        }, { threshold: 0.2 });
        const element = document.getElementById("contact-section");
        if (element)
            observer.observe(element);
        return () => {
            if (element)
                observer.unobserve(element);
        };
    }, []);
    return (_jsx("section", { id: "contact", className: "py-20 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-6", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800", children: "Entrar em Contacto" }), _jsx("p", { className: "text-gray-700 text-center max-w-2xl mx-auto mb-16 leading-relaxed", children: "Tem um projeto em mente ou quer discutir uma potencial colabora\u00E7\u00E3o? Gostaria muito de saber a sua opini\u00E3o." }), _jsxs("div", { className: `flex flex-col md:flex-row gap-12 ${isVisible ? "animate-fade-in-up visible" : "opacity-0"}`, id: "contact-section", children: [_jsx("div", { className: "w-full md:w-1/3", children: _jsxs("div", { className: "bg-white p-8 rounded-lg shadow-md h-full", children: [_jsx("h3", { className: "text-xl font-bold mb-6 text-gray-800", children: "Informa\u00E7\u00F5es de Contacto" }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "w-10 h-10 flex items-center justify-center text-blue-600 mr-4", children: _jsx(MapPinned, { size: 24 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-800", children: "Localiza\u00E7\u00E3o" }), _jsx("p", { className: "text-gray-600", children: "Maputo, Mo\u00E7ambique" })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "w-10 h-10 flex items-center justify-center text-blue-600 mr-4", children: _jsx(Mail, { size: 24 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-800", children: "Email" }), _jsx("p", { className: "text-gray-600", children: _jsx("a", { href: "mailto:ginovaldo@example.com", className: "hover:underline", children: "ginovaldo@example.com" }) })] })] }), _jsxs("div", { className: "flex items-start", children: [_jsx("div", { className: "w-10 h-10 flex items-center justify-center text-blue-600 mr-4", children: _jsx(Phone, { size: 24 }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-800", children: "Telefone" }), _jsx("p", { className: "text-gray-600", children: _jsx("a", { href: "tel:+258841234567", className: "hover:underline", children: "+258 84 123 4567" }) })] })] })] }), _jsxs("div", { className: "mt-10", children: [_jsx("h3", { className: "text-xl font-bold mb-6 text-gray-800", children: "Siga-me" }), _jsxs("div", { className: "flex space-x-4", children: [_jsx("a", { href: "https://github.com/o-ginovaldo", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300", children: _jsx(Github, { size: 20 }) }), _jsx("a", { href: "https://linkedin.com/in/o-ginovaldo", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300", children: _jsx(Linkedin, { size: 20 }) }), _jsx("a", { href: "https://twitter.com/o-ginovaldo", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300", children: _jsx(Twitter, { size: 20 }) }), _jsx("a", { href: "https://dribbble.com/o-ginovaldo", target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300", children: _jsx(Dribbble, { size: 20 }) })] })] })] }) }), _jsx("div", { className: "w-full md:w-2/3", children: _jsx("div", { className: "bg-white p-8 rounded-lg shadow-md", children: _jsxs(Form, { form: form, name: "contact_form", layout: "vertical" // Labels acima dos inputs
                                    , onFinish: onFinish, initialValues: { consent: false }, className: "space-y-6" // Tailwind CSS para espaçamento
                                    , children: [_jsx(Form.Item, { name: "name", label: _jsx("span", { className: "text-gray-700", children: "O seu Nome" }), rules: [{ required: true, message: 'Por favor, insira o seu nome!' }], children: _jsx(Input, { placeholder: "O seu nome completo", className: "ant-input-lg" }) }), _jsx(Form.Item, { name: "email", label: _jsx("span", { className: "text-gray-700", children: "O seu Email" }), rules: [
                                                { required: true, message: 'Por favor, insira o seu email!' },
                                                { type: 'email', message: 'Por favor, insira um email válido!' }
                                            ], children: _jsx(Input, { placeholder: "email@exemplo.com", className: "ant-input-lg" }) }), _jsx(Form.Item, { name: "subject", label: _jsx("span", { className: "text-gray-700", children: "Assunto" }), rules: [{ required: true, message: 'Por favor, insira o assunto!' }], children: _jsx(Input, { placeholder: "Assunto da mensagem", className: "ant-input-lg" }) }), _jsx(Form.Item, { name: "message", label: _jsx("span", { className: "text-gray-700", children: "A sua Mensagem" }), rules: [{ required: true, message: 'Por favor, insira a sua mensagem!' }], children: _jsx(TextArea, { rows: 5, placeholder: "Escreva a sua mensagem aqui...", className: "ant-input-lg" }) }), _jsx(Form.Item, { name: "consent", valuePropName: "checked" // Para o Checkbox, usa 'checked' em vez de 'value'
                                            , rules: [{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Deve aceitar a política de privacidade')) }], children: _jsx(Checkbox, { children: _jsxs("span", { className: "text-gray-600 text-sm", children: ["Concordo com o processamento dos dados pessoais de acordo com a ", _jsx("a", { href: "/politica-de-privacidade", className: "text-blue-600 hover:underline", children: "pol\u00EDtica de privacidade" }), "."] }) }) }), _jsx(Form.Item, { children: _jsx(Button, { type: "primary" // Estilo primário do AntD (geralmente azul)
                                                , htmlType: "submit", loading: loading, icon: loading ? _jsx(LoadingOutlined, {}) : null, className: "w-full md:w-auto px-8 py-3 rounded-md font-medium transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50", 
                                                // As classes Tailwind sobrepõem/complementam as do AntD.
                                                // Ajuste o `bg-blue-600` e `hover:bg-blue-700` no seu CSS global se as cores do AntD não combinarem.
                                                style: { height: 'auto', padding: '12px 32px', backgroundColor: '#2563EB', borderColor: '#2563EB' }, children: loading ? 'A enviar...' : 'Enviar Mensagem' }) })] }) }) })] })] }) }));
};
export default Contact;
