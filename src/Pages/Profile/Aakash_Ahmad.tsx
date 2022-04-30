import { useEffect, useRef } from 'react'
import ShareBox from '../../Components/Box/ShareBox'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Aakash_Ahmad(props: Props) {
    const {setRegions} = props
    // section dom references
    const introductionRef = useRef<HTMLDivElement | null>(null)
    const interestsRef = useRef<HTMLDivElement | null>(null)
    const servicesRef = useRef<HTMLDivElement | null>(null)
    const teachingRef = useRef<HTMLDivElement | null>(null)
    const publicationsRef = useRef<HTMLDivElement | null>(null)
    // sections
    useEffect(() => {
        setRegions([
            {title: 'INTRODUCTION', domRef: introductionRef},
            {title: 'research interests', domRef: interestsRef},
            {title: 'PUBLICATIONS', domRef: publicationsRef},
            {title: 'TEACHING ACTIVITIES', domRef: teachingRef},
            {title: 'PROFESSIONAL SERVICES', domRef: servicesRef},
        ])
    }, [setRegions])
    return (
        <div className='header-space'>
            <div className="container profile-container">
                <div ref={ref => introductionRef.current = ref} className="row section">
                    <div className="col-3">
                        {/* photo */}
                        <img className="profile-photo" src={require('../../Images/Aakash-Ahmad-profile-2.jpeg')} alt="Aakash Ahmad"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Aakash Ahmad</h1>
                            <span className='logocolor'>Assistant Professor</span>
                        </div>
                        <ShareBox text='Aakash Ahmad - Digital Transformation Lab | Assistant Professor' href='https://digital-transformation-lab.github.io/share/people/Aakash-Ahmad'/>
                        {/* brief introduction */}
                        <p>
                            I am an Assistant Professor at the <a href="http://www.uoh.edu.sa/en/Subgates/Faculties/CCSE/Pages/Default.aspx">College of Computer Science and Engineering</a>, <a href='http://www.uoh.edu.sa/en/pages/default.aspx'>University of Ha'il, Saudi Arabia</a>.
                            As a tutor and researcher at the <a href="http://www.uoh.edu.sa/en/Subgates/Faculties/CCSE/Pages/Default.aspx">College of Computer Science and Engineering (CCSE)</a> my role is to support the institutional objectives that promote higher education, high quality research, skills and knowledge transfer with external collaborations. 
                            My research expertise are in the area of software engineering to conduct independent research, supervise academic thesis and produce publishable and applicable results. Although the ‘keywords’ to best describe my research interests can be listed as Software Evolution, Software Architectures, or more precisely Architecture-Centric Software Evolution. However, I am more excited to learn about and possibly apply some interesting synergies that exist among biological evolution, architectures in the real world and in development and evolution of software architectures.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3><a href='https://scholar.google.com/citations?user=nWtJYoIAAAAJ'>Google Scholar</a>, <a href='https://dblp.org/pid/09/9384.html'>DBLP</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Email: a.abbasi@uoh.edu.sa</h3>
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
                        <h4>My research interests mainly include, but are not restricted to:</h4>
                        <ul>
                            <li>Software Evolution</li>
                            <li>Software Architectures</li>
                            <li>Architecture-Centric Software Evolution</li>
                        </ul>
                        <p>I am more excited to learn about and possibly apply some interesting synergies that exist among biological evolution, architectures in the real world and in development and evolution of software architectures.</p>
                        <p className='logocolor'>To prospective students: Interested research students are encouraged to contact me to work on related topics.</p>
                    </div>
                </div>
                {/* PUBLICATIONS */}
                <div ref={ref => publicationsRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>PUBLICATIONS</h2>
                    </div>
                    <div className='col-9'>
                        <h4>2022:</h4>
                        <p>	Muhammad Waseem, Peng Liang, <b>Aakash Ahmad</b>, Mojtaba Shahin, Arif Ali Khan, Gastón Márquez: Decision Models for Selecting Patterns and Strategies in Microservices Systems and their Evaluation by Practitioners. CoRR abs/2201.05825 (2022)</p>
                        <p>	Arif Ali Khan, <b>Aakash Ahmad</b>, Muhammad Waseem, Peng Liang, Mahdi Fahmideh, Tommi Mikkonen, Pekka Abrahamsson: Software Architecture for Quantum Computing Systems - A Systematic Review. CoRR abs/2202.05505 (2022)</p>
                        <p>	Mahdi Fahmideh, Jun Yan, Jun Shen, <b>Aakash Ahmad</b>, Davoud Mougouei, Anup Shrestha: Knowledge Management for Cloud Computing Field. CoRR abs/2202.07875 (2022)</p>
                        <h4>2021:</h4>
                        <p>	<b>Aakash Ahmad</b>, Mahdi Fahmideh, Ahmed B. Altamimi, Iyad A. Katib, Aiiad Albeshri, Abdulrahman Alreshidi, Adwan Alownie Alanazi, Rashid Mehmood: Software Engineering for IoT-Driven Data Analytics Applications. IEEE Access 9: 48197-48217 (2021)</p>
                        <p>Ibrahim Alseadoon, <b>Aakash Ahmad</b>, Adel Alkhalil, Khalid Sultan: Migration of existing software systems to mobile computing platforms: a systematic mapping study. Frontiers Comput. Sci. 15(2): 152204 (2021)</p>
                        <p><b>Aakash Ahmad</b>, Adel Alkhalil, Ahmed B. Altamimi, Khalid Sultan, Wilayat Khan: Modernizing Legacy Software as Context - Sensitive and Portable Mobile-Enabled Application. IT Prof. 23(1): 42-50 (2021)</p>
                        <p>Wilayat Khan, <b>Aakash Ahmad</b>, Aamir Qamar, Muhammad Kamran, Muhammad Altaf: SpoofCatch: A Client-Side Protection Tool Against Phishing Attacks. IT Prof. 23(2): 65-74 (2021)</p>
                        <p>	<b>Aakash Ahmad</b>, Adel Alkhalil, Ahmed B. Altamimi, Khalid Sultan, Wilayat Khan: Corrections to "Modernizing Legacy Software as Context-Sensitive and Portable Mobile-Enabled Application". IT Prof. 23(3): 110 (2021)</p>
                        <p>Chiara Boldrini, <b>Aakash Ahmad</b>, Mahdi Fahmideh, Rabie A. Ramadan, Mohamed F. Younis: Special Issue on IoT for Fighting COVID-19. Pervasive Mob. Comput. 77: 101492 (2021)</p>
                        <p>Muhammad Waseem, Peng Liang, Mojtaba Shahin, <b>Aakash Ahmad</b>, Ali Rezaei Nasab: On the Nature of Issues in Five Open Source Microservices Systems: An Empirical Study. EASE 2021: 201-210</p>
                        <p>	<b>Aakash Ahmad</b>, Madhushi Bandara, Mahdi Fahmideh, Henderik A. Proper, Giancarlo Guizzardi, Jeffrey Soar: An Overview of Ontologies and Tool Support for COVID-19 Analytics. EDOC Workshops 2021: 1-8</p>
                        <p>Muhammad Waseem, Peng Liang, Gastón Márquez, Mojtaba Shahin, Arif Ali Khan, <b>Aakash Ahmad</b>: A Decision Model for Selecting Patterns and Strategies to Decompose Applications into Microservices. ICSOC 2021: 850-858</p>
                        <p>	Bakheet Aljedaani, <b>Aakash Ahmad</b>, Mansooreh Zahedi, Muhammad Ali Babar: End-Users' Knowledge and Perception about Security of Mobile Health Apps: An Empirical Study. CoRR abs/2101.10412 (2021)</p>
                        <p><b>Aakash Ahmad</b>, Mahdi Fahmideh, Ahmed B. Altamimi, Iyad A. Katib, Aiiad Albeshri, Abdulrahman Alreshidi, Adwan Alanazi, Rashid Mehmood: Software Engineering for IoT-Driven Data Analytics Applications. CoRR abs/2103.11192 (2021)</p>
                        <p>	Muhammad Waseem, Peng Liang, Mojtaba Shahin, <b>Aakash Ahmad</b>, Ali Rezaei Nasab: On the Nature of Issues in Five Open Source Microservices Systems: An Empirical Study. CoRR abs/2104.12192 (2021)</p>
                        <p>Mahdi Fahmideh, Jun Yan, Jun Shen, Davoud Mougouei, Yanlong Zhai, <b>Aakash Ahmad</b>: A Comprehensive Framework for Analyzing IoT Platforms: A Smart City Industrial Experience. CoRR abs/2105.01877 (2021)</p>
                        <p>Muhammad Waseem, Peng Liang, Gastón Márquez, Mojtaba Shahin, Arif Ali Khan, <b>Aakash Ahmad</b>: A Decision Model for Selecting Patterns and Strategies to Decompose Applications into Microservices. CoRR abs/2110.03889 (2021)</p>
                        <p><b>Aakash Ahmad</b>, Madhushi Bandara, Mahdi Fahmideh, Henderik A. Proper, Giancarlo Guizzardi, Jeffrey Soar: An Overview of Ontologies and Tool Support for COVID-19 Analytics. CoRR abs/2110.06397 (2021)</p>
                        <h4>2020:</h4>
                        <p>	Leonardo Horn Iwaya, <b>Aakash Ahmad</b>, Muhammad Ali Babar: Security and Privacy for mHealth and uHealth Systems: A Systematic Mapping Study. IEEE Access 8: 150081-150112 (2020)</p>
                        <p>Maryam Sajjad, <b>Aakash Ahmad</b>, Asad Waqar Malik, Ahmed B. Altamimi, Ibrahim Alseadoon: Classification and Mapping of Adaptive Security for Mobile Computing. IEEE Trans. Emerg. Top. Comput. 8(3): 814-832 (2020)</p>
                        <p>Bakheet Aljedaani, <b>Aakash Ahmad</b>, Mansooreh Zahedi, Muhammad Ali Babar: An Empirical Study on Developing Secure Mobile Health Apps: The Developers' Perspective. APSEC 2020: 208-217</p>
                        <p>Bakheet Aljedaani, <b>Aakash Ahmad</b>, Mansooreh Zahedi, Muhammad Ali Babar: Security Awareness of End-Users of Mobile Health Applications: An Empirical Study. MobiQuitous 2020: 125-136</p>
                        <p>	Leonardo Horn Iwaya, <b>Aakash Ahmad</b>, Muhammad Ali Babar: Security and Privacy for mHealth and uHealth Systems: a Systematic Mapping Study. CoRR abs/2006.12069 (2020)</p>
                        <p>Bakheet Aljedaani, <b>Aakash Ahmad</b>, Mansooreh Zahedi, Muhammad Ali Babar: An Empirical Study on Developing Secure Mobile Health Apps: The Developers Perspective. CoRR abs/2008.03034 (2020)</p>
                        <p>Bakheet Aljedaani, <b>Aakash Ahmad</b>, Mansooreh Zahedi, Muhammad Ali Babar: Security Awareness of End-Users of Mobile Health Applications: An Empirical Study. CoRR abs/2008.13009 (2020)</p>
                        <h4>2019:</h4>
                        <p>Wilayat Khan, Muhammad Kamran, <b>Aakash Ahmad</b>, Farrukh Aslam Khan, Abdelouahid Derhab: Formal Analysis of Language-Based Android Security Using Theorem Proving Approach. IEEE Access 7: 16550-16560 (2019)</p>
                        <p>Abdulrahman Alreshidi, <b>Aakash Ahmad</b>: Architecting Software for the Internet of Thing Based Systems. Future Internet 11(7): 153 (2019)</p>
                        <p>Abdulrahman Alreshidi, <b>Aakash Ahmad</b>, Ahmed B. Altamimi, Khalid Sultan, Rashid Mehmood: Software Architecture for Mobile Cloud Computing Systems. Future Internet 11(11): 238 (2019)</p>
                        <h4>2018:</h4>
                        <p>Wilayat Khan, Habib Ullah, <b>Aakash Ahmad</b>, Khalid Sultan, Abdullah J. Alzahrani, Sultan Daud Khan, Mohammad Alhumaid, Sultan Abdulaziz: CrashSafe: a formal model for proving crash-safety of Android applications. Hum. centric Comput. Inf. Sci. 8: 21 (2018)</p>
                        <p><b>Aakash Ahmad</b>, Claus Pahl, Ahmed B. Altamimi, Abdulrahman Alreshidi: Mining Patterns from Change Logs to Support Reuse-Driven Evolution of Software Architectures. J. Comput. Sci. Technol. 33(6): 1278-1306 (2018)</p>
                        <h4>2017:</h4>
                        <p><b>Aakash Ahmad</b>, Muhammad Ali Babar: Software Architectures for Robotics Systems: A Systematic Mapping Study. CoRR abs/1701.05453 (2017)</p>
                        <h4>2016:</h4>
                        <p><b>Aakash Ahmad</b>, Muhammad Ali Babar: Software architectures for robotic systems: A systematic mapping study. J. Syst. Softw. 122: 16-39 (2016)</p>
                        <h4>2014:</h4>
                        <p><b>Aakash Ahmad</b>, Pooyan Jamshidi, Claus Pahl: Classification and comparison of architecture evolution reuse knowledge - a systematic review. J. Softw. Evol. Process. 26(7): 654-691 (2014)</p>
                        <p>Pooyan Jamshidi, <b>Aakash Ahmad</b>, Claus Pahl: Autonomic resource provisioning for cloud-based software. SEAMS 2014: 95-104</p>
                        <p><b>Aakash Ahmad</b>, Muhammad Ali Babar: Towards a pattern language for self-adaptation of cloud-based architectures. WICSA Companion 2014: 1:1-1:6</p>
                        <p>	<b>Aakash Ahmad</b>, Muhammad Ali Babar: A framework for architecture-driven migration of legacy systems to cloud-enabled software. WICSA Companion 2014: 7:1-7:8</p>
                        <h4>2013:</h4>
                        <p><b>Aakash Ahmad</b>, Pooyan Jamshidi, Claus Pahl, Fawad Khaliq: A Pattern Language for the Evolution of Component-based Software Architectures. Electron. Commun. Eur. Assoc. Softw. Sci. Technol. 59 (2013)</p>
                        <p><b>Aakash Ahmad</b>, Pooyan Jamshidi, Claus Pahl: A framework for acquisition and application of software architecture evolution knowledge: 14. ACM SIGSOFT Softw. Eng. Notes 38(5): 1-7 (2013)</p>
                        <p>	Pooyan Jamshidi, <b>Aakash Ahmad</b>, Claus Pahl: Cloud Migration Research: A Systematic Review. IEEE Trans. Cloud Comput. 1(2): 142-157 (2013)</p>
                        <p>Pooyan Jamshidi, Mohammad Ghafari, <b>Aakash Ahmad</b>, Claus Pahl: A Framework for Classifying and Comparing Architecture-centric Software Evolution Research. CSMR 2013: 305-314</p>
                        <h4>2012:</h4>
                        <p><b>Aakash Ahmad</b>, Pooyan Jamshidi, Claus Pahl: Graph-Based Pattern Identification from Architecture Change Logs. CAiSE Workshops 2012: 200-213</p>
                        <p>	<b>Aakash Ahmad</b>, Pooyan Jamshidi, Claus Pahl: Pattern-driven Reuse in Architecture-centric Evolution for Service Software. ICSOFT 2012: 279-284</p>
                        <p><b>Aakash Ahmad</b>, Pooyan Jamshidi, Muteer Arshad, Claus Pahl: Graph-based implicit knowledge discovery from architecture change logs. WICSA/ECSA Companion Volume 2012: 116-123</p>
                        <p>	<b>Aakash Ahmad</b>, Claus Pahl: Pat-Evol: Pattern-Driven Reuse in Architecture-Based Evolution for Service Software. ERCIM News 2012(88) (2012)</p>
                        <h4>2011:</h4>
                        <p><b>Aakash Ahmad</b>, Claus Pahl: Customisable Transformation-Driven Evolution for Service Architectures. CSMR 2011: 373-376</p>
                        <h4>2010:</h4>
                        <p>	<b>Aakash Ahmad</b>, Claus Pahl: Pattern-based customisable transformations for style-based service architecture evolution. CISIM 2010: 371-376</p>
                    </div>
                </div>
                {/* teaching activities */}
                <div ref={ref => teachingRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Teaching Activities</h2>
                    </div>
                    <div className='col-9'>
                        <h3>Teaching Session - Introduction to Software Architecture </h3>
                    </div>
                </div>
                {/* Professional services */}
                <div ref={ref => servicesRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Professional services</h2>
                    </div>
                    <div className='col-9'>
                        <h4>Associate Editor & Organiser:</h4>
                        <ul>
                            <li>Associate Editor for IEEE Access, IEEE.</li>
                            <li>Publicity Chair, SCITA 2020, Springer.</li>
                        </ul>
                        <h4>Reviewer:</h4>
                        <ul>
                            <li>IEEE Transactions on Mobile Computing (TMC), IEEE.</li>
                            <li>IEEE Access, IEEE.</li>
                            <li>IBM Journal of Research and Development, IEEE.</li>
                            <li>Journal of Systems and Software (JSS) - Elsevier.</li>
                            <li>Future Generation Computer Systems (FGCS) - Elsevier.</li>
                            <li>International Journal of Communication Systems (IJCS) - Wiley.</li>
                            <li>10th International ACM Sigsoft Conference on Quality of Software Architectures (QoSA), 2014. </li>
                            <li>8th European Conference on Software Architecture (ECSA), 2014.</li>
                            <li>21st Asia-Pacific Software Engineering Conference (APSEC), 2014.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aakash_Ahmad