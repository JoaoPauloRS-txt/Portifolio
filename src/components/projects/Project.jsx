import React from 'react'
import Projects from './Projects'
import "./project.css"
const Project = () => {
  return (
    <section className="projects section" id='portifolio'>
        <h2 className="section__title">Projetos</h2>
        <span className="section__subtitle">Projetos são uma forma importante de melhorar suas habilidades como desenvolvedor.<br/>Sinta-se à vontade para visitar minha página no Github e verificar meus repositórios</span>

        <Projects/>
    </section>
  )
}

export default Project