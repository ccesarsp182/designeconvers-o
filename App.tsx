
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  UserPlus,
  Sun,
  Moon
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_NUMBER = "5522992845651";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

// --- Types ---
interface FAQItem {
  question: string;
  answer: string;
}

// --- Components ---

const Navbar: React.FC<{ isDark: boolean; toggleDark: () => void }> = ({ isDark, toggleDark }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="text-xl font-extrabold tracking-tighter text-blue-600">DESIGN<span className="text-slate-900 dark:text-white">&CONVERSÃO</span></div>
      
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleDark}
          className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-transparent dark:border-slate-700"
          aria-label="Alternar tema"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <a 
          href={WHATSAPP_LINK} 
          className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-green-200"
        >
          <MessageCircle size={18} />
          Orçamento no WhatsApp
        </a>
      </div>
    </div>
  </nav>
);

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-bold tracking-wide uppercase">
            Sua marca precisa trabalhar por você
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
            Transforme sua marca em uma <span className="text-blue-600">vitrine</span> que atrai clientes todos os dias
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
            Você tem um bom serviço, mas ele não parece profissional. As pessoas entram no seu Instagram ou site, olham... e somem. Recupere o posicionamento que você merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#problem" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all shadow-xl hover:shadow-blue-200"
            >
              Quero Profissionalizar Meu Negócio
              <ArrowRight size={20} />
            </a>
            <a 
              href={WHATSAPP_LINK} 
              className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle size={20} className="text-green-500" />
              WhatsApp
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
            alt="Dono de negócio frustrado"
            className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-video lg:aspect-square"
          />
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-800/90 backdrop-blur p-4 rounded-2xl shadow-xl z-20 border border-white/20 dark:border-slate-700/50">
            <p className="text-slate-800 dark:text-slate-200 font-medium italic">"Meu negócio é bom, mas não parece profissional..."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem: React.FC = () => (
  <section id="problem" className="py-24 px-4 bg-slate-900 dark:bg-black text-white overflow-hidden transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <p className="text-sm italic text-slate-300">"Meu site não passa confiança."</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <p className="text-sm italic text-slate-300">"As pessoas entram, mas não chamam."</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-red-500/10 p-6 rounded-2xl border border-red-500/20 backdrop-blur-sm">
                <p className="text-sm italic text-red-100">"Parece que meu concorrente vende mais só por parecer maior."</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <p className="text-sm italic text-slate-300">"Não consigo cobrar o valor justo."</p>
              </div>
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-500 rounded-full blur-[80px] opacity-20"></div>
        </div>
        <div className="order-1 lg:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            O problema <span className="text-red-400 italic">não é</span> o seu serviço
          </h2>
          <div className="space-y-4 text-slate-400 text-lg">
            <p>Quando sua marca não comunica valor, o cliente não entende por que escolher você — mesmo precisando do seu serviço.</p>
            <p>Não é falta de qualidade. É falta de <span className="text-white font-semibold">posicionamento, clareza e confiança visual.</span></p>
          </div>
          <div className="pt-4 flex items-center gap-4 text-sm font-semibold uppercase tracking-widest text-blue-400">
            <div className="w-12 h-px bg-blue-400"></div>
            A hora de mudar é agora
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution: React.FC = () => (
  <section className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">A solução é clareza + estratégia visual</h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Eu ajudo donos de negócio a criarem uma Identidade Visual profissional e uma Landing Page focada em conversão. Nada de design só "bonito". Aqui, tudo é feito para vender.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img 
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop" 
          alt="Designer trabalhando" 
          className="rounded-3xl shadow-xl aspect-video object-cover"
        />
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Identidade Visual que Converte</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Criação de marcas que passam autoridade e segurança logo no primeiro contato.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Landing Pages de Alta Performance</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Sites rápidos e focados em levar o seu cliente direto para o WhatsApp.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">Atendimento 100% Online</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Não importa onde você esteja, ajudo sua marca a se posicionar em nível nacional.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ImpactSection: React.FC = () => (
  <section className="py-24 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">O que muda na prática</h2>
        <p className="text-slate-600 dark:text-slate-400 mt-4">Resultados reais de quem investe em posicionamento</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Sua marca passa autoridade",
            desc: "Você deixa de parecer pequeno ou improvisado e começa a parecer uma empresa de verdade.",
            icon: <ShieldCheck className="text-blue-600" size={32} />,
            img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=400&h=250&fit=crop"
          },
          {
            title: "Mais pessoas chamam no WhatsApp",
            desc: "A landing page guia o visitante e mostra exatamente por que ele deve falar com você.",
            icon: <MessageCircle className="text-green-600" size={32} />,
            img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&h=250&fit=crop"
          },
          {
            title: "Você atrai clientes de fora",
            desc: "Uma marca profissional elimina a desconfiança e abre portas para vender em nível nacional.",
            icon: <Globe className="text-purple-600" size={32} />,
            img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=400&h=250&fit=crop"
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-2 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all group">
            <img src={item.img} alt={item.title} className="w-full h-48 object-cover rounded-2xl mb-6" />
            <div className="px-6 pb-6 space-y-3">
              <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SocialProof: React.FC = () => (
  <section className="py-24 px-4 bg-blue-600 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 p-8 opacity-10">
      <MessageCircle size={300} strokeWidth={1} />
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <h2 className="text-3xl font-extrabold text-center mb-16 uppercase tracking-wider">O que nossos clientes dizem</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Quero algo que me ajude a vender, não só ficar bonito.",
          "Preciso parecer uma empresa de verdade.",
          "Meu negócio é bom, mas não parecia profissional."
        ].map((quote, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400">★</span>)}
            </div>
            <p className="text-lg italic font-medium leading-relaxed">"{quote}"</p>
            <p className="mt-4 text-sm text-blue-200 uppercase font-bold tracking-widest">— Cliente Satisfeito</p>
          </div>
        ))}
      </div>
      <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale invert dark:invert-0 dark:opacity-30">
        {/* Placeholder Logos */}
        <div className="text-2xl font-black">LOGOTYPE</div>
        <div className="text-2xl font-black italic">BRAND CO.</div>
        <div className="text-2xl font-black tracking-tighter">ESTUDIO</div>
        <div className="text-2xl font-black font-serif">CLASSIC</div>
      </div>
    </div>
  </section>
);

