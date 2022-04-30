import { useEffect, useRef } from 'react'
import ShareBox from '../../Components/Box/ShareBox'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Mahdi_Fahmideh(props: Props) {
    const {setRegions} = props
    // section dom references
    const introductionRef = useRef<HTMLDivElement | null>(null)
    // sections
    useEffect(() => {
        setRegions([
            {title: 'INTRODUCTION', domRef: introductionRef},
        ])
    }, [setRegions])
    return (
        <div className='header-space'>
            <div className="container profile-container">
                <div ref={ref => introductionRef.current = ref} className="row section">
                    <div className="col-3">
                        {/* photo */}
                        <img className="profile-photo" src={require('../../Images/Mahdi-Fahmideh-profile-2.jpeg')} alt="Mahdi Fahmideh"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Mahdi Fahmideh</h1>
                            <span className='logocolor'>Senior Lecturer (Cyber Security)</span>
                        </div>
                        <ShareBox text='Mahdi Fahmideh - Digital Transformation Lab | Senior Lecturer (Cyber Security)' href='https://digital-transformation-lab.github.io/share/people/Mahdi-Fahmideh'/>
                        {/* brief introduction */}
                        <p>
                        Mahdi is a senior lecturer at the <a href='https://www.usq.edu.au/bela/school-of-business'>school of Business</a>, <a href='https://www.usq.edu.au/'>University of Southern Queensland, Australia</a>. 
                        He received a PhD degree in Information Systems from the <a href='https://www.unsw.edu.au/business'>Business School</a> of the <a href='https://www.unsw.edu.au/'>University of New South Wales (UNSW), Sydney, Australia</a>. 
                        Mahdi’s research outcomes, which sit at the intersection of Internet-based computing technologies, can be in the form of conceptual models, system development methodologies, and decision-making frameworks. 
                        His research appeared in the peer-reviewed ERA CORE A/A* international Information Systems and Software Engineering venues such as the European Journal of Information System (EJIS), IEEE Transactions on Software Engineering (TSE), Information Sciences, Information Systems, Information and Software Technology (IST), Journal of Systems and Software (JSS), ACM Computing Surveys (CSUR), Journal of Computers and Industrial Engineering, and others.
                        Before joining academia, Mahdi has worked as an analyst programmer in different industry sectors including accounting, insurance, and publishing.
                        At a broad level, Mahdi aims at creating solutions that help organizations in developing and adopting IT-based initiatives to tackle their problems.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>Phone: +61 7 3470 4349</h3>
                                <h3><a href='https://scholar.google.com/citations?user=80ikpB0AAAAJ'>Google Scholar</a>, <a href='https://dblp.org/pid/18/10134.html'>DBLP</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Email: Mahdi.Fahmideh@usq.edu.au</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* other sections */}
            </div>
        </div>
    )
}

export default Mahdi_Fahmideh