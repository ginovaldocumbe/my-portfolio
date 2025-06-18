// src/components/Contact.jsx
import  { useState, useEffect } from 'react';
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
      const response = await fetch('/api/contact', { // Mude '/api/contact' para o seu endpoint real
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Os valores já incluem o consentimento
      });

      if (response.ok) {
        message.success('Mensagem enviada com sucesso! Em breve entrarei em contacto.');
        form.resetFields(); // Limpa os campos do formulário
      } else {
        const errorData = await response.json();
        message.error(`Ocorreu um erro ao enviar a mensagem: ${errorData.message || 'Tente novamente.'}`);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      message.error('Não foi possível enviar a sua mensagem. Verifique a sua ligação à internet.');
    } finally {
      setLoading(false); // Termina o estado de carregamento
    }
    // --- FIM DA INTEGRAÇÃO DO BACKEND ---
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("contact-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Entrar em Contacto
        </h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
          Tem um projeto em mente ou quer discutir uma potencial colaboração? Gostaria muito de saber a sua opinião.
        </p>

        <div className={`flex flex-col md:flex-row gap-12 ${isVisible ? "animate-fade-in-up visible" : "opacity-0"}`} id="contact-section">
          {/* Informações de Contacto */}
          <div className="w-full md:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Informações de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-blue-600 mr-4">
                    <MapPinned size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Localização</h4>
                    <p className="text-gray-600">Maputo, Moçambique</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-blue-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <p className="text-gray-600"><a href="mailto:ginovaldo@example.com" className="hover:underline">ginovaldo@example.com</a></p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 flex items-center justify-center text-blue-600 mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Telefone</h4>
                    <p className="text-gray-600"><a href="tel:+258841234567" className="hover:underline">+258 84 123 4567</a></p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h3 className="text-xl font-bold mb-6 text-gray-800">Siga-me</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/o-ginovaldo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/o-ginovaldo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://twitter.com/o-ginovaldo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Twitter size={20} />
                  </a>
                  <a href="https://dribbble.com/o-ginovaldo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300">
                    <Dribbble size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contacto Ant Design */}
          <div className="w-full md:w-2/3">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Form
                form={form} // Conecta o formulário ao hook
                name="contact_form"
                layout="vertical" // Labels acima dos inputs
                onFinish={onFinish} // Função chamada no envio (após validação)
                initialValues={{ consent: false }} // Valor inicial para o checkbox
                className="space-y-6" // Tailwind CSS para espaçamento
              >
                <Form.Item
                  name="name"
                  label={<span className="text-gray-700">O seu Nome</span>}
                  rules={[{ required: true, message: 'Por favor, insira o seu nome!' }]}
                >
                  <Input placeholder="O seu nome completo" className="ant-input-lg" />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<span className="text-gray-700">O seu Email</span>}
                  rules={[
                    { required: true, message: 'Por favor, insira o seu email!' },
                    { type: 'email', message: 'Por favor, insira um email válido!' }
                  ]}
                >
                  <Input placeholder="email@exemplo.com" className="ant-input-lg" />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label={<span className="text-gray-700">Assunto</span>}
                  rules={[{ required: true, message: 'Por favor, insira o assunto!' }]}
                >
                  <Input placeholder="Assunto da mensagem" className="ant-input-lg" />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<span className="text-gray-700">A sua Mensagem</span>}
                  rules={[{ required: true, message: 'Por favor, insira a sua mensagem!' }]}
                >
                  <TextArea rows={5} placeholder="Escreva a sua mensagem aqui..." className="ant-input-lg" />
                </Form.Item>

                <Form.Item
                  name="consent"
                  valuePropName="checked" // Para o Checkbox, usa 'checked' em vez de 'value'
                  rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject(new Error('Deve aceitar a política de privacidade')) }]}
                >
                  <Checkbox>
                    <span className="text-gray-600 text-sm">
                      Concordo com o processamento dos dados pessoais de acordo com a <a href="/politica-de-privacidade" className="text-blue-600 hover:underline">política de privacidade</a>.
                    </span>
                  </Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary" // Estilo primário do AntD (geralmente azul)
                    htmlType="submit"
                    loading={loading} // Controla o estado de carregamento do botão
                    icon={loading ? <LoadingOutlined /> : null} // Ícone de loading
                    className="w-full md:w-auto px-8 py-3 rounded-md font-medium transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    // As classes Tailwind sobrepõem/complementam as do AntD.
                    // Ajuste o `bg-blue-600` e `hover:bg-blue-700` no seu CSS global se as cores do AntD não combinarem.
                    style={{ height: 'auto', padding: '12px 32px', backgroundColor: '#2563EB', borderColor: '#2563EB' }} // Estilos inline para forçar a cor e padding
                  >
                    {loading ? 'A enviar...' : 'Enviar Mensagem'}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;