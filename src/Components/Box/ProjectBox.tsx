import './ProjectBox.css'

type Props = {
    icon: String
    title: String
    description: String
    onClick: () => void
}

function ProjectBox(props: Props) {
    const {icon, title, description, onClick} = props
    return (
        <div className="project-container">
            <div onClick={onClick} className="box">
                <svg><use href={`#${icon}`}></use></svg>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export function BlankProjectBox() {
    return (
        <div className='project-container'></div>
    )
}

export default ProjectBox