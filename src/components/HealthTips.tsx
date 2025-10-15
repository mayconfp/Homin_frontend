function HealthTips() {
  const tips = [
    {
      title: 'Alimentação Forte',
      description: 'Uma alimentação equilibrada é a base de uma vida saudável. Inclua em sua dieta alimentos como frutas, verduras, legumes e carnes magras.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Prevenção é o melhor remédio',
      description: 'Cuide-se desde cedo para prevenir um problema maior no futuro. Consultas e exames preventivos são essenciais para diagnósticos; doenças em estágio inicial, aumentando as chances de tratamento.',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Durma Bem, Viva Melhor',
      description: 'O sono de qualidade é vital para a saúde física e mental. Influencia no funcionamento do sistema imunológico. Um bom descanso melhora o humor, a concentração e a saúde como um todo.',
      image: 'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Movimente-se Pela Sua Saúde',
      description: 'Prática regular de exercícios físicos é fundamental. Além de ajudar no controle do peso, a prática de exercícios traz a atividade física libera hormônios que promovem o bem-estar e a disposição física e mental. Cuide de você todos os dias, faça dela um hábito.',
      image: 'https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-white text-4xl font-bold">Dicas de Saúde</h2>
          <div className="text-white font-bold text-2xl">H⊕MIN+</div>
        </div>

        <div className="space-y-8">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <div className="flex-shrink-0">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-80 h-56 object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 bg-blue-600/40 backdrop-blur-sm rounded-2xl p-8 hover:bg-blue-600/50 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">{tip.title}</h3>
                <p className="text-white text-base leading-relaxed">
                  {tip.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HealthTips;
