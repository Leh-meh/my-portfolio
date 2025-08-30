import { useEffect, useMemo, memo } from "react";
import PropTypes from "prop-types";
import { Code, Award, Globe, FileText } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { certificates } from "../data/certificatesData";
import { projects } from "../data/projectsData";

const StatCard = ({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} className="relative group">
    <div className={`relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col justify-between`}>
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="text-4xl font-bold text-white">{value}</span>
      </div>
      <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
      <p className="text-xs text-gray-400">{description}</p>
    </div>
  </div>
);

StatCard.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  animation: PropTypes.string.isRequired,
};

const AboutPage = () => {
  // Totais
  const totalProjects = projects.length;
  const totalCertificates = certificates.length;

  // Experiência
  const YearExperience = useMemo(() => {
    const startDate = new Date("2024-05-06");
    const today = new Date();
    return today.getFullYear() - startDate.getFullYear() - (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);
  }, []);

  const statsData = [
    { icon: Code, color: "from-[#6366f1] to-[#a855f7]", value: totalProjects, label: "TOTAL PROJECTS", description: "Projetos desenvolvidos", animation: "fade-right" },
    { icon: Award, color: "from-[#a855f7] to-[#6366f1]", value: totalCertificates, label: "CERTIFICATES", description: "Certificados acadêmicos e cursos", animation: "fade-up" },
    { icon: Globe, color: "from-[#6366f1] to-[#a855f7]", value: YearExperience, label: "YEARS OF EXPERIENCE", description: "Experiência contínua", animation: "fade-left" },
  ];

  useEffect(() => {
    AOS.init({ once: false });
    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm:mt-0" id="About">
      {/* Header */}
      <div className="text-center lg:mb-8 mb-2 px-[5%]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Olá Eu sou,</span>
          <span className="block mt-2 text-gray-200">Leticia Medeiros</span>
        </h2>
      </div>

      {/* Conteúdo de Apresentação */}
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify" data-aos="fade-right">
            A maior parte da tecnologia de computadores e telecomunicações que permite a melhor experiência no front-end.
          </p>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-4 lg:px-0 w-full">
            <a href="/curriculo.pdf" className="w-full lg:w-auto">
              <button data-aos="fade-up" className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" /> Download CV
              </button>
            </a>
            <a href="#Portofolio" className="w-full lg:w-auto">
              <button data-aos="fade-up" className="w-full lg:w-auto sm:px-6 py-2 sm:py-3 rounded-lg border border-[#a855f7]/50 text-[#a855f7] font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 hover:bg-[#a855f7]/10">
                <Code className="w-4 h-4 sm:w-5 sm:h-5" /> View Projects
              </button>
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex justify-center sm:justify-end" data-aos="fade-up">
          <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700 hover:scale-105">
            <img src="/photo.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {statsData.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default memo(AboutPage);
