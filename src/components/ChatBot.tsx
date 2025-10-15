import { useState } from 'react';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Botão Flutuante - Sempre visível */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-20 h-20 bg-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Chat com Assistente"
        style={{ position: 'fixed' }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Imagem do mascote/agente */}
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            🤖
          </div>
        </div>
      </button>

      {/* Janela de Chat - Aparece quando clicado */}
      {isOpen && (
        <div className="fixed bottom-32 right-8 bg-white rounded-2xl shadow-2xl w-96 z-50 transform transition-all duration-300" style={{ position: 'fixed' }}>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-5 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-white p-2 rounded-full">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Assistente H⊕MIN+</h3>
                  <p className="text-white/90 text-sm flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-white/80 transition-colors text-2xl font-bold"
              >
                ×
              </button>
            </div>
          </div>
          <div className="p-5 h-80 overflow-y-auto bg-gray-50">
            <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
              <p className="text-sm text-gray-700">
                Olá! Sou o assistente virtual do Homin+. Como posso ajudar você hoje? 😊
              </p>
            </div>
            <div className="bg-white rounded-xl p-4 mb-3 shadow-sm">
              <p className="text-sm text-gray-700">
                Posso fornecer informações sobre:
              </p>
              <ul className="text-sm text-gray-600 mt-2 space-y-1">
                <li>• Dicas de saúde</li>
                <li>• Especialistas disponíveis</li>
                <li>• Campanhas de conscientização</li>
              </ul>
            </div>
          </div>
          <div className="p-4 border-t bg-white rounded-b-2xl">
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              className="w-full px-5 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;
