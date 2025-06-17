const ComingSoon = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center p-8 rounded-lg shadow-md bg-white">
        <h2 className="text-3xl font-bold mb-4">Página em Construção</h2>
        <p className="text-gray-600 mb-6">Desculpe, esta página ainda não foi finalizada.</p>
        <button
          onClick={() => window.history.back()}
          className="bg-primary text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;