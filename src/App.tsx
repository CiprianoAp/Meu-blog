import React, { useState } from 'react';
import { Moon, Sun, Languages, User, Briefcase, ChevronDown, Mail, Phone, Wrench, Menu, X, Home, Info, Book, Send, MessageSquare } from 'lucide-react';

const translations = {
  en: {
    about: 'About',
    more: 'More',
    portfolio: 'Portfolio',
    name: 'Aparecido Manuel (AP)',
    bio: 'Software developer since 2015. I fell in love with app creation during high school in TLP class when I discovered that for an application to work, it needs a set of instructions (code) behind it. Since then, I developed a huge passion for writing computer code. Later, I started working exclusively with the C# programming language for desktop.',
    education: 'Graduated in Computer and Communication Engineering from Óscar Ribas University (UOR), specializing in programming. Former web development professor at CEFMIDIA training center. Worked at Theus as a Designer but currently working in helpdesk at Óscar Ribas University.',
    availability: 'Available for front-end or back-end programming positions',
    contact: 'Contact Me!',
    send: 'Send',
    name_label: 'Name',
    surname: 'Surname',
    subject: 'Subject',
    message: 'Message',
    phone: 'Phone',
    social: 'Social Networks',
    skills: 'Skills',
    chat_whatsapp: 'Chat on WhatsApp'
  },
  pt: {
    about: 'Sobre',
    more: 'Mais',
    portfolio: 'Portfólio',
    name: 'Aparecido Manuel (AP)',
    bio: 'Desenvolvedor de software desde 2015. Me apaixonei em criação de app desde o ensino médio na aula de TLP quando descobri nesta mesma aula, que para uma aplicação funcionar é necessário um conjunto de instruções (código) por detrás dela. Desde aí então cresceu-me uma enorme paixão em escrever código de computador. Posteriormente comecei a trabalhar apenas com a linguagem de programação C# para desktop.',
    education: 'Licenciado em engenharia informática e comunicação pela Universidade Óscar Ribas (UOR), tendo como especialidade programação. Já foi professor de desenvolvimento de web no centro de formação CEFMIDIA. Trabalhei na Theus como Designer mas atualmente trabalho na área de helpdesk na universidade Óscar Ribas.',
    availability: 'Disponível para vaga de programação front ou back',
    contact: 'Fala comigo!',
    send: 'Enviar',
    name_label: 'Nome',
    surname: 'Sobrenome',
    subject: 'Assunto',
    message: 'Mensagem',
    phone: 'Telefone',
    social: 'Redes sociais',
    skills: 'Habilidades',
    chat_whatsapp: 'Conversar no WhatsApp'
  },
  es: {
    about: 'Sobre',
    more: 'Más',
    portfolio: 'Portafolio',
    name: 'Aparecido Manuel (AP)',
    bio: 'Desarrollador de software desde 2015. Me enamoré de la creación de aplicaciones durante la escuela secundaria en la clase de TLP cuando descubrí que para que una aplicación funcione, necesita un conjunto de instrucciones (código) detrás. Desde entonces, desarrollé una gran pasión por escribir código de computadora.',
    education: 'Graduado en Ingeniería Informática y Comunicación por la Universidad Óscar Ribas (UOR), especializado en programación.',
    availability: 'Disponible para posiciones de programación front-end o back-end',
    contact: '¡Contáctame!',
    send: 'Enviar',
    name_label: 'Nombre',
    surname: 'Apellido',
    subject: 'Asunto',
    message: 'Mensaje',
    phone: 'Teléfono',
    social: 'Redes Sociales',
    skills: 'Habilidades',
    chat_whatsapp: 'Chatear en WhatsApp'
  }
};

const skills = [
  {
    title: 'HTML',
    icon: 'fa-brands fa-html5 text-8xl',
    items: []
  },
  {
    title: 'CSS',
    icon: 'fa-brands fa-css3',
    items: ['CSS', 'Tailwind']
  },
  {
    title: 'JS',
    icon: 'fa-brands fa-js',
    items: ['TypeScript', 'React']
  },
  {
    title: 'PHP',
    icon: 'fa-brands fa-php',
    items: ['Laravel', 'PHP']
  },
  {
    title: 'BD',
    icon: 'fa-solid fa-database',
    items: ['MYSQL']
  }
];

