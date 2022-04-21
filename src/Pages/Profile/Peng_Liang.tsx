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
                            <span className='logocolor'>Lecturer</span>
                        </div>
                        {/* brief introduction */}
                        <p>
                            More detail information could be accessed at <a target='_blank' rel="noreferrer" href='https://www.cs.rug.nl/search/People/PengLiang'>my personal website</a> 
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>University: <a href='https://www.whu.edu.cn/'>Wuhan University</a></h3>
                                <h3>Phone: +31-50-363-7480</h3>
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
                            <li>architectural knowledge</li>
                            <li>requirements engineering</li>
                            <li>technical debt</li>
                            <li>ontology applications</li>
                            <li>software interoperability</li>
                            <li>software modeling</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Peng_Liang