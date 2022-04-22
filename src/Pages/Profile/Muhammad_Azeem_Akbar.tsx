import { useEffect, useRef } from 'react'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Muhammad_Azeem_Akbar(props: Props) {
    const {setRegions} = props
    // section dom references
    const introductionRef = useRef<HTMLDivElement | null>(null)
    const interestsRef = useRef<HTMLDivElement | null>(null)
    // sections
    useEffect(() => {
        setRegions([
            {title: 'INTRODUCTION', domRef: introductionRef},
            {title: 'Research Interests', domRef: interestsRef},
        ])
    }, [setRegions])
    return (
        <div className='header-space'>
            <div className="container profile-container">
                <div ref={ref => introductionRef.current = ref} className="row section">
                    <div className="col-3">
                        {/* photo */}
                        <img className="profile-photo" src={require('../../Images/Muhammad-Azeem-Akbar-profile-2.jpeg')} alt="Muhammad Azeem Akbar"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Muhammad Azeem Akbar</h1>
                            <span className='logocolor'>Ph.D.</span>
                        </div>
                        {/* brief introduction */}
                        <p>
                            MUHAMMAD AZEEM AKBAR obtained PhD <a href='http://www.cs.cqu.edu.cn/'>Software Engineering</a> at <a href='https://www.cqu.edu.cn/'>Chongqing University, China</a> in January-2019. 
                            He has done Post-Doctorate with <a href='https://www.nuaa.edu.cn/'>Nanjing University of Aeronautics and Astronautics, Nanjing, China</a> in January 2021. 
                            During, January 2021- August 2021, he worked with LERO-The Irish Software Research Centre, Ireland, as a senior researcher and work on Huawei’s ‘Software Trustworthy’ project. 
                            Currently, he is working as Post-Doctoral Researcher in <a href='https://www.lut.fi/web/en'>Lappeenranta-Lahti University of Technology, Finland</a>. 
                            Dr. Muhammad Azeem Akbar published more than 85 research papers in well-reputed journals and conferences. He has an Outstanding Academic carrier. 
                            His research interests includes global software development, requirements engineering, empirical studies, internet of things, DevOps, DevSecOps, and microservices. 
                            He also serves as a Reviewer for Journal of Information and Software Technology, journal of Information and Technology Management, Applied Soft Computing, Soft Computing, Journal of Software: Evolution and Process, IET Software Journal, IEEE Access and journal of Multimedia Tools and Applications.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>Email: azeem.akbar@lut.fi</h3>
                                <h3><a href='https://scholar.google.com/citations?user=akeN768AAAAJ'>Google Scholar</a>, <a href='https://dblp.org/pid/180/5818.html'>DBLP</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Affiliation: Software Engineering Department, Lappeenranta-Lahti University of Technology, 53851 Lappeenranta, Finland.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Research Interest */}
                <div ref={ref => interestsRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Research Interests</h2>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                    <li>Global Software Development</li>
                                    <li>Requirements Engineering</li>
                                    <li>Empirical Studies</li>
                                    <li>Internet of Things</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>DevOps</li>
                                    <li>DevSecOps</li>
                                    <li>Microservices</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Muhammad_Azeem_Akbar