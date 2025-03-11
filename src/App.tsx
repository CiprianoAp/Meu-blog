import React, { useState } from 'react';
import { Moon, Sun, Languages, User, Briefcase, ChevronDown, Mail, Phone, Wrench, Menu, X, Home, Info, Book, Send, MessageSquare } from 'lucide-react';

const translations = {
  en: {
    about: 'About',
    more: 'More',
    portfolio: 'Portfolio',
    name: 'Aparecido Manuel (AP)',
    bio: 'Software developer with a journey that began in 2015. My passion for programming ignited during high school in TLP (Programming Logic Techniques) class, where I discovered the fundamental truth that applications are powered by carefully crafted instructions (code). This revelation sparked an enduring passion for computer programming. I initially specialized in desktop development using C#, which laid a strong foundation for my career in software development.',
    education: 'Graduated in Computer and Communication Engineering from Óscar Ribas University (UOR), specializing in programming. Former web development professor at CEFMIDIA training center. Worked at Theus as a Designer but currently working in helpdesk at Óscar Ribas University.',
    availability: 'Available for Frontend or Backend Development positions',
    contact: 'Contact Me!',
    send: 'Send',
    name_label: 'Name',
    surname: 'Surname',
    subject: 'Subject',
    message: 'Message',
    phone: 'Phone',
    social: 'Social Networks',
    skills: 'Skills',
    chat_whatsapp: 'Chat on WhatsApp',
    viewProject: 'View Project',
    projectDescription: 'Project Description',
    technologies: 'Technologies Used',
    onlineTicket: 'Online Ticket Purchase',
    ticketDesc: 'A web application for purchasing event tickets online. Features include user authentication, seat selection, and secure payment processing.',
    portfolioWebsite: 'Portfolio Website',
    portfolioDesc: 'Personal portfolio website built with React and Tailwind CSS, featuring responsive design and smooth animations.',
    comingSoon: 'Coming Soon',
    comingDesc: 'More exciting projects are in development. Stay tuned!',
    meEncontre: 'Me Encontre - AJMcod',
    meEncontreDesc: 'A location-based service platform developed with AJMcod. Features include user geolocation, service provider search, and real-time updates.',
    rights: 'All rights reserved.'
  },
  pt: {
    about: 'Sobre',
    more: 'Mais',
    portfolio: 'Portfólio',
    name: 'Aparecido Manuel (AP)',
    bio: 'Desenvolvedor de software com uma jornada iniciada em 2015. Minha paixão pela programação nasceu durante o ensino médio, nas aulas de TLP (Técnicas de Lógica de Programação), onde descobri que cada aplicação é movida por um conjunto cuidadosamente elaborado de instruções (código). Esta descoberta despertou uma paixão duradoura pela programação. Iniciei minha especialização no desenvolvimento desktop com C#, o que estabeleceu uma base sólida para minha carreira em desenvolvimento de software.',
    education: 'Licenciado em engenharia informática e comunicação pela Universidade Óscar Ribas (UOR), tendo como especialidade programação. Já foi professor de desenvolvimento de web no centro de formação CEFMIDIA. Trabalhei na Theus como Designer mas atualmente trabalho na área de helpdesk na universidade Óscar Ribas.',
    availability: 'Disponível para posições de Desenvolvimento Frontend ou Backend',
    contact: 'Fala comigo!',
    send: 'Enviar',
    name_label: 'Nome',
    surname: 'Sobrenome',
    subject: 'Assunto',
    message: 'Mensagem',
    phone: 'Telefone',
    social: 'Redes sociais',
    skills: 'Habilidades',
    chat_whatsapp: 'Conversar no WhatsApp',
    viewProject: 'Ver Projeto',
    projectDescription: 'Descrição do Projeto',
    technologies: 'Tecnologias Utilizadas',
    onlineTicket: 'Compra de Bilhete Online',
    ticketDesc: 'Uma aplicação web para compra de bilhetes de eventos online. Inclui autenticação de usuário, seleção de assentos e processamento seguro de pagamentos.',
    portfolioWebsite: 'Website Portfólio',
    portfolioDesc: 'Website portfólio pessoal construído com React e Tailwind CSS, apresentando design responsivo e animações suaves.',
    comingSoon: 'Em Breve',
    comingDesc: 'Mais projetos emocionantes estão em desenvolvimento. Fique ligado!',
    meEncontre: 'Me Encontre - AJMcod',
    meEncontreDesc: 'Uma plataforma de serviços baseada em localização desenvolvida com AJMcod. Inclui geolocalização de usuários, busca de prestadores de serviços e atualizações em tempo real.',
    rights: 'Todos os direitos reservados.'
  },
  es: {
    about: 'Sobre',
    more: 'Más',
    portfolio: 'Portafolio',
    name: 'Aparecido Manuel (AP)',
    bio: 'Desarrollador de software con una trayectoria que comenzó en 2015. Mi pasión por la programación nació durante la escuela secundaria en la clase de TLP (Técnicas de Lógica de Programación), donde descubrí que cada aplicación funciona gracias a un conjunto cuidadosamente elaborado de instrucciones (código). Este descubrimiento despertó una pasión duradera por la programación. Inicié mi especialización en desarrollo de escritorio con C#, lo que estableció una base sólida para mi carrera en desarrollo de software.',
    education: 'Graduado en Ingeniería Informática y Comunicación por la Universidad Óscar Ribas (UOR), especializado en programación.',
    availability: 'Disponible para posiciones de Desarrollo Frontend o Backend',
    contact: '¡Contáctame!',
    send: 'Enviar',
    name_label: 'Nombre',
    surname: 'Apellido',
    subject: 'Asunto',
    message: 'Mensaje',
    phone: 'Teléfono',
    social: 'Redes Sociales',
    skills: 'Habilidades',
    chat_whatsapp: 'Chatear en WhatsApp',
    viewProject: 'Ver Proyecto',
    projectDescription: 'Descripción del Proyecto',
    technologies: 'Tecnologías Utilizadas',
    onlineTicket: 'Compra de Boletos en Línea',
    ticketDesc: 'Una aplicación web para comprar boletos de eventos en línea. Incluye autenticación de usuario, selección de asientos y procesamiento seguro de pagos.',
    portfolioWebsite: 'Sitio Web Portafolio',
    portfolioDesc: 'Sitio web portafolio personal construido con React y Tailwind CSS, con diseño responsivo y animaciones suaves.',
    comingSoon: 'Próximamente',
    comingDesc: '¡Más proyectos emocionantes están en desarrollo. Mantente atento!',
    meEncontre: 'Me Encontre - AJMcod',
    meEncontreDesc: 'Una plataforma de servicios basada en ubicación desarrollada con AJMcod. Incluye geolocalización de usuarios, búsqueda de proveedores de servicios y actualizaciones en tiempo real.',
    rights: 'Todos los derechos reservados.'
  }
};

