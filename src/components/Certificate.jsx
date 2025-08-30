import { GraduationCap, Laptop, BookOpen, Award } from "lucide-react";
import PropTypes from 'prop-types';

const Certificate = ({ 
  title, 
  organization, 
  course, 
  issueDate, 
  type 
}) => {

  // Ícones por tipo
  const getIcon = (type) => {
    switch(type) {
      case "academic":
        return <GraduationCap size={24} color="white" />;
      case "certificacao":
        return <Laptop size={24} color="white" />;
      case "idioma":
        return <BookOpen size={24} color="white" />;
      case "premio":
        return <Award size={24} color="white" />;
      default:
        return <GraduationCap size={24} color="white" />;
    }
  };

  // Cores do círculo por tipo
  const getCircleColor = (type) => {
    switch(type) {
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

  // Texto do cabeçalho por tipo
  const getHeaderText = (type) => {
    switch(type) {
      case "academic": return "Formação Acadêmica";
      case "certificacao": return "Curso / Certificado";
      case "idioma": return "Idioma / Certificação";
      case "premio": return "Prêmio / Conquista";
      default: return "Certificado";
    }
  };

  return (
    <div style={{ width: "24rem", height: "19rem" }}>
      <div
        style={{
          background: "linear-gradient(135deg, rgba(30, 30, 60, 0.8) 0%, rgba(30, 30, 50, 0.9) 100%)",
          borderRadius: "12px",
          padding: "24px",
          marginTop: "8px",
          height: "100%",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(139, 92, 246, 0.2)";
          e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0px)";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.3)";
          e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
        }}
      >
        {/* Cabeçalho */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <div
            style={{
              background: getCircleColor(type),
              borderRadius: "50%",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "16px",
            }}
          >
            {getIcon(type)}
          </div>
          <div style={{ fontWeight: "bold", color: "white", fontSize: "1.1rem" }}>
            {getHeaderText(type)}
          </div>
        </div>

        {/* Informações */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ fontWeight: "bold", color: "#E0E7FF", fontSize: "1rem", marginBottom: "4px" }}>
            {title}
          </div>
          <div style={{ color: "#A5B4FC", fontSize: "0.9rem", marginBottom: "8px" }}>
            {organization}
          </div>
        </div>

        {/* Curso */}
        <div style={{ marginBottom: "16px" }}>
          <div style={{ color: "#CBD5E1", fontWeight: "500", fontSize: "0.9rem", marginBottom: "4px" }}>
            Curso:
          </div>
          <div style={{ color: "white", fontWeight: "bold", fontSize: "1rem" }}>
            {course}
          </div>
        </div>

        {/* Status */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", background: "rgba(139, 92, 246, 0.1)", borderRadius: "8px", border: "1px solid rgba(139, 92, 246, 0.2)" }}>
          <div style={{ color: "#CBD5E1", fontSize: "0.85rem" }}>Status:</div>
          <div
            style={{
              background: issueDate === "Em andamento" ? "rgba(234, 179, 8, 0.2)" : "rgba(34, 197, 94, 0.2)",
              color: issueDate === "Em andamento" ? "#FBBF24" : "#4ADE80",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "bold",
              border: issueDate === "Em andamento" ? "1px solid rgba(234, 179, 8, 0.3)" : "1px solid rgba(34, 197, 94, 0.3)"
            }}
          >
            {issueDate}
          </div>
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
  type: PropTypes.oneOf(["academic","certificacao","idioma","premio"]).isRequired
};

export default Certificate;
