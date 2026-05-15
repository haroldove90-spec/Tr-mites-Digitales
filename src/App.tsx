import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, ShieldCheck, Zap, ChevronDown, 
  MessageCircle, ArrowRight, Building2, Landmark, HeartPulse, Menu, X
} from 'lucide-react';

const waLink = "https://wa.me/529619183857?text=Hola,%20necesito%20ayuda%20con%20un%20trámite";

const services = [
  {
    category: "Registro Civil",
    icon: <Building2 className="w-8 h-8 text-amber-500" />,
    items: [
      { name: "Actas (Nacimiento, Matrimonio, Defunción, Divorcio)", price: "$35 MXN" },
      { name: "CURP Actualizada", price: "$5 MXN" },
    ]
  },
  {
    category: "Servicios SAT",
    icon: <Landmark className="w-8 h-8 text-amber-500" />,
    items: [
      { name: "Constancia Sit. Fiscal (CURP)", price: "$100 MXN" },
      { name: "Constancia Sit. Fiscal (IDCIF/RFC)", price: "$35 MXN" },
    ]
  },
  {
    category: "Seguridad Social (IMSS)",
    icon: <HeartPulse className="w-8 h-8 text-amber-500" />,
    items: [
      { name: "Localización de NSS", price: "$20 MXN" },
      { name: "Semanas Cotizadas", price: "$25 MXN" },
      { name: "Vigencia de Derechos NSS", price: "$25 MXN" },
    ]
  }
];

const features = [
  {
    icon: <Zap className="w-6 h-6 text-slate-900" />,
    title: "Entrega Inmediata",
    description: "Procesamos tu solicitud en minutos. Olvídate de esperar días o lidiar con plataformas gubernamentales lentas."
  },
  {
    icon: <FileText className="w-6 h-6 text-slate-900" />,
    title: "Formato Digital PDF",
    description: "Recibe tus documentos en formato PDF oficial, listos para imprimir o reenviar de inmediato."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-slate-900" />,
    title: "Seguridad Garantizada",
    description: "Manejamos tu información con total confidencialidad. Pago fácil y atención personalizada."
  }
];

const steps = [
  {
    step: "01",
    title: "Eliges tu trámite",
    description: "Selecciona el documento que necesitas de nuestra lista oficial y clara. Tenemos cobertura para Registro Civil, SAT e IMSS.",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  },
  {
    step: "02",
    title: "Envías tus datos",
    description: "Proporcionas la información básica necesaria para la búsqueda de manera 100% segura y confidencial.",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
  },
  {
    step: "03",
    title: "Recibes en tu móvil",
    description: "Te enviamos el archivo directamente a tu WhatsApp o correo para que lo uses de inmediato sin complicaciones.",
    img: "https://storage.googleapis.com/documentos.transparencia.congresoqroo.gob.mx/static/img/tramites_2.jpg"
  }
];

const faqs = [
  {
    q: "¿Los documentos son oficiales?",
    a: "Sí, todos los documentos entregados son generados de manera legal y son emitidos por las instituciones correspondientes (SAT, IMSS, Registro Civil)."
  },
  {
    q: "¿Cómo recibo mi documento?",
    a: "Se envía vía en formato PDF totalmente legible y válido, ya sea por WhatsApp o correo electrónico."
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos pago mediante transferencia bancaria y depósitos en tiendas OXXO para tu mayor comodidad."
  }
];

