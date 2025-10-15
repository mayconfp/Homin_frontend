import Header from './components/Header';
import Hero from './components/Hero';
import HealthTips from './components/HealthTips';
import AwarenessCampaigns from './components/AwarenessCampaigns';
import Specialists from './components/Specialists';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-blue-500 to-blue-600">
      <Header />
      <Hero />
      <HealthTips />
      <AwarenessCampaigns />
      <Specialists />
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
