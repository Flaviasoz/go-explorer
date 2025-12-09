const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            🌍 Go Explorer
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Pacotes
            </a>
            <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Roteiros
            </a>
            <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Guias
            </a>
            <a href="#" className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Contato
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Sua Próxima Aventura
            <span className="block text-blue-600 dark:text-blue-400">Começa Aqui</span>
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
            Descubra pacotes de viagens incríveis, guias de turismo especializados e roteiros
            personalizados criados especialmente para você. Explore o mundo com a Go Explorer.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
              Explorar Pacotes
            </button>
            <button className="px-8 py-4 bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-50 dark:hover:bg-zinc-700 transition-colors">
              Criar Roteiro
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">✈️</div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              Pacotes de Viagens
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Escolha entre nossos pacotes cuidadosamente selecionados para os melhores destinos do mundo.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🗺️</div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              Roteiros Personalizados
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Crie roteiros únicos adaptados aos seus interesses, orçamento e tempo disponível.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-3">
              Guias de Turismo
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              Acesse guias completos com dicas, recomendações e informações essenciais sobre cada destino.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-zinc-200 dark:border-zinc-700">
        <div className="text-center text-zinc-600 dark:text-zinc-400">
          <p>© 2024 Go Explorer. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