const FinalCTA: React.FC = () => (
  <section className="py-24 px-4 bg-white dark:bg-slate-900 transition-colors duration-300">
    <div className="max-w-4xl mx-auto text-center space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white">Vamos ver se faz sentido para o seu negócio?</h2>
        <p className="text-xl text-slate-600 dark:text-slate-400">Se você quer atrair mais clientes, passar confiança e crescer além da sua cidade, o próximo passo é simples.</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl flex flex-col items-center gap-3 border border-transparent dark:border-slate-700 transition-all">
          <UserPlus className="text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-sm dark:text-slate-200">Atrair Clientes</span>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl flex flex-col items-center gap-3 border border-transparent dark:border-slate-700 transition-all">
          <ShieldCheck className="text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-sm dark:text-slate-200">Passar Confiança</span>
        </div>
        <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl flex flex-col items-center gap-3 border border-transparent dark:border-slate-700 transition-all">
          <TrendingUp className="text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-sm dark:text-slate-200">Crescimento</span>
        </div>
      </div>
      <div className="space-y-6">
        <p className="text-lg font-semibold dark:text-slate-200">👉 Solicite um orçamento direto no WhatsApp</p>
        <p className="text-slate-500 dark:text-slate-500">Sem enrolação. Sem compromisso.</p>
        <a 
          href={WHATSAPP_LINK} 
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all shadow-2xl hover:scale-105 active:scale-95"
        >
          <MessageCircle size={24} />
          PEDIR ORÇAMENTO NO WHATSAPP
        </a>
        <div className="flex items-center justify-center gap-4 mt-8">
            <img src="https://picsum.photos/50/50?random=1" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 shadow-md -mr-4" alt="user" />
            <img src="https://picsum.photos/50/50?random=2" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 shadow-md -mr-4" alt="user" />
            <img src="https://picsum.photos/50/50?random=3" className="w-12 h-12 rounded-full border-2 border-white dark:border-slate-800 shadow-md" alt="user" />
            <span className="text-xs text-slate-500 font-medium ml-2">+250 orçamentos este mês</span>
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items: FAQItem[] = [
    {
      question: "Isso serve para qualquer tipo de negócio?",
      answer: "Funciona melhor para quem presta serviços e quer atrair mais clientes pela internet, criando autoridade e confiança visual."
    },
    {
      question: "Vocês atendem fora do Rio de Janeiro?",
      answer: "Sim. Todo o processo é online e atende clientes de todo o Brasil com a mesma qualidade e proximidade."
    },
    {
      question: "Em quanto tempo vejo resultado?",
      answer: "Assim que sua marca começa a ser usada corretamente e a landing page entra no ar, o impacto já é perceptível na confiança e no volume de contatos."
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center mb-12 dark:text-white">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-white">{item.question}</span>
                <ChevronDown className={`transition-transform duration-300 dark:text-slate-400 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed animate-in fade-in slide-in-from-top-1">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-extrabold tracking-tighter text-blue-600">DESIGN<span className="text-slate-900 dark:text-white">&CONVERSÃO</span></div>
      <div className="text-slate-500 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} Todos os direitos reservados.
      </div>
      <div className="flex gap-6">
        <a href={WHATSAPP_LINK} className="text-slate-400 hover:text-blue-600 transition-colors"><MessageCircle /></a>
        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Globe /></a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    // Initial state based on localStorage or system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    // Sync the 'dark' class with the isDark state on mount and update
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(prev => !prev);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Hero />
      <Problem />
      <Solution />
      <ImpactSection />
      <SocialProof />
      <FinalCTA />
      <FAQ />
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <a 
          href={WHATSAPP_LINK} 
          className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full flex items-center justify-center gap-2 font-bold shadow-2xl transition-transform active:scale-95"
        >
          <MessageCircle size={20} />
          Falar com Especialista
        </a>
      </div>
    </div>
  );
}