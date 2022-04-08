import { useParams } from "react-router-dom";
import projects from '../../Data/projects'
import Description from '../../Components/Description'
import Header from '../../Components/Header'
import PaperBox from '../../Components/Box/PaperBox'
import { useRef } from "react";
import ContactUs from '../../Components/ContactUs'

type Props = {

}

function ProjectPage(props: Props) {
    const params = useParams()
    const project = projects.find(x => x.link === params.projectLink)
    const descriptionRef = useRef<HTMLDivElement | null>(null)
    const studiesRef = useRef<HTMLDivElement | null>(null)
    const contactUsRef = useRef<HTMLDivElement | null>(null)
    if (project === undefined) {
        return <div>404</div>
    }
    return (
        <>
            <Header regions={[
                {title: 'Project Description', domRef: descriptionRef},
                {title: 'Published Studies', domRef: studiesRef},
                {title: 'Contact', domRef: contactUsRef}
            ]}/>
            <Description forwardRef={descriptionRef} description={project.descriptionHTML}/>
            <div ref={ref => studiesRef.current = ref} style={{paddingBottom: 50}} className="container container-padding">
                <h2>Published Studies</h2>
                {project.studies.map(x => <PaperBox {...x}/>)}
            </div>
            <ContactUs forwardRef={contactUsRef}/>
        </>
    )
}

export default ProjectPage