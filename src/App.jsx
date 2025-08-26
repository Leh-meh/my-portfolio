import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import WelcomeScreen from "./Pages/WelcomeScreen";
import NotFoundPage from "./Pages/NotFoundPage";

// Components
import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/Background";
import ProjectDetails from "./components/ProjectDetail";

// Footer atualizado com scroll suave
const Footer = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#030014] border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        {/* Divisor */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-8"></div>

        {/* Conteúdo principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Logo e direitos autorais */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Medeiross.dev
              </span>
            </div>
            <span className="text-sm text-gray-400 text-center md:text-left">
              Desenvolvendo soluções digitais com excelência
            </span>
          </div>

          {/* Links úteis */}
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => handleScroll("home")}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
            >
              Início
            </button>
            <button
              onClick={() => handleScroll("about")}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
            >
              Sobre
            </button>
            <button
              onClick={() => handleScroll("portfolio")}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
            >
              Projetos
            </button>
            <button
              onClick={() => handleScroll("contact")}
              className="text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
            >
              Contato
            </button>
          </div>

          {/* Redes sociais */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-purple-500/10 rounded-lg transition-all duration-300 hover:scale-110"
            >
              {/* Ícone GitHub */}
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 hover:bg-purple-500/10 rounded-lg transition-all duration-300 hover:scale-110"
            >
              {/* Ícone LinkedIn */}
            </a>
            <a
              href="mailto:contato@medeiross.dev"
              className="p-2 bg-white/5 hover:bg-purple-500/10 rounded-lg transition-all duration-300 hover:scale-110"
            >
              {/* Ícone Email */}
            </a>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="text-center pt-4 border-t border-white/5">
          <span className="text-xs text-gray-500">
            © 2025 Medeiross.dev • Desenvolvido com React e Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};

// Landing Page Layout
const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="portfolio">
            <Portofolio />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
          <Footer />
        </>
      )}
    </>
  );
};

LandingPage.propTypes = {
  showWelcome: PropTypes.bool.isRequired,
  setShowWelcome: PropTypes.func.isRequired,
};

// Project Page Layout
const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <Footer />
  </>
);

// Main App
function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
