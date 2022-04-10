import { useEffect, useRef } from 'react'
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
                        <img className="profile-photo" src={require('../../Images/default-profile.webp')} alt="Mahdi Fahmideh"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Mahdi Fahmideh</h1>
                            <span className='logocolor'>Assistant Professor</span>
                        </div>
                        {/* brief introduction */}
                        <p>
                            
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                
                            </div>
                            <div className="col-6">

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