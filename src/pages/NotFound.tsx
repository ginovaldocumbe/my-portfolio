const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center p-8 rounded-lg shadow-md bg-white">
        <h2 className="text-3xl font-bold mb-4">404 - Página Não Encontrada</h2>
        <p className="text-gray-600 mb-6">Desculpe, a página que você procura não existe.</p>
        <a href="/" className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600">
          Voltar para Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;