export default function App() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-slate-900 font-sans selection:bg-amber-200">
      
      {/* Navbar ZikZag Premium */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-slate-950/95 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 relative z-50">
            <div className="bg-amber-500 p-2.5 rounded-xl border border-amber-400">
              <FileText className="w-5 h-5 text-slate-950" />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-white">
              Trámites<span className="text-amber-500 italic">Digitales</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium text-slate-100 hover:text-amber-500 transition-colors uppercase tracking-wider">Inicio</a>
            <a href="#servicios" className="text-sm font-medium text-slate-100 hover:text-amber-500 transition-colors uppercase tracking-wider">Catálogo</a>
            <a href="#como-funciona" className="text-sm font-medium text-slate-100 hover:text-amber-500 transition-colors uppercase tracking-wider">Cómo Funciona</a>
            <a href="#faq" className="text-sm font-medium text-slate-100 hover:text-amber-500 transition-colors uppercase tracking-wider">FAQ</a>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a 
              href={waLink} 
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border-2 border-amber-500 text-amber-500 font-bold rounded-full hover:bg-amber-500 hover:text-slate-950 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              Contacto
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            className="lg:hidden relative z-50 p-2 text-white hover:text-amber-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-slate-950 border-b border-white/10 px-6 py-8 flex flex-col gap-6 lg:hidden shadow-2xl"
            >
              <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-100 hover:text-amber-500 uppercase tracking-widest">Inicio</a>
              <a href="#servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-100 hover:text-amber-500 uppercase tracking-widest">Catálogo de Servicios</a>
              <a href="#como-funciona" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-100 hover:text-amber-500 uppercase tracking-widest">Cómo Funciona</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-slate-100 hover:text-amber-500 uppercase tracking-widest">Preguntas Frecuentes</a>
              
              <a 
                href={waLink}
                target="_blank" rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-4 bg-amber-500 text-slate-950 font-bold rounded-full w-full uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5" />
                Contacto Rápido
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section Premium ZikZag - Full Screen */}
      <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOE5TuX3y_FUOXMUn8QzE6s_1hVxvWAyuWwg&s" 
            alt="Fondo de hero" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-slate-950/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span className="text-sm font-medium tracking-widest text-slate-200 uppercase">Procesamiento Inmediato</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-8">
              Tus trámites oficiales, <br className="hidden md:block" />
              <span className="text-amber-500 italic">sin filas</span> y en minutos.
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
              Obtenemos tus actas, constancias y documentos del SAT, IMSS o Registro Civil de forma <strong className="font-semibold text-white">100% legal y segura</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href={waLink}
                target="_blank" rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-full shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all active:scale-95 text-lg"
              >
                Solicitar trámite ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZikZag Style Services */}
      <section id="servicios" className="py-24 bg-slate-900 px-6 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800/50 -skew-x-12 origin-top-right -z-10"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Catálogo de <span className="text-amber-500 italic">Servicios</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={service.category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-white p-8 rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-xl rounded-bl-xl shadow-xl flex flex-col hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-700"></div>
                
                <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                  {service.icon}
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-slate-900 mb-6">{service.category}</h3>
                
                <ul className="space-y-4 flex-1 mb-10">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex flex-col gap-1 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                      <span className="text-slate-600 text-sm leading-relaxed">{item.name}</span>
                      <span className="font-bold text-amber-600 text-lg">{item.price}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href={waLink}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-50 text-slate-900 hover:bg-amber-500 hover:text-slate-950 font-bold rounded-full transition-colors group-hover:shadow-md"
                >
                  Solicitar ahora <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Minimal Icons */}
      <section className="py-24 px-6 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="p-4 bg-amber-200 rounded-full">
                  {feat.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-slate-900">{feat.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - ZikZag Layout */}
      <section id="como-funciona" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              ¿Cómo <span className="text-amber-600 italic">funciona?</span>
            </h2>
            <p className="text-slate-600 text-lg">Un proceso diseñado para ser tan simple como enviar un mensaje.</p>
          </div>

          <div className="space-y-24">
            {steps.map((step, idx) => {
              const isEven = idx % 2 !== 0;
              return (
                <div key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                  
                  {/* Image side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 w-full"
                  >
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-8 border-white">
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
                    </div>
                  </motion.div>

                  {/* Text side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="flex-1 space-y-6"
                  >
                    <div className="text-7xl font-bold text-slate-200">{step.step}</div>
                    <h3 className="font-serif text-3xl font-bold text-slate-900">{step.title}</h3>
                    <p className="text-lg text-slate-600 leading-relaxed font-light">{step.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-24 text-center">
            <a 
              href={waLink}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-transform active:scale-95 shadow-xl text-lg hover:shadow-slate-900/30"
            >
              Comenzar mi trámite 
              <ArrowRight className="w-5 h-5 text-amber-500" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-slate-900 text-slate-100 relative">
        {/* Geometric accent */}
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-amber-500/10 rounded-tr-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none group"
                  aria-expanded={openFaqIndex === idx}
                >
                  <span className="font-serif font-bold text-lg text-slate-100 pr-8 group-hover:text-amber-400 transition-colors">{faq.q}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-slate-500 transition-transform duration-300 shrink-0 ${openFaqIndex === idx ? 'rotate-180 text-amber-500' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-slate-400 font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 pt-16 pb-8 px-6 border-t border-slate-800 text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                <FileText className="w-5 h-5 text-amber-500" />
              </div>
              <span className="font-serif font-bold text-xl tracking-tight text-white">
                Trámites<span className="text-amber-600 italic">Digitales</span>
              </span>
            </div>
            <p className="max-w-sm mb-6 font-light">
              Facilitando tu vida burocrática. Tu agencia digital de confianza para documentos oficiales rápidos y seguros.
            </p>
          </div>
          <div className="flex flex-col md:items-end">
            <p className="font-serif font-semibold text-white mb-4 text-lg">¿Necesitas ayuda prioritaria?</p>
            <a 
              href={waLink}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-full transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Chatea con un asesor
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light">
          <p>© {new Date().getFullYear()} Trámites Digitales. Todos los derechos reservados.</p>
          <p className="text-slate-600 max-w-xl text-center md:text-right">
            Nota legal: Este sitio ofrece servicios privados de gestión y obtención de documentos públicos. No somos una entidad gubernamental oficial, sino facilitadores autorizados por el usuario.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={waLink}
        target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:-translate-y-1 transition-all flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </motion.a>

    </div>
  );
}
