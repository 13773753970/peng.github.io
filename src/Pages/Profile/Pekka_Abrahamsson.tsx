import { useEffect, useRef } from 'react'
import ShareBox from '../../Components/Box/ShareBox'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Pekka_Abrahamsson(props: Props) {
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
                        <img className="profile-photo" src={require('../../Images/Pekka-Abrahamsson-profile-2.jpeg')} alt="Pekka Abrahamsson"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Pekka Abrahamsson</h1>
                            <span className='logocolor'>Professor of Information Systems and Software Engineering</span>
                        </div>
                        <ShareBox text='Pekka Abrahamsson - Digital Transformation Lab | Professor' href='https://digital-transformation-lab.github.io/share/people/Pekka-Abrahamsson'/>
                        {/* brief introduction */}
                        <p>
                        Pekka Abrahamsson works as a full professor of <a href='https://www.jyu.fi/it/en/faculty'>information systems and software engineering</a> at <a href='https://www.jyu.fi/en/'>the University of Jyväskylä in Finland</a>. 
                        He received his Ph.D. in Software Engineering in 2002 from <a href='https://www.oulu.fi/en'>the University of Oulu</a>. 
                        His research is in the area of emerging software technologies, empirical software engineering, software startups, and the ethics of artificial intelligence. 
                        Before his current position, he has served as a full professor at <a href='https://www.helsinki.fi/en'>the University of Helsinki (Finland)</a>, <a href='https://www.unibz.it/'>Free University of Bolzano (Italy)</a>, and <a href='https://www.ntnu.edu/'>the Norwegian University of Science and Technology (Norway)</a>. 
                        He also worked at <a href='https://www.vttresearch.com/en'>VTT Technical Research Centre of Finland</a> as a research professor of software technologies. 
                        He is widely recognized for his academic achievements. 
                        He is a pioneer in the field of research on agile software engineering methods and processes. 
                        Abrahamsson is the most cited researcher in his field in Finland, and he is the first Professor of Software Engineering at the Finnish Academy of Science and Letters. 
                        He has published broadly in his areas of expertise and received many awards and recognitions. 
                        Arnetminer named him among the 100 most influential software engineering scientists in the world in 2016. 
                        Abrahamsson was awarded the Nokia Foundation Award in 2007. In the same year, his large international European research project was also awarded the ITEA-Achievement Award. 
                        He is the co-founder of the Software Startup Research Network (SSRN) and a seasoned expert in leading large research projects.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>University: <a href='https://www.jyu.fi/it/en/faculty'>Faculty of Information Technology</a>, <a href='https://www.jyu.fi/en/'>University of Jyväskylä, Finland</a></h3>
                                <h3><a href='https://scholar.google.it/citations?user=A-CX3y4AAAAJ'>Google Scholar</a>, <a href='https://dblp.org/pid/71/5809.html'>DBLP</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Phone: +358 40 5415929</h3>
                                <h3>Email: pekka.abrahamsson@jyu.fi</h3>
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
                            <li>Emerging Software Technologies</li>
                            <li>Empirical Software Engineering</li>
                            <li>Software Startups</li>
                            <li>Ethics of Artificial Intelligence</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pekka_Abrahamsson