import React from 'react'
import {ProjectData} from "./Data";
import ProjectsItem from './ProjectsItem';
const Projects = () => {
  return (
    <div className="project__container container">
        {ProjectData.map((item)=>{
            return<ProjectsItem item={item} key={item.id}/>
        })}
    </div>
  )
}

export default Projects