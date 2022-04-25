import Header from '../../Components/Header'
import Description from '../../Components/Description'
import Projects from './Projects'
import Professors from './Professors'
import PostdoctoralResearchers from './Postdoctors'
import ContactUs from '../../Components/ContactUs'
// import Students from './Students'
import { useRef } from 'react'

type Props = {

}

function HomePage(props: Props) {
    const descriptionRef = useRef<HTMLDivElement | null>(null)
    const projectsRef = useRef<HTMLDivElement | null>(null)
    const teamRef = useRef<HTMLDivElement | null>(null)
    const contactUsRef = useRef<HTMLDivElement | null>(null)
    return (
        <>
            <Header regions={[
                {title: 'About us', domRef: descriptionRef},
                {title: 'Projects', domRef: projectsRef},
                {title: 'Our Team', domRef: teamRef},
                {title: 'contact', domRef: contactUsRef}
            ]}/>
            <Description forwardRef={descriptionRef}
                description={
                    <>
                        <h2>An <span className="logocolor">International Research Group</span> aiming at <br></br> developing better <span className="logocolor">software system</span> for better life</h2>
                        <p>We investigate how the next generation of software systems can effectively utilize modern Internet-based computing platforms.   </p>
                        <p>We develop novel frameworks and tools to enable IT-based organizations for the systematic and safe transformation of existing legacy systems or implementation of new systems relying on these platforms.</p>
                    </>
                }
            />
            <Projects forwardRef={projectsRef}/>
            <div ref={ref => teamRef.current = ref}>
                <Professors/>
                <PostdoctoralResearchers/>
            </div>
            <ContactUs forwardRef={contactUsRef}/>
        </>
    )
}

export default HomePage