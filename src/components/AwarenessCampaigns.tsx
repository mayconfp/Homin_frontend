function AwarenessCampaigns() {
  const campaigns = [
    {
      title: 'Setembro Amarelo',
      color: 'yellow',
      image: 'https://images.pexels.com/photos/4506270/pexels-photo-4506270.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-yellow-400',
      textColor: 'text-yellow-700'
    },
    {
      title: 'Novembro Azul',
      color: 'blue',
      image: 'https://images.pexels.com/photos/579474/pexels-photo-579474.jpeg?auto=compress&cs=tinysrgb&w=400',
      bgColor: 'bg-blue-400',
      textColor: 'text-blue-700'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl font-bold">
            " Campanhas de Concientização"
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto mb-12">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="flex flex-col items-center transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <img
                  src={campaign.image}
                  alt={campaign.title}
                  className="relative w-80 h-80 object-cover rounded-3xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-blue-600 font-bold text-base">H⊕MIN+</span>
                </div>
              </div>
              <button className={`${campaign.bgColor} ${campaign.textColor} px-12 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all transform hover:scale-105`}>
                {campaign.title}
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-start">
          <span className="text-white font-bold text-2xl">H⊕MIN+</span>
        </div>
      </div>
    </section>
  );
}

export default AwarenessCampaigns;
