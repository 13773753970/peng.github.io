import React from 'react'
import {useNavigate} from 'react-router-dom'
import * as R from 'ramda'
import monitorWindowWidth from '../../Hocs/monitorWindowWidth'
import ProjectBox from '../../Components/Box/ProjectBox'
import {WidthScope} from '../../helper'
import projectsData from '../../Data/projects'

type Props = {
    widthScope: WidthScope
    forwardRef?: React.MutableRefObject<HTMLDivElement | null>
}

function Projects(props: Props) {
    const rowItems = getRowItems(props.widthScope)
    const projectsDataSplited = R.splitEvery(rowItems, projectsData)
    const navigate = useNavigate()
    return (
        <div ref={ref => {
            if (props.forwardRef !== undefined) {
                props.forwardRef.current = ref
            }
        }} className="container-padding container" id="projects-container">
            <h2>Projects</h2>
            {projectsDataSplited.map((row, index) => (
                <React.Fragment key={index.toString()}>
                    <div className='row row-expand-15'>
                        {row.map(project => <ProjectBox onClick={() => navigate(`/projects/${project.link}`)} key={project.title} title={project.title} description={project.description} icon={project.icon}/>)}
                    </div>
                    {index !== projectsDataSplited.length - 1 && <div className="spacer"></div>}
                </React.Fragment>
            ))}
        </div>
    )
}

function getRowItems(widthScope: WidthScope) {
    switch (widthScope) {
        case WidthScope.LargeWidth:
            return 2
        default:
            return 1
    }
}

export default monitorWindowWidth(Projects)