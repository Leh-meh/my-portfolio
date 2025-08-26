import { useEffect, useState } from "react"
import { supabase } from "../supabaseClient";


function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    const { data, error } = await supabase.from("projects").select("*")
    if (error) console.log("Erro ao buscar projetos:", error)
    else setProjects(data)
  }

  return (
    <div>
      <h2>Meus Projetos</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {projects.map((project) => (
          <div key={project.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={project.image_url} alt={project.title} width={200} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.project_url} target="_blank">Ver projeto</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
