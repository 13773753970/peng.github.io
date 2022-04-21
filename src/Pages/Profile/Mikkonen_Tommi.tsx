import { useEffect, useRef } from 'react'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Mikkonen_Tommi(props: Props) {
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
                        <img className="profile-photo" src={require('../../Images/Mikkonen-Tommi-profile-2.jpeg')} alt="Mikkonen Tommi"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Mikkonen Tommi</h1>
                            <span className='logocolor'>Professor of Software Engineering</span>
                        </div>
                        {/* brief introduction */}
                        <p>
                            More detail information could be accessed at <a target='_blank' rel="noreferrer" href='https://www.jyu.fi/it/fi/tiedekunta/henkilosto/henkilosto/mikkonen-tommi'>my personal website</a> 
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>University: <a href='https://www.helsinki.fi/en'>University of Helsinki</a></h3>
                                <h3>Phone: +358 50 3117999</h3>
                            </div>
                            <div className="col-6">
                                <h3>Email: tommi.j.mikkonen@jyu.fi</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mikkonen_Tommi