
import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  ChevronDown, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUp,
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  UserPlus,
  Sun,
  Moon,
  Sparkles,
  Zap,
  Award
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_NUMBER = "5522992845651";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de um orçamento para profissionalizar minha marca.`;

// --- Components ---

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 p-4 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-brand-600 shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 ${
        isVisible ? 'bottom-8 right-8 opacity-100' : 'bottom-0 right-8 opacity-0 pointer-events-none'
      } hidden md:flex items-center justify-center group`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
    </button>
  );
};

const Navbar: React.FC<{ isDark: boolean; toggleDark: () => void }> = ({ isDark, toggleDark }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass border-b border-zinc-200/50 dark:border-zinc-800/50">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold font-heading shadow-lg shadow-brand-500/20">D</div>
        <div className="text-lg font-bold tracking-tighter dark:text-white uppercase font-heading">
          Design<span className="text-brand-500 font-normal">&</span>Conversão
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleDark}
          className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 text-zinc-600 dark:text-zinc-400 hover:scale-110 transition-all border border-transparent dark:border-zinc-700"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        
        <a 
          href={WHATSAPP_LINK} 
          className="hidden md:flex items-center gap-2 bg-zinc-950 dark:bg-brand-600 hover:bg-brand-700 dark:hover:bg-brand-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-xl shadow-brand-500/10 active:scale-95 font-heading uppercase tracking-wide"
        >
          Solicitar Orçamento
        </a>
      </div>
    </div>
  </nav>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 mesh-gradient overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-200/40 dark:bg-brand-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="space-y-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-50/80 dark:bg-brand-900/20 border border-brand-100 dark:border-brand-800/50 text-brand-700 dark:text-brand-400 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase font-heading">
            <Sparkles size={14} className="text-brand-500" /> Posicionamento Digital Premium
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-zinc-900 dark:text-white leading-[1.15] tracking-tight font-heading">
            Sua marca como uma <span className="text-brand-600">vitrine de luxo</span> de alta conversão.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed font-sans">
            Elimine a desconfiança e pare de perder clientes para concorrentes amadores. Transformamos o seu visual em uma ferramenta de vendas imparável.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a 
              href="#problem" 
              className="group bg-brand-600 hover:bg-brand-700 text-white px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all shadow-2xl shadow-brand-600/20 active:scale-95 font-heading tracking-wide"
            >
              Começar Agora
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={WHATSAPP_LINK} 
              className="bg-white/70 dark:bg-zinc-800/50 backdrop-blur border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 transition-all hover:bg-white dark:hover:bg-zinc-700 font-heading tracking-wide shadow-sm"
            >
              <MessageCircle size={20} className="text-green-500" />
              WhatsApp
            </a>
          </div>

          <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 opacity-40 grayscale dark:invert dark:opacity-20">
            <div className="text-[10px] font-bold tracking-[0.2em] uppercase font-heading">Parceiros Estratégicos:</div>
            <div className="flex gap-8 items-center font-heading font-black text-xl tracking-tighter uppercase">
                <span>Vogue</span>
                <span>Estate</span>
                <span>Nero</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500 to-indigo-600 rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative z-10 bg-zinc-200 dark:bg-zinc-800 rounded-[2.5rem] overflow-hidden shadow-2xl animate-float">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop" 
              alt="Estratégia Digital Premium"
              className="w-full h-full object-cover aspect-[4/5] hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-8 right-8 glass p-5 rounded-2xl shadow-2xl max-w-[180px] border-white/40">
              <div className="flex items-center gap-2 mb-2">
                <Zap size={16} className="text-brand-500 fill-brand-500" />
                <span className="text-[10px] font-black uppercase tracking-widest font-heading">Performance</span>
              </div>
              <p className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 leading-snug font-sans uppercase tracking-wider">
                Site carregando em <span className="text-brand-500">0.8s</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Problem: React.FC = () => (
  <section id="problem" className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden">
    {/* Subtle Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-heading uppercase flex flex-col gap-2 md:gap-3">
            <span className="leading-[1.1]">Design não é luxo,</span>
            <span className="text-brand-400 leading-[1.1]">é autoridade bruta.</span>
          </h2>
          <p className="text-zinc-400 text-lg font-light leading-relaxed font-sans max-w-lg">
            Você tem apenas 3 segundos. Se sua marca parece amadora, seu cliente assume que seu serviço também é. Profissionalismo visual é o atalho mais rápido para confiança.
          </p>
          <ul className="space-y-5">
            {[
              "Percepção de marca improvisada ou instável",
              "Resistência do cliente ao aceitar seu preço",
              "Perda de leads para sites mais 'bonitos'",
              "Identidade que não transmite sua verdadeira qualidade"
            ].map((text, i) => (
              <li key={i} className="flex items-center gap-4 text-zinc-300 font-sans">
                <div className="w-6 h-px bg-brand-500"></div>
                <span className="text-sm font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6 pt-12">
            <div className="glass p-8 rounded-3xl border-white/5 bg-white/5">
                <p className="text-4xl font-extrabold mb-1 font-heading text-brand-400">0.05s</p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold font-heading leading-tight">Julgamento Visual</p>
            </div>
            <div className="bg-brand-600 p-8 rounded-3xl shadow-lg shadow-brand-500/20">
                <p className="text-4xl font-extrabold mb-1 font-heading">94%</p>
                <p className="text-[10px] text-brand-100 uppercase tracking-[0.2em] font-bold font-heading leading-tight">Impacto da Estética</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                <p className="text-4xl font-extrabold mb-1 font-heading text-brand-400">75%</p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold font-heading leading-tight">Credibilidade Web</p>
            </div>
            <div className="glass p-8 rounded-3xl border-white/5 bg-white/5">
                <p className="text-4xl font-extrabold mb-1 font-heading text-brand-400">+300%</p>
                <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold font-heading leading-tight">Conversão de Leads</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Features: React.FC = () => (
  <section className="py-32 px-6 bg-white dark:bg-zinc-950 transition-colors duration-500">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <span className="text-brand-600 font-bold text-[10px] tracking-[0.3em] uppercase font-heading">Metodologia</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight font-heading uppercase">Foco em Performance</h2>
        <p className="text-zinc-500 dark:text-zinc-400 font-light font-sans text-lg">Minimalismo estratégico para converter visitantes em clientes pagantes.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          {
            icon: <Award className="text-brand-600" size={32} />,
            title: "Branding Minimalista",
            desc: "Identidades visuais limpas que focam no que realmente importa: seu valor."
          },
          {
            icon: <Zap className="text-brand-600" size={32} />,
            title: "Performance Extrema",
            desc: "Código otimizado para rankeamento e carregamento instantâneo."
          },
          {
            icon: <TrendingUp className="text-brand-600" size={32} />,
            title: "Engenharia de Vendas",
            desc: "Estruturas de landing page desenhadas para guiar o cliente ao WhatsApp."
          }
        ].map((feature, i) => (
          <div key={i} className="group p-8 rounded-[2rem] bg-zinc-50 dark:bg-zinc-900/50 border border-transparent hover:border-brand-500/20 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-500">
            <div className="mb-8 p-4 bg-white dark:bg-zinc-800 rounded-2xl w-fit shadow-lg shadow-brand-500/5 group-hover:scale-110 transition-transform">
              {feature.icon}
            </div>
            <h3 className="text-xl font-extrabold mb-4 dark:text-white font-heading uppercase tracking-tight">{feature.title}</h3>
            <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed font-sans">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ImpactGrid: React.FC = () => (
    <section className="py-32 px-6 bg-zinc-50 dark:bg-studio-950 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
             <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&h=500&fit=crop" className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5] filter saturate-[0.8] hover:saturate-100 transition-all" alt="Design Case" />
                <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=400&h=300&fit=crop" className="rounded-3xl shadow-xl w-full object-cover aspect-video filter saturate-[0.8] hover:saturate-100 transition-all" alt="Performance" />
             </div>
             <div className="space-y-4 pt-12">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&h=300&fit=crop" className="rounded-3xl shadow-xl w-full object-cover aspect-video filter saturate-[0.8] hover:saturate-100 transition-all" alt="Mobile First" />
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&h=500&fit=crop" className="rounded-3xl shadow-xl w-full object-cover aspect-[4/5] filter saturate-[0.8] hover:saturate-100 transition-all" alt="Conversion" />
             </div>
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white tracking-tight leading-tight font-heading uppercase">Alcance <span className="text-brand-600">posicionamento</span> de elite.</h2>
            <div className="space-y-8">
                <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl border border-zinc-100 dark:border-zinc-800 group-hover:border-brand-500/50 transition-colors"><Globe size={24} className="text-brand-600"/></div>
                    <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white font-heading uppercase tracking-tight">Presença Global</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-sans leading-relaxed">Sua marca preparada para competir no topo do mercado, sem fronteiras geográficas.</p>
                    </div>
                </div>
                <div className="flex gap-6 group">
                    <div className="flex-shrink-0 w-14 h-14 bg-white dark:bg-zinc-900 rounded-2xl flex items-center justify-center shadow-xl border border-zinc-100 dark:border-zinc-800 group-hover:border-brand-500/50 transition-colors"><ShieldCheck size={24} className="text-brand-600"/></div>
                    <div>
                        <h4 className="font-bold text-lg mb-1 dark:text-white font-heading uppercase tracking-tight">Confiança Inabalável</h4>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm font-sans leading-relaxed">Design limpo gera confiança rápida. Você deixa de vender preço e começa a vender valor.</p>
                    </div>
                </div>
            </div>
            <div className="pt-6">
                 <a href={WHATSAPP_LINK} className="text-brand-600 font-bold flex items-center gap-3 group font-heading uppercase tracking-widest text-xs">
                    Quero resultados reais
                    <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-500"/>
                 </a>
            </div>
          </div>
        </div>
      </div>
    </section>
);

const FinalCTA: React.FC = () => (
  <section className="py-32 px-6 bg-white dark:bg-zinc-950 transition-colors duration-500">
    <div className="max-w-5xl mx-auto glass p-12 md:p-24 rounded-[3.5rem] text-center space-y-12 border-brand-500/10 dark:bg-zinc-900/50 shadow-2xl shadow-brand-500/5">
      <div className="space-y-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white leading-[1.05] tracking-tight font-heading uppercase">
          Pronto para <br/>o <span className="text-brand-600">próximo nível?</span>
        </h2>
        <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed font-sans">
          Decida hoje onde seu negócio estará amanhã. Entre em contato para uma análise estratégica gratuita.
        </p>
      </div>
      
      <div className="flex flex-col items-center gap-10">
        <a 
          href={WHATSAPP_LINK} 
          className="group inline-flex items-center gap-4 bg-brand-600 hover:bg-brand-700 text-white px-14 py-6 rounded-2xl text-xl font-bold transition-all shadow-2xl shadow-brand-600/30 active:scale-95 font-heading tracking-wide"
        >
          <MessageCircle size={24} className="group-hover:rotate-12 transition-transform"/>
          FALAR COM ESPECIALISTA
        </a>
        <div className="flex flex-col items-center gap-5">
            <div className="flex -space-x-4">
                {[1,2,3,4,5].map(i => (
                    <img key={i} src={`https://picsum.photos/100/100?random=${i+10}`} className="w-12 h-12 rounded-full border-4 border-white dark:border-zinc-900 shadow-2xl" alt="Lead" />
                ))}
            </div>
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-500 font-heading">Líderes de mercado escolhem a gente</p>
        </div>
      </div>
    </div>
  </section>
);

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items: FAQItem[] = [
    {
      question: "Qual o prazo de entrega?",
      answer: "Nossos projetos são entregues entre 15 a 20 dias úteis. Priorizamos a qualidade obsessiva em cada detalhe técnico e visual."
    },
    {
      question: "O site é fácil de gerenciar?",
      answer: "Totalmente. Entregamos autonomia total para você editar conteúdos, imagens e textos de forma intuitiva, sem precisar de código."
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Entrada + parcelas via Cartão, Boleto ou PIX. Oferecemos condições flexíveis para viabilizar sua profissionalização."
    }
  ];

  return (
    <section className="py-32 px-6 bg-zinc-50 dark:bg-studio-950 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl font-extrabold dark:text-white font-heading uppercase tracking-tight">Dúvidas Frequentes</h2>
            <div className="w-16 h-1.5 bg-brand-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-zinc-900 rounded-[2rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-brand-500/10">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-8 text-left transition-colors"
              >
                <span className={`font-bold font-heading uppercase tracking-tight transition-colors ${openIndex === idx ? 'text-brand-600' : 'text-zinc-900 dark:text-white'}`}>{item.question}</span>
                <ChevronDown className={`transition-transform duration-500 dark:text-zinc-400 ${openIndex === idx ? 'rotate-180 text-brand-600' : ''}`} />
              </button>
              <div className={`transition-all duration-500 overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-8 pb-8 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-sans font-light">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => (
  <footer className="py-20 px-6 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-500">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="flex flex-col items-center md:items-start gap-3">
        <div className="text-xl font-bold tracking-tighter dark:text-white uppercase font-heading">
          Design<span className="text-brand-600 font-normal">&</span>Conversão
        </div>
        <p className="text-[9px] text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.4em] font-bold font-heading">The Authority Studio</p>
      </div>
      
      <div className="text-zinc-400 dark:text-zinc-500 text-[10px] uppercase tracking-widest font-bold text-center md:text-right font-heading">
        © {new Date().getFullYear()} Studio Design & Conversão. <br/> 
        Crafted for Growth.
      </div>

      <div className="flex gap-4">
        <a href={WHATSAPP_LINK} className="w-12 h-12 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-600 hover:border-brand-600 hover:shadow-lg transition-all">
          <MessageCircle size={20} />
        </a>
        <a href="#" className="w-12 h-12 rounded-2xl border border-zinc-100 dark:border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-brand-600 hover:border-brand-600 hover:shadow-lg transition-all">
          <Award size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
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
    <div className="min-h-screen font-sans selection:bg-brand-600/30">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <Hero />
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-800 to-transparent"></div>
      <Problem />
      <Features />
      <ImpactGrid />
      <FinalCTA />
      <FAQ />
      <Footer />
      
      {/* Back to Top Button */}
      <ScrollToTop />
      
      {/* Mobile Sticky Floating CTA */}
      <div className="md:hidden fixed bottom-8 right-8 z-50">
        <a 
          href={WHATSAPP_LINK} 
          className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-2xl transition-all active:scale-90 animate-bounce hover:animate-none"
          title="Falar no WhatsApp"
        >
          <MessageCircle size={32} />
        </a>
      </div>
    </div>
  );
}
