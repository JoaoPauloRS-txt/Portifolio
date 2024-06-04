import React from 'react'
import './skills.css'
const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Meu nível tecnico</span>
        <div className="skills__container container grid">
          <div className='skills__content'>

            <div className="skills__box">
              <div className="skills__group">
                <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
                  <div>
                    <h3 className="skills_name">JavaScript</h3>
                    <span className="skills__level">Intermediário</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
                  <div>
                    <h3 className="skills_name">HTML</h3>
                    <span className="skills__level">Intermediário</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
                  <div>
                    <h3 className="skills_name">CSS</h3>
                    <span className="skills__level">Intermediário</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
                  <div>
                    <h3 className="skills_name">React js</h3>
                    <span className="skills__level">Intermediário</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
                  <div>
                    <h3 className="skills_name">Sass</h3>
                    <span className="skills__level">Básico</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
                  <div>
                    <h3 className="skills_name">TypeScript</h3>
                    <span className="skills__level">Básico</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
                  <div>
                    <h3 className="skills_name">Styled Components</h3>
                    <span className="skills__level">Intermediário</span>
                  </div>
                </div>
                <div className="skills__data">
                  <i class='bx bx-badge-check'></i>
                  <div>
                    <h3 className="skills_name">Css modules</h3>
                    <span className="skills__level">Intermediário</span>
                  </div>
                </div>
                
              </div>

            </div>

          </div>
        </div>
    </section>
  )
}

export default Skills