function App() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState<'en' | 'pt' | 'es'>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const toggleLang = () => {
    const langs: ('en' | 'pt' | 'es')[] = ['en', 'pt', 'es'];
    const currentIndex = langs.indexOf(lang);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLang(langs[nextIndex]);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:aparecidomanuel20@gmail.com';
  };

  const handleWhatsAppClick = () => {
    window.location.href = 'https://wa.me/244936218497';
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
            <a href="#about" className="flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              <User className="animate-bounce" /> {translations[lang].about}
            </a>
            <a href="#skills" className="flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              <Wrench className="animate-bounce" /> {translations[lang].skills}
            </a>
            <a href="#more" className="flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              <Book className="animate-bounce" /> {translations[lang].more}
            </a>
            <a href="#portfolio" className="flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              <Briefcase className="animate-bounce" /> {translations[lang].portfolio}
            </a>
            <a href="#contact" className="flex items-center gap-2 text-lg font-medium text-gray-800 dark:text-white hover:text-blue-500 transform hover:translate-x-2 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              <Mail className="animate-bounce" /> {translations[lang].contact}
            </a>
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
              <Sun className="text-yellow-400 animate-spin-slow" /> : 
              <Moon className="text-gray-600 animate-bounce" />
            }
          </button>
          <button 
            onClick={toggleLang}
            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:scale-110 transition-transform duration-200"
          >
            <Languages className={`${isDark ? 'text-white' : 'text-gray-600'} animate-pulse`} />
          </button>
        </div>

        {/* Social Links Sidebar (Desktop Only) */}
        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-4 z-40">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
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
          <div className="text-center mb-12 animate-fadeIn">
            <div className="relative inline-block group">
              <img 
                src="https://scontent.flad4-1.fna.fbcdn.net/v/t39.30808-6/449778615_1002714981530401_6679711823714196239_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEkGOlBQM444vlwYcxvZ1wm6i99EcXf933qL30Rxd_3fU9XYFCqsexwUndy3HSukyBYdMKdUd0Yti3Gv8aU6b0i&_nc_ohc=E5v_elPICMoQ7kNvgEtxiLc&_nc_oc=AdhqI8gxzYQz_BOAc-ZsJ_XvKPreozOy5GW1g8-YMLGEZNIcZiMYy84jmKeaHY3G4NMfM8dbUQ7jwqvJBEjc5ZM1&_nc_zt=23&_nc_ht=scontent.flad4-1.fna&_nc_gid=AlFVvNZDwGR62wwsBSgPKl1&oh=00_AYHmIS04NSp-W3ekIo-4aA_jcsDYBt_srGzEIm-O4O-I2w&oe=67D1B85D" 
                alt="Profile" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-blue-500 p-1 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:border-blue-600"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
              {translations[lang].name}
            </h1>
          </div>

          {/* Navigation */}
          <nav className="mb-12 hidden md:block">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#about" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white text-gray-800 dark:text-white group">
                  <User className="group-hover:rotate-12 transition-transform duration-300" /> {translations[lang].about}
                </a>
              </li>
              <li>
                <a href="#skills" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white text-gray-800 dark:text-white group">
                  <Wrench className="group-hover:rotate-12 transition-transform duration-300" /> {translations[lang].skills}
                </a>
              </li>
              <li>
                <a href="#more" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white text-gray-800 dark:text-white group">
                  <Book className="group-hover:rotate-12 transition-transform duration-300" /> {translations[lang].more}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white text-gray-800 dark:text-white group">
                  <Briefcase className="group-hover:rotate-12 transition-transform duration-300" /> {translations[lang].portfolio}
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:text-white text-gray-800 dark:text-white group">
                  <Mail className="group-hover:rotate-12 transition-transform duration-300" /> {translations[lang].contact}
                </a>
              </li>
            </ul>
          </nav>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Timeline Container */}
            <div className="relative">
              {/* Continuous Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500 dark:bg-blue-400"></div>

              {/* About Section */}
              <section id="about" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-pulse">
                  <User size={20} className="animate-bounce" />
                </div>
                <div className="ml-14 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-102 transition-transform duration-300">
                  <p className="text-gray-600 dark:text-gray-300">
                    {translations[lang].bio}
                  </p>
                </div>
                <div className="absolute left-0 bottom-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-bounce">
                  <ChevronDown size={20} className="animate-bounce" />
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-pulse">
                  <Wrench size={20} className="animate-spin-slow" />
                </div>
                <div className="ml-14 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="group p-4 bg-blue-500 dark:bg-blue-600 text-white rounded-lg transform transition-all duration-500 hover:scale-110 hover:rotate-3 hover:shadow-xl"
                      >
                        <h3 className="text-xl font-bold mb-4 group-hover:translate-y-[-5px] transition-transform duration-300">{skill.title}</h3>
                        <div className="flex flex-col items-center gap-2">
                          <i className={`${skill.icon} group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}></i>
                          {skill.items.map((item, i) => (
                            <p key={i} className="text-lg group-hover:translate-y-2 transition-transform duration-300">{item}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-bounce">
                  <ChevronDown size={20} className="animate-bounce" />
                </div>
              </section>

              {/* More Section */}
              <section id="more" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-pulse">
                  <Book size={20} className="animate-bounce" />
                </div>
                <div className="ml-14 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform hover:scale-102 transition-transform duration-300">
                  <p className="text-gray-600 dark:text-gray-300">
                    {translations[lang].education}
                  </p>
                  <p className="mt-4 font-bold text-gray-800 dark:text-white">
                    {translations[lang].availability}
                  </p>
                </div>
                <div className="absolute left-0 bottom-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-bounce">
                  <ChevronDown size={20} className="animate-bounce" />
                </div>
              </section>

              {/* Portfolio Section */}
              <section id="portfolio" className="relative pb-16">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-pulse">
                  <Briefcase size={20} className="animate-bounce" />
                </div>
                <div className="ml-14 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                  <div className="bg-blue-500 dark:bg-blue-600 p-4 rounded-lg text-white transform hover:scale-110 hover:rotate-2 transition-all duration-300 cursor-pointer group">
                    <h3 className="text-xl font-bold mb-2 group-hover:translate-y-[-5px] transition-transform duration-300">Projeto</h3>
                    <p className="group-hover:translate-y-2 transition-transform duration-300">Compra de bilhete online</p>
                  </div>
                </div>
                <div className="absolute left-0 bottom-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-bounce">
                  <ChevronDown size={20} className="animate-bounce" />
                </div>
              </section>

              {/* Contact Form */}
              <section id="contact" className="relative">
                <div className="absolute left-0 top-0 w-10 h-10 bg-blue-500 dark:bg-blue-400 rounded-full flex items-center justify-center text-white z-10 animate-pulse">
                  <Mail size={20} className="animate-bounce" />
                </div>
                <div className="ml-14">
                  <form 
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-102 transition-transform duration-300"
                    action="mailto:aparecidomanuel20@gmail.com"
                    method="post"
                    encType="text/plain"
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                      {translations[lang].contact}
                    </h2>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-1">
                          <label className="block bg-blue-500 text-white px-3 py-2 rounded-t-lg">
                            {translations[lang].name_label}
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="w-full border border-blue-500 p-2 rounded-b-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            placeholder={translations[lang].name_label}
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block bg-blue-500 text-white px-3 py-2 rounded-t-lg">
                            {translations[lang].surname}
                          </label>
                          <input
                            type="text"
                            name="surname"
                            className="w-full border border-blue-500 p-2 rounded-b-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            placeholder={translations[lang].surname}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block bg-blue-500 text-white px-3 py-2 rounded-t-lg">
                          {translations[lang].subject}
                        </label>
                        <input
                          type="text"
                          name="subject"
                          className="w-full border border-blue-500 p-2 rounded-b-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                          placeholder={translations[lang].subject}
                        />
                      </div>
                      <div>
                        <label className="block bg-blue-500 text-white px-3 py-2 rounded-t-lg">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="w-full border border-blue-500 p-2 rounded-b-lg dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                          placeholder="Email"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">
                          <Mail className="inline mr-2" />
                          {translations[lang].message}
                        </label>
                        <textarea
                          name="message"
                          className="w-full border border-blue-500 p-4 rounded-lg h-32 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:rotate-1 hover:shadow-xl"
                      >
                        <Send className="inline-block mr-2" />
                        {translations[lang].send}
                      </button>
                    </div>
                  </form>
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-600 dark:text-gray-300">
              <div>
                <h3 className="flex items-center gap-2 text-blue-500 dark:text-blue-400 font-bold mb-2">
                  <Phone size={20} className="animate-bounce" />
                  {translations[lang].phone}
                </h3>
                <p>+244 936218497</p>
                <p>+244 936218497</p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-blue-500 dark:text-blue-400 font-bold mb-2">
                  <Mail size={20} className="animate-bounce" />
                  Email
                </h3>
                <p>
                  <a 
                    href="mailto:aparecidomanuel20@gmail.com"
                    onClick={handleEmailClick}
                    className="hover:text-blue-500 transition-colors duration-300 hover:underline"
                  >
                    aparecidomanuel20@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-blue-500 dark:text-blue-400 font-bold mb-2">
                  {translations[lang].social}
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
                    <i className="fab fa-facebook text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a 
                    href="https://wa.me/244936218497"
                    onClick={handleWhatsAppClick}
                    className="text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-all duration-300 hover:scale-125 hover:rotate-12"
                  >
                    <i className="fab fa-whatsapp text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 hover:scale-125 hover:rotate-12">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
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