import { useEffect, useRef } from 'react'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Peng_Liang(props: Props) {
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
                        <img className="profile-photo" src={require('../../Images/Peng-Liang-profile.jpeg')} alt="Peng Liang"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Peng Liang</h1>
                            <span className='logocolor'>Professor</span>
                        </div>
                        {/* brief introduction */}
                        <p>
                            More detail information could be accessed at <a target='_blank' rel="noreferrer" href='https://www.cs.rug.nl/search/People/PengLiang'>my personal website</a>. 
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>University: <a href='https://www.whu.edu.cn/'>Wuhan University, China</a></h3>
                                <h3><a href='https://scholar.google.com/citations?user=76CoujsAAAAJ'>Google Scholar</a>, <a href='https://dblp.org/pid/57/3505-1.html'>DBLP</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Email: liangp@whu.edu.cn</h3>
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
                        <ul>
                            <li>Architectural Knowledge</li>
                            <li>Requirements Engineering</li>
                            <li>Technical Debt</li>
                            <li>Ontology Applications</li>
                            <li>Software Interoperability</li>
                            <li>Software Modeling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Peng_Liang