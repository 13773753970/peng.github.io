import { useEffect, useRef } from 'react'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Muhammad_Azeem_Akbar(props: Props) {
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
                        <img className="profile-photo" src={require('../../Images/Muhammad-Azeem-Akbar-profile.jpeg')} alt="Muhammad Azeem Akbar"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Muhammad Azeem Akbar</h1>
                            <span className='logocolor'>Ph.D.</span>
                        </div>
                        {/* brief introduction */}
                        <p>
                            MUHAMMAD AZEEM AKBAR obtained PhD <a href='http://www.cs.cqu.edu.cn/'>Software Engineering</a> at <a href='https://www.cqu.edu.cn/'>Chongqing University</a>, China in January-2019. 
                            He has done Post-Doctorate with <a href='https://www.nuaa.edu.cn/'>Nanjing University of Aeronautics and Astronautics</a>, Nanjing, China in January 2021. 
                            During, January 2021- August 2021, he worked with LERO-The Irish Software Research Centre, Ireland, as a senior researcher and work on Huawei’s ‘Software Trustworthy’ project. 
                            Currently, he is working as Post-Doctoral Researcher in <a href='https://www.lut.fi/web/en'>Lappeenranta-Lahti University of Technology</a>, Finland. 
                            Dr. Muhammad Azeem Akbar published more than 85 research papers in well-reputed journals and conferences. He has an Outstanding Academic carrier. 
                            His research interests includes global software development, requirements engineering, empirical studies, internet of things, DevOps, DevSecOps, and microservices. 
                            He also serves as a Reviewer for Journal of Information and Software Technology, journal of Information and Technology Management, Applied Soft Computing, Soft Computing, Journal of Software: Evolution and Process, IET Software Journal, IEEE Access and journal of Multimedia Tools and Applications.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>Email: azeem.akbar@lut.fi</h3>
                            </div>
                            <div className="col-6">
                                <h3>Affiliation: Software Engineering Department, Lappeenranta-Lahti University of Technology, 53851 Lappeenranta, Finland.</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* other sections */}
            </div>
        </div>
    )
}

export default Muhammad_Azeem_Akbar