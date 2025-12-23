import { GraduationCap, Laptop, BookOpen, Award } from "lucide-react";
import PropTypes from "prop-types";

const Certificate = ({ title, organization, course, issueDate, type }) => {
  // Ícones por tipo
  const getIcon = (type) => {
    switch (type) {
      case "academic":
        return <GraduationCap size={22} color="white" />;
      case "certificacao":
        return <Laptop size={22} color="white" />;
      case "idioma":
        return <BookOpen size={22} color="white" />;
      case "premio":
        return <Award size={22} color="white" />;
      default:
        return <GraduationCap size={22} color="white" />;
    }
  };

  // Cores do círculo
  const getCircleColor = (type) => {
    switch (type) {
      case "academic":
        return "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)";
      case "certificacao":
        return "linear-gradient(135deg, #10B981 0%, #059669 100%)";
      case "idioma":
        return "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)";
      case "premio":
        return "linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)";
      default:
        return "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)";
    }
  };

  // Texto do cabeçalho
  const getHeaderText = (type) => {
    switch (type) {
      case "academic":
        return "Formação Acadêmica";
      case "certificacao":
        return "Curso / Certificado";
      case "idioma":
        return "Idioma / Certificação";
      case "premio":
        return "Prêmio / Conquista";
      default:
        return "Certificado";
    }
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl px-2">
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 30, 60, 0.8) 0%, rgba(30, 30, 50, 0.9) 100%)",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "12px",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 6px 24px rgba(0, 0, 0, 0.25)",
          transition: "all 0.3s ease",
        }}
        className="h-full hover:-translate-y-1 hover:shadow-xl"
      >
        {/* Cabeçalho */}
        <div className="flex items-center mb-4">
          <div
            style={{
              background: getCircleColor(type),
            }}
            className="rounded-full p-2 mr-4 flex items-center justify-center w-10 h-10"
          >
            {getIcon(type)}
          </div>
          <h3 className="font-bold text-white text-lg sm:text-xl">
            {getHeaderText(type)}
          </h3>
        </div>

        {/* Informações */}
        <div className="mb-4">
          <div className="font-bold text-indigo-100 text-base sm:text-lg mb-1">
            {title}
          </div>
          <div className="text-indigo-300 text-sm sm:text-base">
            {organization}
          </div>
        </div>

        {/* Curso */}
        <div className="mb-4">
          <div className="text-slate-300 font-medium text-sm sm:text-base mb-1">
            Curso:
          </div>
          <div className="text-white font-bold text-base sm:text-lg">
            {course}
          </div>
        </div>

        {/* Status */}
        <div className="flex justify-between items-center p-3 bg-violet-500/10 rounded-lg border border-violet-500/20">
          <span className="text-slate-300 text-xs sm:text-sm">Status:</span>
          <span
            className={`px-3 py-1 rounded-full text-xs sm:text-sm font-bold border ${
              issueDate === "Em andamento"
                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                : "bg-green-500/20 text-green-400 border-green-500/30"
            }`}
          >
            {issueDate}
          </span>
        </div>
      </div>
    </div>
  );
};

Certificate.propTypes = {
  title: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  issueDate: PropTypes.string.isRequired,
  credentialUrl: PropTypes.string,
  type: PropTypes.oneOf(["academic", "certificacao", "idioma", "premio"])
    .isRequired,
};

export default Certificate;
