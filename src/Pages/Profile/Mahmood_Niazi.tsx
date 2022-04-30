import { useEffect, useRef } from 'react'
import ShareBox from '../../Components/Box/ShareBox'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Mahmood_Niazi(props: Props) {
    const {setRegions} = props
    // section dom references
    const introductionRef = useRef<HTMLDivElement | null>(null)
    const interestRef = useRef<HTMLDivElement | null>(null)
    // sections
    useEffect(() => {
        setRegions([
            {title: 'INTRODUCTION', domRef: introductionRef},
            {title: 'Research Interest', domRef: interestRef}
        ])
    }, [setRegions])
    return (
        <div className='header-space'>
            <div className="container profile-container">
                <div ref={ref => introductionRef.current = ref} className="row section">
                    <div className="col-3">
                        {/* photo */}
                        <img className="profile-photo" src={require('../../Images/Mahmood-Niazi-profile-2.jpeg')} alt=" Mahmood Niazi"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1> Mahmood Niazi</h1>
                            <span className='logocolor'>Professor of Software Engineering</span>
                        </div>
                        <ShareBox text='Mahmood Niazi - Digital Transformation Lab | Professor of Software Engineering' href='https://digital-transformation-lab.github.io/share/people/Mahmood-Niazi'/>
                        {/* brief introduction */}
                        <p>
                        I am a Professor of <a href='http://www.kfupm.edu.sa/departments/ics/Pages/en/B-S-in-Software-Engineering.aspx'>Software Engineering at the Information and Computer Science Department</a>, <a href='http://www.kfupm.edu.sa/Default.aspx'>King Fahd University of Petroleum and Minerals Saudi Arabia</a>. 
                        I have spent more than a decade with leading technology firms and universities as a process analyst, senior systems analyst, project manager, lecturer and professor. 
                        I have participated in and managed several software development projects. 
                        These have included the development of management information systems, software process improvement initiatives design and implementation, and several business application projects.
                        </p>
                        <p>
                        I have great interests in empirically exploring and designing innovative processes in order to improve software development processes in organisations. 
                        I am interested in developing sustainable processes in order to develop systems which are reliable, secure and fulfils customer needs. 
                        A sustainable process is the process which is adaptable, easy to use and learn, supported by the technology, empirically sound and is benchmarked on existing software quality standards and models.
                        My research interests are: evidence-based software engineering, requirements engineering, sustainable, reliable and secure software engineering processes, global system development and management, project management, and software process improvement. 
                        I have published over 100 articles in peer reviewed conferences and journals.
                        </p>
                        <p>
                        More detail information could be accessed at <a target='_blank' rel="noreferrer" href='http://www.ccse.kfupm.edu.sa/~mkniazi/index.html'>my personal website</a>.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3><a href='https://scholar.google.com/citations?user=5nWl5G4AAAAJ'>Google Scholar</a>, <a href='https://dblp.org/pid/07/2817.html'>DBLP</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Email: mkniazi@kfupm.edu.sa</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* research interest */}
                <div ref={ref => interestRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Research Interest</h2>
                    </div>
                    <div className='col-9'>
                        <h4>My research interests mainly include, but are not restricted to:</h4>
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                    <li>Evidence-based Software Engineering</li>
                                    <li>Requirements Engineering</li>
                                    <li>Sustainable, Reliable and Secure Software Engineering Processes</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>Global System Development and Management</li>
                                    <li>Project Management</li>
                                    <li>Software Process Improvement</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mahmood_Niazi