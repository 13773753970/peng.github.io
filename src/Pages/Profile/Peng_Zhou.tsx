import { useEffect, useRef } from 'react'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Peng_Zhou(props: Props) {
    const {setRegions} = props
    // section dom references
    const introductionRef = useRef<HTMLDivElement | null>(null)
    const conferenceRef = useRef<HTMLDivElement | null>(null)
    const skillsRef = useRef<HTMLDivElement | null>(null)
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
                        <img className="profile-photo" src={require('../../Images/Peng-Zhou-profile.jpeg')} alt="Peng Zhou"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Peng Zhou</h1>
                            <span className='logocolor'>Master</span>
                        </div>
                        {/* brief introduction */}
                        <p>
                        Peng Zhou is a master in the <a href='http://cs.nuaa.edu.cn/'>College of Computer Science and Technology</a>, <a href='https://www.nuaa.edu.cn/'>Nanjing University of Aeronautics and Astronautics, China</a>;
                        He have greate passion for research in Software Development Processes.
                        His key research objectives is studying the practice of Software Development Processes in Chinese industry.
                        He is also a greate full-stack developer in IOS, Android, Web and AI.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>University: <a href='https://www.nuaa.edu.cn/'>Nanjing University of Aeronautics and Astronautics</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Email: daniel666@nuaa.edu.cn</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PUBLISHED CONFERENCE PROCEEDINGS */}
                <div ref={ref => conferenceRef.current = ref} className="row section">
                    <div className='col-3'>
                        <h2>PUBLISHED CONFERENCE PROCEEDINGS</h2>
                    </div>
                    <div className='col-9'>
                        <p><b>Zhou, P.</b>, Khan, A. A., Liang, P., & Badshah, S. (2021). System and Software Processes in Practice: Insights from Chinese Industry. In Evaluation and Assessment in Software Engineering (pp. 394-401).</p>
                    </div>
                </div>
                {/* Skills */}
                <div ref={ref => skillsRef.current = ref} className="row section">
                    <div className='col-3'>
                        <h2>Skills</h2>
                    </div>
                    <div className='col-9'>
                        <ul>
                            <li>Languages: English, Chinese</li>
                            <li>Coding: Java, JavaScript, NodeJS, Swift, Python, C#</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Peng_Zhou