import { useEffect, useRef } from 'react'
import ShareBox from '../../Components/Box/ShareBox'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Muhammad_Waseem(props: Props) {
    const {setRegions} = props
    // section dom references
    const introductionRef = useRef<HTMLDivElement | null>(null)
    const interestsRef = useRef<HTMLDivElement | null>(null)
    const educationRef = useRef<HTMLDivElement | null>(null)
    const employmentRef = useRef<HTMLDivElement | null>(null)
    const articlesRef = useRef<HTMLDivElement | null>(null)
    const conferenceRef = useRef<HTMLDivElement | null>(null)
    const teachingRef = useRef<HTMLDivElement | null>(null)
    const academicRef = useRef<HTMLDivElement | null>(null)
    const skillsRef = useRef<HTMLDivElement | null>(null)
    const experienceRef = useRef<HTMLDivElement | null>(null)
    // sections
    useEffect(() => {
        setRegions([
            {title: 'INTRODUCTION', domRef: introductionRef},
            {title: 'Research Interests', domRef: interestsRef},
            {title: 'Education', domRef: educationRef},
            {title: 'Employment History', domRef: employmentRef},
            {title: 'Journal Articles', domRef: articlesRef},
            {title: 'Conference Proceedings', domRef: conferenceRef},
            {title: 'Summary of Teaching', domRef: teachingRef},
            {title: 'Academic Services', domRef: academicRef},
            {title: 'Skills', domRef: skillsRef},
            {title: 'Miscellaneous Experience', domRef: experienceRef},
        ])
    }, [setRegions])
    return (
        <div className='header-space'>
            <div className="container profile-container">
                <div ref={ref => introductionRef.current = ref} className="row section">
                    <div className="col-3">
                        {/* photo */}
                        <img className="profile-photo" src={require('../../Images/Muhammad-Waseem-profile-2.jpeg')} alt="Muhammad Waseem"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Muhammad Waseem</h1>
                            <span className='logocolor'>Ph.D.</span>
                        </div>
                        <ShareBox text='Muhammad Waseem - Digital Transformation Lab | Ph.D.' href='https://digital-transformation-lab.github.io/share/people/Muhammad-Waseem'/>
                        {/* brief introduction */}
                        <p>
                            Muhammad Waseem is a researcher in the School of <a href='http://cs.whu.edu.cn/'>Computer Science</a>, <a href='https://www.whu.edu.cn/'>Wuhan University, Wuhan, China</a>. 
                            Waseem is passionate about research in Software Engineering. 
                            His key research goals are (i) to develop a deep understanding of how large-scale software-intensive systems are designed, developed, and evaluated in the industry, and (ii) to develop and evaluate techniques, processes, and tools to increase the ability of software organizations in developing and deploying high-quality software-intensive systems. 
                            His research interests reside primarily in Software Architecture, Microservices Architecture, Empirical Software Engineering, DevOps, and Automated Software Engineering. 
                            He used a wide range of research methods, including qualitative (e.g., grounded theory and interviews) and quantitative (e.g., controlled experiment and mining software repositories) methods. 
                            He published many research papers as the first author in leading software engineering venues such as the Journal of Systems and Software, ICSE, EASE, ICSOC, and APSEC.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>Twitter: @wasimsse</h3>
                                <h3><a href='https://scholar.google.com/citations?user=9SUTWpAAAAAJ'>Google Scholar</a>, <a href='https://dblp.org/pid/52/4427.html'>DBLP</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Instagram: https://tinyurl.com/36n2mtrd</h3>
                                <h3>Email: m.waseem@whu.edu.cn</h3>
                            </div>
                        </div>
                    </div>
                </div>
                {/* research interests */}
                <div ref={ref => interestsRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Research Interests</h2>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                    <li>Microservices Architecture</li>
                                    <li>Devops</li>
                                    <li>Software Architecture and Design</li>
                                    <li>Mining Software Repositories</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>Empirical Software Engineering</li>
                                    <li>AI-based Software Engineering</li>
                                    <li>Quantum Software Engineering</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Education */}
                <div ref={ref => educationRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Education</h2>
                    </div>
                    <div className='col-9'>
                        <h3>Phd (Software Engineering), Wuhan University, China</h3>
                        <p>Sept 2018 - Dec 2021</p>
                        <h3>MS (Software Engineering), International Islamic University, Pakistan</h3>
                        <p>Feb 2008 - Feb 2012</p>
                        <h3>BS (Computer Science), Hazara University, Pakistan</h3>
                        <p>Sept 2003 - Sept 2007</p>
                    </div>
                </div>
                {/* Employment History */}
                <div ref={ref => employmentRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Employment History</h2>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6'>
                                <p><b>Lecturer</b>. Department of Computer Science and Software Engineering, International Islamic University, Islamabad, Pakistan.</p>
                                <p>Oct 2016 - Sep 2017</p>
                                <p><b>Teaching Research Associate</b>. Department of Computer Science and Software Engineering, International Islamic University, Islamabad, Pakistan.</p>
                                <p>Dec 2010 - Oct 2016</p>
                            </div>
                            <div className='col-6'>
                                <p><b>Software Engineer</b>. MicroMerger, Islamabad, Paksitan</p>
                                <p>June 2010 - Dec 2010</p>
                                <p><b>Software Developer and Associate Lecturer</b> under National Internship Program (NIP) at Information Technology Department, Hazara University, Mansehra.</p>
                                <p>June 2009 - June 2010</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Journal Articles */}
                <div ref={ref => articlesRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Journal Articles</h2>
                    </div>
                    <div className='col-9'>
                        <p>Khan, A. A, Badshah, S., Liang, P., Khan, B., <b>Waseem, M</b>, Niazi, M., & Akbar, M. A. (2021). Elhics of AI: A Systematic Lilerature Review of Principles and Challenges. CoRR, abs/2109.07906.</p>
                        <p>Nasab, A. R, Shahin, M., Liang, P., Basiri, M. E., Raviz, S. A. H., <b>Waseem, M</b>, & Naseri, A. (2021). Automated ldentification of Security Discussions in Microservices Systems: Industrial Surveys and Experiments. Journal of Systems and Software (Impact Factor——2.829, (CORE A Rank)), 181, 111046.</p>
                        <p><b>Waseem, M</b>, Liang, P., Shahin, M., Di Salle, A., & Mñrquez, G. (2021). Design, Monitoring, and Tesling of Microservices Systems: The Practitioners’ Perspective. Journal of Systems and Software (Impact factor=2.829, (CORE A Rank)), 182, 111061.</p>
                        <p><b>Waseem, M</b>, Liang,  P.,  & Shahin, M. (zozo). A Systematic  Mapping  Study  on Microservices  Architecture in DevOps. Journal of Systems and Software (Impact Factor=2.829, (CORE A Rank)), 170, 110798</p>
                    </div>
                </div>
                {/* Conference Proceedings */}
                <div ref={ref => conferenceRef.current = ref} className="row section">
                    <div className='col-3'>
                        <h2>Conference Proceedings</h2>
                    </div>
                    <div className='col-9'>
                        <p><b>Waseem, M</b>, Liang, P., Gastén, M., Shahin, M., Arif Ali, K., & Aakash, A. (2022). Decision models for selecting patterns and strategies in microservices systems and their evaluation by practitioners. In Proceedings of the 44th International Conference on Software Engineering (ICSE 2022), SEIP Track. (COREA* Rank). IEEE/ACM.</p>
                        <p><b>Waseem, M</b>, Liang, P.. Gastén, M., Shahin, M., Arif Ali, K., & Ahmed, A. (2021). A decision model for selecting patterns and stralegies to decompose applications into microservices. In Proceedings of Ihe 19th International Conference on Service Oriented Computing (ICSOC). (CORZ A Rank)(pp. 850—858).Springer.</p>
                        <p><b>Waseem, M</b>, Liang, P., Shahin, M., Ahmad, A., & Nasab, A. R (2021). On the nalure of issues in five open source microservices systems: An empirical study. In Proceedings of the 25th International Conference on Evaluation and Assessment in Software Engineering (EASE). (CORE A Rank) (pp. 201-210). ACM.</p>
                        <p><b>Waseem, M</b>, Liang, P.. M:irquez, G., & Di Salle, A. (2020). Testing Microservices Architecture-Based Applications: A Systematic Mapping Study. In Proceedings of the 27th Asia-Pacific Software Engineering Conference (APSEC). (CORE B Rank)	(pp. 119-128). IEEE.</p>
                    </div>
                </div>
                {/* Summary of Teaching */}
                <div ref={ref => teachingRef.current = ref} className="row section">
                    <div className='col-3'>
                        <h2>Summary of Teaching</h2>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6'>
                                <h4>Undergraduate Level</h4>
                                <ul>
                                    <li>Software Architecture and Design</li>
                                    <li>Object Oriented Analysis and Design</li>
                                    <li>Software Requirements Engineering</li>
                                    <li>Software Engineering Economics</li>
                                    <li>Programming Fundamentals</li>
                                    <li>Object Oriented Programming</li>
                                    <li>Operating Systems</li>
                                    <li>Introduction to Computing</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <h4>Master Level</h4>
                                <ul>
                                    <li>Advanced Software Architecture and Design</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Academic Services */}
                <div ref={ref => academicRef.current = ref} className="section row">
                    <div className='col-3'>
                        <h2>Academic Services</h2>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <h4>Reviewer</h4>
                            <ul>
                                <li>Information and Software Technology (IST) </li>
                                <li>Automated Software Engineering (AUSE)</li>
                                <li>Frontiers of Computer Science (FCS)</li>
                                <li>IEEE International Conference on Soñware Architecture (ICSA)</li>
                                <li>Evolution and Assessmenl in Software Engineering (EASE)</li>
                                <li>Asia-Pacific Software Engineering Conference (APSEC)</li>
                                <li>Evolution and Assessment in Software Engineering (EASE) 2nd International DevOps Quality Management Workshop - 2021</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Skills */}
                <div ref={ref => skillsRef.current = ref} className="row section">
                    <div className='col-3'>
                        <h2>Skills</h2>
                    </div>
                    <div className='col-9'>
                        <ul>
                            <li><b>Languages:</b> English, Chinese, Urdu</li>
                            <li><b>Coding:</b> C/C++, PHP</li>
                            <li><b>Databases:</b> MySQL</li>
                            <li><b>Web Dev:</b> HTML, CSS, JavaScript</li>
                            <li><b>Misc:</b> Academic Research, Teaching</li>
                        </ul>
                    </div>
                </div>
                {/* Experience */}
                <div ref={ref => experienceRef.current = ref} className="row section">
                    <div className='col-3'>
                        <h2>Miscellaneous Experience</h2>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6'>
                                <h4>Awards and Achievements</h4>
                                <ul>
                                    <li>2021 Wuhan University Excellent International Student Award</li>
                                    <li>2020 Wuhan University Excellent International Student Award</li>
                                    <li>2017 Chinese Goveroment Scholarship Winner</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <h4>Certifications</h4>
                                <ul>
                                    <li>2021 Hanyu Shuiping Kaoshi (Level V)</li>
                                    <li>2018 Hanyu Shuiping Kaoshi (Level IV)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Muhammad_Waseem