const skills = [
  {
    title: 'HTML',
    icon: 'fa-brands fa-html5 text-8xl',
    items: [],
    descriptions: {
      en: 'HTML5 - The latest version of the web markup language, used to structure web content with semantic elements.',
      pt: 'HTML5 - A versão mais recente da linguagem de marcação web, usada para estruturar conteúdo web com elementos semânticos.',
      es: 'HTML5 - La última versión del lenguaje de marcado web, utilizado para estructurar contenido web con elementos semánticos.'
    }
  },
  {
    title: 'CSS',
    icon: 'fa-brands fa-css3',
    items: ['CSS', 'Tailwind'],
    descriptions: {
      CSS: {
        en: 'CSS3 - Modern styling language for web design, supporting animations, flexbox, and grid layouts.',
        pt: 'CSS3 - Linguagem moderna de estilização para design web, com suporte a animações, flexbox e layouts em grid.',
        es: 'CSS3 - Lenguaje moderno de estilo para diseño web, con soporte para animaciones, flexbox y diseños en cuadrícula.'
      },
      Tailwind: {
        en: 'Tailwind CSS - A utility-first CSS framework for rapid UI development with pre-built components.',
        pt: 'Tailwind CSS - Framework CSS utilitário para desenvolvimento rápido de UI com componentes pré-construídos.',
        es: 'Tailwind CSS - Framework CSS utilitario para desarrollo rápido de UI con componentes preconstruidos.'
      }
    }
  },
  {
    title: 'JS',
    icon: 'fa-brands fa-js',
    items: ['TypeScript', 'React'],
    descriptions: {
      TypeScript: {
        en: 'TypeScript - A typed superset of JavaScript that compiles to plain JavaScript, adding optional static types.',
        pt: 'TypeScript - Um superconjunto tipado do JavaScript que compila para JavaScript puro, adicionando tipos estáticos opcionais.',
        es: 'TypeScript - Un superconjunto tipado de JavaScript que compila a JavaScript puro, agregando tipos estáticos opcionales.'
      },
      React: {
        en: 'React - A JavaScript library for building user interfaces with components and virtual DOM.',
        pt: 'React - Uma biblioteca JavaScript para construir interfaces de usuário com componentes e DOM virtual.',
        es: 'React - Una biblioteca JavaScript para construir interfaces de usuario con componentes y DOM virtual.'
      }
    }
  },
  {
    title: 'PHP',
    icon: 'fa-brands fa-php',
    items: ['Laravel', 'PHP'],
    descriptions: {
      Laravel: {
        en: 'Laravel - A PHP web application framework with expressive syntax and robust features.',
        pt: 'Laravel - Um framework PHP para aplicações web com sintaxe expressiva e recursos robustos.',
        es: 'Laravel - Un framework PHP para aplicaciones web con sintaxis expresiva y características robustas.'
      },
      PHP: {
        en: 'PHP - A popular server-side scripting language designed for web development.',
        pt: 'PHP - Uma linguagem popular de script do lado do servidor projetada para desenvolvimento web.',
        es: 'PHP - Un lenguaje de scripting del lado del servidor popular diseñado para desarrollo web.'
      }
    }
  },
  {
    title: 'BD',
    icon: 'fa-solid fa-database',
    items: ['MYSQL', 'MongoDB'],
    descriptions: {
      MYSQL: {
        en: 'MySQL - An open-source relational database management system.',
        pt: 'MySQL - Um sistema de gerenciamento de banco de dados relacional de código aberto.',
        es: 'MySQL - Un sistema de gestión de bases de datos relacionales de código abierto.'
      },
      MongoDB: {
        en: 'MongoDB - A NoSQL database that provides high performance, high availability, and easy scalability.',
        pt: 'MongoDB - Um banco de dados NoSQL que oferece alto desempenho, alta disponibilidade e fácil escalabilidade.',
        es: 'MongoDB - Una base de datos NoSQL que proporciona alto rendimiento, alta disponibilidad y fácil escalabilidad.'
      }
    }
  }
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<'en' | 'pt' | 'es'>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const changeLang = (newLang: 'en' | 'pt' | 'es') => {
    setLang(newLang);
    setIsLangMenuOpen(false);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aparecidomanuel20@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/244936218497';
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-gray-100'}`}>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg hover:scale-110 transition-transform duration-200"
      >
        {isMenuOpen ? <X className="animate-spin-slow" /> : <Menu className="animate-pulse" />}
      </button>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-800 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-6 space-y-4">
            <button onClick={() => scrollToSection('about')} className="flex w-full items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300">
              <User /> {translations[lang].about}
            </button>
            <button onClick={() => scrollToSection('skills')} className="flex w-full items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300">
              <Wrench /> {translations[lang].skills}
            </button>
            <button onClick={() => scrollToSection('more')} className="flex w-full items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300">
              <Book /> {translations[lang].more}
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="flex w-full items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300">
              <Briefcase /> {translations[lang].portfolio}
            </button>
            <button onClick={() => scrollToSection('contact')} className="flex w-full items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300">
              <Mail /> {translations[lang].contact}
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Button (Mobile) */}
      <a
        href="https://wa.me/244936218497"
        onClick={handleWhatsAppClick}
        className="fixed bottom-4 right-4 z-50 md:hidden bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300 flex items-center gap-2"
      >
        <MessageSquare className="animate-bounce" />
        <span className="font-medium">{translations[lang].chat_whatsapp}</span>
      </a>

      <div className="container mx-auto px-4 py-8">
        {/* Theme and Language Toggles */}
        <div className="fixed top-4 right-4 flex gap-4 z-50">
          <button 
            onClick={toggleDark}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200"
          >
            {isDark ? 
              <Sun className="text-yellow-400" /> : 
              <Moon className="text-gray-600" />
            }
          </button>
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200 flex items-center gap-2"
            >
              <Languages className={`${isDark ? 'text-white' : 'text-gray-600'}`} />
              <span className="text-sm font-medium text-gray-600 dark:text-white uppercase">{lang}</span>
            </button>
            
            {isLangMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg py-2">
                <button
                  onClick={() => changeLang('pt')}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 ${lang === 'pt' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  <span className="text-lg">🇵🇹</span>
                  Português
                </button>
                <button
                  onClick={() => changeLang('en')}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 ${lang === 'en' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  <span className="text-lg">🇬🇧</span>
                  English
                </button>
                <button
                  onClick={() => changeLang('es')}
                  className={`flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 ${lang === 'es' ? 'text-blue-500' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  <span className="text-lg">🇪🇸</span>
                  Español
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Social Links Sidebar (Desktop Only) */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4 z-40">
          <a href="https://www.facebook.com/ciprianodos.santos.773" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/aparecido-manuel-54212720b/" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
            <i className="fab fa-linkedin text-2xl"></i>
          </a>
          <a 
            href="https://wa.me/244936218497"
            onClick={handleWhatsAppClick}
            className="text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-16 animate-fadeIn">
            <div className="relative inline-block group">
              {/* Image Container with modern glass effect */}
              <div className="relative rounded-full p-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <div className="relative rounded-full p-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden transform transition-all duration-700 group-hover:scale-105">
                  <img 
                    src="https://scontent.flad4-1.fna.fbcdn.net/v/t39.30808-6/449778615_1002714981530401_6679711823714196239_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEkGOlBQM444vlwYcxvZ1wm6i99EcXf933qL30Rxd_3fU9XYFCqsexwUndy3HSukyBYdMKdUd0Yti3Gv8aU6b0i&_nc_ohc=E5v_elPICMoQ7kNvgEtxiLc&_nc_oc=AdhqI8gxzYQz_BOAc-ZsJ_XvKPreozOy5GW1g8-YMLGEZNIcZiMYy84jmKeaHY3G4NMfM8dbUQ7jwqvJBEjc5ZM1&_nc_zt=23&_nc_ht=scontent.flad4-1.fna&_nc_gid=AlFVvNZDwGR62wwsBSgPKl1&oh=00_AYHmIS04NSp-W3ekIo-4aA_jcsDYBt_srGzEIm-O4O-I2w&oe=67D1B85D" 
                    alt="Profile" 
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover transform transition-all duration-700 group-hover:rotate-6 group-hover:scale-110"
                  />
                  
                  {/* Modern shine effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/70 to-white/0 opacity-0 group-hover:opacity-40 blur-sm transition-all duration-700 animate-shine"></div>
                </div>
              </div>
            </div>
            
            <h1 className="mt-8 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-300">
              {translations[lang].name}
            </h1>
            
          </div>

          {/* Navigation */}
          <nav className="mb-16 hidden md:block animate-fadeIn">
            <ul className="flex flex-wrap justify-center gap-6 md:gap-8">
              <li className="animate-slideDown" style={{ animationDelay: '0.1s' }}>
                <button onClick={() => scrollToSection('about')} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-gray-800 dark:text-white group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                  <User className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300 text-lg font-medium">{translations[lang].about}</span>
                </button>
              </li>
              <li className="animate-slideDown" style={{ animationDelay: '0.2s' }}>
                <button onClick={() => scrollToSection('skills')} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-gray-800 dark:text-white group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                  <Wrench className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300 text-lg font-medium">{translations[lang].skills}</span>
                </button>
              </li>
              <li className="animate-slideDown" style={{ animationDelay: '0.3s' }}>
                <button onClick={() => scrollToSection('more')} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-gray-800 dark:text-white group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                  <Book className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300 text-lg font-medium">{translations[lang].more}</span>
                </button>
              </li>
              <li className="animate-slideDown" style={{ animationDelay: '0.4s' }}>
                <button onClick={() => scrollToSection('portfolio')} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-gray-800 dark:text-white group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                  <Briefcase className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300 text-lg font-medium">{translations[lang].portfolio}</span>
                </button>
              </li>
              <li className="animate-slideDown" style={{ animationDelay: '0.5s' }}>
                <button onClick={() => scrollToSection('contact')} className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 text-gray-800 dark:text-white group relative overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
                  <Mail className="relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300 text-lg font-medium">{translations[lang].contact}</span>
                </button>
              </li>
            </ul>
          </nav>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Timeline Container */}
            <div className="relative">
              {/* Modern timeline line with gradient */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

              {/* About Section */}
              <section id="about" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                  <User size={20} />
                </div>
                <div className="ml-14 p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
                    {translations[lang].about}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {translations[lang].bio}
                  </p>
                </div>
              </section>

              {/* Skills Section with modern cards */}
              <section id="skills" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                  <Wrench size={20} />
                </div>
                <div className="ml-14 p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg">
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
                    {translations[lang].skills}
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="group relative p-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        <h3 className="text-lg font-bold mb-3 text-center">{skill.title}</h3>
                        <div className="flex flex-col items-center gap-3">
                          <i className={`${skill.icon} text-3xl mb-1 transform group-hover:scale-110 transition-transform duration-300`}></i>
                          {skill.items.length > 0 && (
                            <div className="w-full space-y-2">
                              {skill.items.map((item, i) => (
                                <div key={i} className="relative group/item">
                                  <p className="text-sm p-2 rounded-lg transition-all duration-200 text-center bg-white/10 hover:bg-white/20 backdrop-blur-sm">
                                    {item}
                                  </p>
                                  <div className="opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible absolute left-1/2 top-full mt-2 -translate-x-1/2 w-64 z-20 transition-all duration-300 transform origin-top scale-95 group-hover/item:scale-100">
                                    <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/20">
                                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {skill.descriptions[item][lang]}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* More Section */}
              <section id="more" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white z-10 shadow-lg">
                  <Book size={20} className="transform group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="ml-14 p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                  {/* Education */}
                  <div className="mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mb-8 flex items-center gap-3">
                      <i className="fas fa-graduation-cap text-blue-500 text-3xl"></i>
                      Formação Acadêmica
                    </h3>
                    <div className="pl-8 border-l-2 border-gradient-to-b from-blue-500 via-purple-500 to-pink-500">
                      <div className="relative mb-8 group">
                        <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg transform group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-500">
                          <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                            Universidade Óscar Ribas (UOR)
                          </h4>
                          <p className="text-lg font-medium text-blue-500 dark:text-blue-400 mt-2">
                            Licenciatura em Engenharia Informática e Comunicação
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Especialização em Programação
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Experience */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mb-8 flex items-center gap-3">
                      <i className="fas fa-briefcase text-purple-500 text-3xl"></i>
                      Experiência Profissional
                    </h3>
                    <div className="pl-8 border-l-2 border-gradient-to-b from-purple-500 via-pink-500 to-blue-500 space-y-8">
                      {/* Current Position */}
                      <div className="relative group">
                        <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transform group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:translate-x-2 transition-all duration-500">
                          <div className="absolute top-0 right-0 mt-4 mr-4">
                            <span className="px-3 py-1 text-sm bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-lg">
                              Atual
                            </span>
                          </div>
                          <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                            Universidade Óscar Ribas
                          </h4>
                          <p className="text-lg font-medium text-purple-500 dark:text-purple-400 mt-2">
                            Analista de Helpdesk
                          </p>
                        </div>
                      </div>

                      {/* AJMcod Position */}
                      <div className="relative group">
                        <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 shadow-lg transform group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:translate-x-2 transition-all duration-500">
                          <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-blue-600">
                            AJMcod
                          </h4>
                          <p className="text-lg font-medium text-pink-500 dark:text-pink-400 mt-2">
                            Desenvolvedor Full Stack
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Projeto Me Encontre
                          </p>
                        </div>
                      </div>

                      {/* CEFMIDIA Position */}
                      <div className="relative group">
                        <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transform group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:translate-x-2 transition-all duration-500">
                          <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            CEFMIDIA
                          </h4>
                          <p className="text-lg font-medium text-blue-500 dark:text-blue-400 mt-2">
                            Professor de Desenvolvimento Web
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mt-2">
                            Centro de Formação
                          </p>
                        </div>
                      </div>

                      {/* Theus Position */}
                      <div className="relative group">
                        <div className="absolute -left-10 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg transform group-hover:scale-125 transition-transform duration-300"></div>
                        <div className="p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:translate-x-2 transition-all duration-500">
                          <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
                            Theus
                          </h4>
                          <p className="text-lg font-medium text-indigo-500 dark:text-indigo-400 mt-2">
                            Designer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Availability Banner */}
                  <div className="mt-12 relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                      <p className="text-white font-bold text-center text-xl">
                        {translations[lang].availability}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Portfolio Section */}
              <section id="portfolio" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10">
                  <Briefcase size={20} />
                </div>
                <div className="ml-14 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
                    {translations[lang].portfolio}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Me Encontre Project */}
                    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-90"></div>
                        <i className="fas fa-map-marker-alt absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {translations[lang].meEncontre}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {translations[lang].meEncontreDesc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">AJMcod</span>
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">Node.js</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">MongoDB</span>
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-300">
                          <span>{translations[lang].viewProject}</span>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>

                    {/* Online Ticket Project */}
                    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90"></div>
                        <i className="fas fa-ticket-alt absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {translations[lang].onlineTicket}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {translations[lang].ticketDesc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">Node.js</span>
                          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">MongoDB</span>
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-300">
                          <span>{translations[lang].viewProject}</span>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>

                    {/* Portfolio Website Project */}
                    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 opacity-90"></div>
                        <i className="fas fa-laptop-code absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {translations[lang].portfolioWebsite}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {translations[lang].portfolioDesc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">React</span>
                          <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-300 rounded-full text-sm">Tailwind</span>
                          <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm">TypeScript</span>
                        </div>
                        <a href="#" className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors duration-300">
                          <span>{translations[lang].viewProject}</span>
                          <i className="fas fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>

                    {/* Coming Soon Project */}
                    <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-48 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 opacity-90"></div>
                        <i className="fas fa-rocket absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl"></i>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {translations[lang].comingSoon}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {translations[lang].comingDesc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm">???</span>
                        </div>
                        <span className="inline-flex items-center gap-2 text-gray-400 cursor-not-allowed">
                          <span>{translations[lang].viewProject}</span>
                          <i className="fas fa-lock"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10">
                  <ChevronDown size={20} />
                </div>
              </section>

              {/* Contact Form */}
              <section id="contact" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10">
                  <Mail size={20} className="animate-pulse" />
                </div>
                <div className="ml-14">
                  <form 
                    className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden group"
                    action="mailto:aparecidomanuel20@gmail.com"
                    method="post"
                    encType="text/plain"
                  >
                    {/* Background gradient animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    
                    <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center gap-3 group">
                      <Mail className="inline-block transform group-hover:rotate-12 transition-transform duration-300" />
                      {translations[lang].contact}
                      <span className="text-blue-500 animate-bounce">!</span>
                    </h2>

                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row gap-6">
                        <div className="flex-1 group/input">
                          <label className="block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-t-xl transition-all duration-300 transform origin-left">
                            <span className="inline-block transform group-focus-within/input:scale-110 transition-transform duration-300">
                              {translations[lang].name_label}
                            </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="w-full border-2 border-blue-500 p-3 rounded-b-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-blue-500/50 focus:border-blue-600 transition-all duration-300 outline-none"
                            placeholder={translations[lang].name_label}
                          />
                        </div>
                        <div className="flex-1 group/input">
                          <label className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-t-xl transition-all duration-300 transform origin-left">
                            <span className="inline-block transform group-focus-within/input:scale-110 transition-transform duration-300">
                              {translations[lang].surname}
                            </span>
                          </label>
                          <input
                            type="text"
                            name="surname"
                            className="w-full border-2 border-blue-600 p-3 rounded-b-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-blue-600/50 focus:border-blue-700 transition-all duration-300 outline-none"
                            placeholder={translations[lang].surname}
                          />
                        </div>
                      </div>

                      <div className="group/input">
                        <label className="block bg-gradient-to-r from-blue-700 to-purple-600 text-white px-4 py-2 rounded-t-xl transition-all duration-300 transform origin-left">
                          <span className="inline-block transform group-focus-within/input:scale-110 transition-transform duration-300">
                            {translations[lang].subject}
                          </span>
                        </label>
                        <input
                          type="text"
                          name="subject"
                          className="w-full border-2 border-purple-600 p-3 rounded-b-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-purple-500/50 focus:border-purple-700 transition-all duration-300 outline-none"
                          placeholder={translations[lang].subject}
                        />
                      </div>

                      <div className="group/input">
                        <label className="block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-t-xl transition-all duration-300 transform origin-left">
                          <span className="inline-block transform group-focus-within/input:scale-110 transition-transform duration-300">
                            Email
                          </span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="w-full border-2 border-indigo-600 p-3 rounded-b-xl dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-indigo-500/50 focus:border-indigo-700 transition-all duration-300 outline-none"
                          placeholder="Email"
                        />
                      </div>

                      <div className="group/input">
                        <label className="block bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2 rounded-t-xl transition-all duration-300 transform origin-left">
                          <span className="inline-block transform group-focus-within/input:scale-110 transition-transform duration-300">
                            <Mail className="inline mr-2 transform group-focus-within/input:rotate-12 transition-transform duration-300" />
                            {translations[lang].message}
                          </span>
                        </label>
                        <textarea
                          name="message"
                          className="w-full border-2 border-blue-600 p-4 rounded-b-xl h-32 dark:bg-gray-700 dark:text-white focus:ring-4 focus:ring-blue-500/50 focus:border-blue-700 transition-all duration-300 outline-none resize-none"
                          placeholder={`${translations[lang].message}...`}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95 flex items-center justify-center gap-3 group/button"
                      >
                        <Send className="inline-block transform group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform duration-300" />
                        <span className="text-lg font-semibold">{translations[lang].send}</span>
                      </button>
                    </div>

                    {/* Contact info cards */}
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <a 
                        href={`mailto:aparecidomanuel20@gmail.com`}
                        onClick={handleEmailClick}
                        className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                      >
                        <Mail className="text-blue-500 transform group-hover:rotate-12 transition-transform duration-300" />
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300">aparecidomanuel20@gmail.com</span>
                      </a>
                      <a 
                        href="https://wa.me/244936218497"
                        onClick={handleWhatsAppClick}
                        className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 transition-all duration-300 flex items-center gap-3 group cursor-pointer"
                      >
                        <i className="fab fa-whatsapp text-2xl text-green-500 transform group-hover:rotate-12 transition-transform duration-300"></i>
                        <span className="text-gray-600 dark:text-gray-300 group-hover:text-green-500 transition-colors duration-300">+244 936218497</span>
                      </a>
                    </div>
                  </form>
                </div>
                <div className="absolute left-0 bottom-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10">
                  <ChevronDown size={20} />
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-12 relative bg-white dark:bg-gray-800 rounded-t-3xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50 dark:to-blue-900/10 opacity-50 rounded-t-3xl pointer-events-none"></div>
              
              {/* Scroll to Top Button */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group"
              >
                <ChevronDown size={24} className="transform rotate-180 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>

              <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Phone size={24} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                          {translations[lang].phone}
                        </h3>
                        <div className="space-y-1">
                          <a href="tel:+244936218497" className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                            +244 936218497
                          </a>
                          <a href="tel:+244936218497" className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
                            +244 936218497
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors duration-300">
                        <Mail size={24} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                          Email
                        </h3>
                        <a 
                          href="mailto:aparecidomanuel20@gmail.com"
                          onClick={handleEmailClick}
                          className="block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 hover:underline"
                        >
                          aparecidomanuel20@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-xl">
                        <i className="fas fa-share-alt text-blue-500 text-xl"></i>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {translations[lang].social}
                      </h3>
                    </div>
                    <div className="flex gap-4">
                      <a 
                        href="https://www.facebook.com/ciprianodos.santos.773" 
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group"
                      >
                        <i className="fab fa-facebook text-xl text-gray-600 dark:text-gray-300 group-hover:text-blue-500"></i>
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/aparecido-manuel-54212720b/" 
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-blue-500/20 hover:scale-110 transition-all duration-300 group"
                      >
                        <i className="fab fa-linkedin text-xl text-gray-600 dark:text-gray-300 group-hover:text-blue-500"></i>
                      </a>
                      <a 
                        href="https://wa.me/244936218497"
                        onClick={handleWhatsAppClick}
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-green-500/20 hover:scale-110 transition-all duration-300 group"
                      >
                        <i className="fab fa-whatsapp text-xl text-gray-600 dark:text-gray-300 group-hover:text-green-500"></i>
                      </a>
                      <a 
                        href="#" 
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-pink-500/20 hover:scale-110 transition-all duration-300 group"
                      >
                        <i className="fab fa-instagram text-xl text-gray-600 dark:text-gray-300 group-hover:text-pink-500"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <p className="text-center text-gray-600 dark:text-gray-400">
                    © {new Date().getFullYear()} Aparecido Manuel. {translations[lang].rights}
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;