import React from 'react'

const ProjectsItem = ({item}) => {
  return (
    <div className="project__card" key={item.id}>
        <img src={item.image} alt={item.title} className='project__img' />
        <h3 className="project__title">{item.title}</h3>
        <div className='project__link'>
        <a href={item.site} target="_blank" className="project__button">Acessar
        <i class="bx bx-right-arrow-alt project__icon"></i></a>
        <a href={item.gitHub} target='_blank' className="project__button "><i class="uil uil-github project__icon"></i></a>
        </div>
    </div>
  )
}

export default ProjectsItem