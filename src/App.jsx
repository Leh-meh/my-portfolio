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

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1f] border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        {/* Divisor */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent mb-8"></div>

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
            <span className="text-sm text-gray-300 text-center md:text-left">
              Desenvolvendo soluções digitais com excelência
            </span>
          </div>

                {/* Redes sociais */}
        <div className="flex gap-4">
          <a
            href="https://github.com/Leh-meh"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-purple-300/30"
          >
            <img 
              width="24" 
              height="24" 
              src="https://img.icons8.com/ios-glyphs/30/github.png" 
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-purple-300/30"
          >
            <img 
              width="24" 
              height="24" 
              src="https://img.icons8.com/ios-glyphs/30/linkedin.png" 
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://www.instagram.com/medeiross.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-purple-300/30"
          >
            <img 
              width="24" 
              height="24" 
              src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" 
              alt="Instagram"
            />
          </a>
          <a
            href="https://discord.com/users/SEU_ID_DO_DISCORD"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-full transition-all duration-300 transform hover:scale-110 hover:bg-purple-300/30"
          >
            <img 
              width="24" 
              height="24" 
              src="https://img.icons8.com/ios-glyphs/30/discord-logo.png" 
              alt="Discord"
            />
          </a>
        </div>


        </div> {/* Fim do conteúdo principal */}

        {/* Rodapé inferior */}
        <div className="text-center pt-4 border-t border-white/5">
          <span className="text-xs text-gray-400">
       © 2025 Medeiross.dev • Transformando ideias em experiências digitais
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
          <section id="Home">
            <Home />
          </section>
          <section id="About">
            <About />
          </section>
          <section id="Portfolio">
            <Portofolio />
          </section>
          <section id="Contact">
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
