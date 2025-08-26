import { GraduationCap, ExternalLink } from "lucide-react";
import PropTypes from 'prop-types';

const Certificate = ({ 
  title = "Certificado", 
  organization = "",
  course = "",
  issueDate = "",
  credentialUrl = ""
}) => {

  return (
    <div style={{ width: "100%", height: "100%" }}>
      
      {/* Container Principal */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(30, 30, 60, 0.8) 0%, rgba(30, 30, 50, 0.9) 100%)",
          borderRadius: "12px",
          padding: "24px",
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
        {/* Cabeçalho com Ícone */}
        <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
          <div
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)",
              borderRadius: "50%",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "16px",
            }}
          >
            <GraduationCap size={24} color="white" />
          </div>
          <div 
            style={{ 
              fontWeight: "bold", 
              color: "white",
              fontSize: "1.1rem"
            }}
          >
            Formação Acadêmica
          </div>
        </div>


        {/* Informações da Universidade */}
        <div style={{ marginBottom: "16px" }}>
          <div 
            style={{ 
              fontWeight: "bold", 
              color: "#E0E7FF",
              fontSize: "1rem",
              marginBottom: "4px"
            }}
          >
            {title}
          </div>
          <div 
            style={{ 
              color: "#A5B4FC",
              fontSize: "0.9rem",
              marginBottom: "8px"
            }}
          >
            {organization}
          </div>
        </div>

        {/* Curso */}
        <div style={{ marginBottom: "16px" }}>
          <div 
            style={{ 
              color: "#CBD5E1",
              fontWeight: "500",
              fontSize: "0.9rem",
              marginBottom: "4px"
            }}
          >
            Curso:
          </div>
          <div 
            style={{ 
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem"
            }}
          >
            {course}
          </div>
        </div>

        {/* Status e Data */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          padding: "16px",
          background: "rgba(139, 92, 246, 0.1)",
          borderRadius: "8px",
          border: "1px solid rgba(139, 92, 246, 0.2)"
        }}>
          <div 
            style={{ 
              color: "#CBD5E1",
              fontSize: "0.85rem"
            }}
          >
            Status:
          </div>
          <div
            style={{
              background: issueDate === "Em andamento" 
                ? "rgba(234, 179, 8, 0.2)" 
                : "rgba(34, 197, 94, 0.2)",
              color: issueDate === "Em andamento" ? "#FBBF24" : "#4ADE80",
              padding: "4px 12px",
              borderRadius: "20px",
              fontSize: "0.8rem",
              fontWeight: "bold",
              border: issueDate === "Em andamento" 
                ? "1px solid rgba(234, 179, 8, 0.3)" 
                : "1px solid rgba(34, 197, 94, 0.3)"
            }}
          >
            {issueDate}
          </div>
        </div>

        {/* Link para credencial (se existir) */}
        {credentialUrl && (
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#818CF8",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: "500",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => e.target.style.color = "#A5B4FC"}
              onMouseLeave={(e) => e.target.style.color = "#818CF8"}
            >
              <ExternalLink size={16} />
              Ver Credencial
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

Certificate.propTypes = {
  title: PropTypes.string,
  organization: PropTypes.string,
  course: PropTypes.string,
  issueDate: PropTypes.string,
  credentialUrl: PropTypes.string
};

export default Certificate;