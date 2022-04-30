import { useEffect, useRef } from 'react'
import ShareBox from '../../Components/Box/ShareBox'
import './index.css'

type Props = {
    setRegions: (regions: {title: string, domRef: React.MutableRefObject<HTMLDivElement | null>}[]) => void
}

function Arif_Ali_Khan(props: Props) {
    const {setRegions} = props
    const introductionRef = useRef<HTMLDivElement | null>(null)
    const interestsRef = useRef<HTMLDivElement | null>(null)
    const projectsRef = useRef<HTMLDivElement | null>(null)
    const grantsRef = useRef<HTMLDivElement | null>(null)
    const supervisionRef = useRef<HTMLDivElement | null>(null)
    const journalsRef = useRef<HTMLDivElement | null>(null)
    const conferencesProceedingsRef = useRef<HTMLDivElement | null>(null)
    const teachingRef = useRef<HTMLDivElement | null>(null)
    const servicesRef = useRef<HTMLDivElement | null>(null)
    const awardsRef = useRef<HTMLDivElement | null>(null)
    useEffect(() => {
        setRegions([
            {title: 'INTRODUCTION', domRef: introductionRef},
            {title: 'RESEARCH INTERESTS', domRef: interestsRef},
            {title: 'RESEARCH PROJECTS', domRef: projectsRef},
            {title: 'RESEARCH GRANTS', domRef: grantsRef},
            {title: 'RESEARCH SUPERVISION', domRef: supervisionRef},
            {title: 'PUBLISHED JOURNALS', domRef: journalsRef},
            {title: 'PUBLISHED CONFERENCE PROCEEDINGS', domRef: conferencesProceedingsRef},
            {title: 'TEACHING ACTIVITIES', domRef: teachingRef},
            {title: 'PROFESSIONAL SERVICES', domRef: servicesRef},
            {title: 'HONORS AND AWARDS', domRef: awardsRef},
        ])
    }, [setRegions])
    return (
        <div className='header-space'>
            <div className="container profile-container">
                <div ref={ref => introductionRef.current = ref} className="row section">
                    <div className="col-3">
                        {/* photo */}
                        <img className="profile-photo" src={require('../../Images/Arif-Ali-Khan-profile.jpeg')} alt="Arif Ali Khan"/>
                    </div>
                    <div className="col-9">
                        <div className="name-wrapper">
                            {/* Name and Title */}
                            <h1>Arif Ali Khan</h1>
                            <span className='logocolor'>Assistant Professor</span>
                        </div>
                        <ShareBox href='https://digital-transformation-lab.github.io/share/people/Arif-Ali-Khan' text={'Arif Ali Khan - Digital Transformation Lab | Assistant Professor'}/>
                        {/* brief introduction */}
                        <p>
                            Arif Ali Khan works as an Assistant Professor with the M3S Unit, Empirical Software Engineering in Software, Systems and Services, <a href='https://www.oulu.fi/en'>University of Oulu, Finland</a>. 
                            Previously he worked as a faculty member with the Faculty of <a href='https://www.jyu.fi/it/en'>Information Technology</a>, <a href='https://www.jyu.fi/en/'>University of Jyvaskyla, Finland</a>; 
                             <a href='http://cs.nuaa.edu.cn/'> College of Computer Science and Technology</a>, <a href='https://www.nuaa.edu.cn/'>Nanjing University of Aeronautics and Astronautics, China</a>; 
                            and <a href='http://ww3.comsats.edu.pk/cs/'>Department of Computer Science</a>, <a href='https://www.comsats.edu.pk/'>COMSATS University, Islamabad, Pakistan</a>.  
                            He received a BS degree in software engineering from <a href='https://www.ustb.edu.pk/'>the University of Science and Technology, Bannu, Pakistan </a>
                            and an MSc degree in information technology from <a href='https://www.utp.edu.my/Pages/Home.aspx'>Universiti Teknologi PETRONAS, Malaysia</a>. 
                            He obtained a PhD degree in software engineering from <a href='https://www.cs.cityu.edu.hk/'>the Department of Computer Science</a>, <a href='https://www.cityu.edu.hk/'>City University of Hong Kong</a>. 
                            He has participated in and managed several empirical software engineering-related research projects. 
                            Khan has expertise in software process improvement, global software development, multi-criteria decision analysis, DevOps, quantum software architecture, microservices architecture, AI ethics, agile software development, requirements change management, soft computing, and evidence-based software engineering. 
                            He is professionally active in conducting publication-based research workshops, serving as guest editor in main track software engineering journals, and editing software engineering research books. 
                            He has published over 80 articles in peer-reviewed software engineering conferences and journals.
                        </p>
                        {/* Information */}
                        <div className="row">
                            <div className="col-6">
                                <h3>Email: arif.khan@oulu.fi</h3>
                                <h3>Mobile: +358403291085</h3>
                                <h3><a href='https://scholar.google.com.my/citations?user=XgJCSmIAAAAJ'>Google Scholar</a>, <a href='https://dblp.org/pid/166/2442.html'>DBLP</a></h3>
                            </div>
                            <div className="col-6">
                                <h3>Address: Faculty of Information Technology and Electrical Engineering, University of Oulu, Pentti Kaiteran katu 1, 90570 Oulu, Finland</h3>
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
                        <div className='row'>
                            <div className='col-6'>
                                <ul>
                                    <li>Quantum Software Architecture</li>
                                    <li>Software Process Improvement</li>
                                    <li>Global Software Development</li>
                                    <li>Multi-criteria Decision Analysis</li>
                                    <li>DevOps</li>
                                    <li>Microservices Architecture</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>AI Ethics</li>
                                    <li>Agile Software Development</li>
                                    <li>Requirements Change Management</li>
                                    <li>Soft Computing</li>
                                    <li>Evidence-based Software Engineering</li>
                                </ul>
                            </div>
                        </div>
                        <p className='logocolor'>To prospective students: Interested research students are encouraged to contact me to work on related topics.</p>
                    </div>
                </div>
                {/* research projects */}
                <div ref={ref => projectsRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Research Projects</h2>
                    </div>
                    <div className='col-9'>
                        <ul>
                            <li>AI ethics: Towards a maturity model for assessing ethical capabilities of AI industry</li>
                            <li>Software Architecture for Quantum Computing Systems</li>
                            <li>Managing DevOps practices</li>
                            <li>Software Process Improvement Implementation and Management Model (SPIIMM) for Global Software Development</li>
                            <li>Communication Risk Framework for Requirements Change Management in Global Software Development</li>
                            <li>Managing Reward System in Software Crowdsourcing</li>
                            <li>Scaling Agile Methods in Chinese Globally Development Industry</li>
                            <li>Requirements Change Management in the domain of Global Software Development</li>
                        </ul>
                    </div>
                </div>
                {/* Research Grants */}
                <div ref={ref => grantsRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Research Grants</h2>
                    </div>
                    <div className='col-9'>
                        <ul>
                            <li>Dimensional Classification of Success Factors Affecting Process Improvement in Global Software Development: Client-Vendor Perspective, HEC SRGP grant, No21-1933/SRGP/R&D/HEC/2018, (PKR 0.5 million) Principal Investigator (PI).</li>
                            <li>GSEPIM: A Road Map for Software Process Assessment and Improvement in the domain of Global Software Development, Nanjing University of Aeronautics and Astronautics Startup Grant, Grant No: 1015‐YAH18056, (60K RMB), Principal Investigator (PI).</li>
                            <li>A Step towards the improvement in the Performance of Text Classification, HEC SRGP grant, No21-1933/SRGP/R&D/HEC/2018, (PKR 1 million) Co-Principal Investigator (CO-PI).</li>
                        </ul>
                    </div>
                </div>
                {/* Research Supervision */}
                <div ref={ref => supervisionRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Research Supervision</h2>
                    </div>
                    <div className='col-9'>
                        <h4>Graduated PhD Students as a Co-Supervisor:</h4>
                        <ul>
                            <li>Muhammad Azeem Akbar (Managing requirements change in global software development)-(Graduated, 2019)</li>
                            <li>Mohammad Shameem (Developing a maturity model for scaling Agile methodologies in the domain of global software development)-(Graduated, 2019)</li>
                        </ul>
                        <h4>Master Research Students:</h4>
                        <ul>
                            <li>Peng Zhou (What Chinese industry really demand from academia? Software processes perspective)-(2020- till date)</li>
                            <li>Sun (Managing Reward System in Software Crowdsourcing)-(Graduated, 2021)</li>
                            <li>Sher Badshah (DevOps maturity model based on CMMI and ITIL)-(Graduated, 2020)</li>
                            <li>Nasir Hussain (Categorical Classification of Factors Effecting Knowledge Management in Software Crowdsourcing)-(Graduated, 2020)</li>
                            <li>Ayesha Amjid (Proposed a framework for risk management in Pakistani global software development industry)-(Graduated, 2019)</li>
                            <li>Amna (Implementing CMMI Level 3 with Agile at Health Care Software Development Organizations)-(Graduated, 2019)</li>
                        </ul>
                    </div>
                </div>
                {/* Published Journals */}
                <div ref={ref => journalsRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Published Journals</h2>
                    </div>
                    <div className='col-9'>
                        <h4>2022:</h4>
                        <p><b>Khan, A. A.</b>, Ahmad, A., Waseem, M., Liang, P., Fahmideh, M., Mikkonen, T., & Abrahamsson, P. (2022). Software Architecture for Quantum Computing Systems-A Systematic Review. arXiv preprint arXiv:2202.05505.</p>
                        <p>Ahmad, A., <b>Khan, A. A.</b>, Waseem, M., Liang, P., Fahmideh, M., Mikkonen, T. An Empirical Study on Issues and their Causes in Open Source Quantum Software Systems (submitted to 30th ACM Joint European Software Engineering Conference and Symposium on the Foundations of Software Engineering (ESEC/FSE) 2022)</p>
                        <p><b>Khan, A. A.</b>, Ahmad, A., Waseem, M., Liang, P., Fahmideh, M., Mikkonen, T. Architecting Software Systems for Quantum Computing - A Process-Centred View (Submitted to IEEE International Conference on Quantum Software (QSW) 2022)</p>
                        <p>Akbar, M. A., <b>Khan, A. A.</b>, & Huang, Z. (2022). Multicriteria decision making taxonomy of code recommendation system challenges: a fuzzy-AHP analysis. Information Technology and Management, 1-17.</p>
                        <h4>2021:</h4>
                        <p><b>Khan, A. A.</b>, Badshah, S., Liang, P., Khan, B., Waseem, M., Niazi, M., & Akbar, M. A. (2021). Ethics of AI: A systematic literature review of principles and challenges. arXiv preprint arXiv:2109.07906.</p>
                        <p>Tian, F., Wang, T., Liang, P., Wang, C., <b>Khan, A. A.</b>, & Babar, M. A. (2021). The impact of traceability on software maintenance and evolution: A mapping study. Journal of Software: Evolution and Process, 33(10), e2374.</p>
                        <p><b>Khan, A. A.</b>, Shameem, M., Nadeem, M., & Akbar, M. A. (2021). Agile trends in Chinese global software development industry: Fuzzy AHP based conceptual mapping. Applied Soft Computing, 102, 107090.</p>
                        <h4>2020:</h4>
                        <p><b>Khan, A. A.</b>, Shameem, M. (2020). Multi-criteria decision making taxonomy for DevOps challenging factors using analytical hierarchy process, Journal of Software: Evolution and Process, DOI: 10.1002/smr.2263 </p>
                        <p><b>Khan, A. A.</b>, & Akbar, M. A. (2020). Systematic literature review and empirical investigation of motivators for requirements change management process in global software development. Journal of Software: Evolution and Process, https://doi.org/10.1002/smr.2242. </p>
                        <p>Badshah, S., <b>Khan, A. A.</b>, Hussain, S., & Khan, B. (2021). What users really think about the usability of smartphone applications: diversity based empirical investigation. Multimedia Tools and Applications, 80(6), 9177-9207. </p>
                        <p>Akbar, M. A., Mahmood, S., <b>Khan, A. A.</b>, AlSanad, A., & Gumaei, A. (2020). Prioritizing Management Success Factors in Offshore Software Development. Arabian Journal for Science and Engineering, 45, 10163-10184.</p>
                        <p>Akbar, M. A., Shameem, M., <b>Khan, A. A.</b>, Nadeem, M., Alsanad, A., & Gumaei, A. (2020). A fuzzy analytical hierarchy process to prioritize the success factors of requirement change management in global software development. Journal of Software: Evolution and Process, https://doi.org/10.1002/smr.2292. </p>
                        <p>Akbar, M. A., Alsalman, H., <b>Khan, A. A.</b>, Mahmood, S., Meshram, C., Gumaei, A. H., & Riaz, M. T. (2020). Multicriteria Decision Making Taxonomy of Cloud-Based Global Software Development Motivators. IEEE Access, 8, 185290-185310.</p>
                        <p>Awaisi, K. S., Hussain, S., Ahmed, M., <b>Khan, A. A.</b>, & Ahmed, G. (2020). Leveraging IoT and Fog Computing in Healthcare Systems. IEEE Internet of Things Magazine, 3(2), 52-56.</p>
                        <p>Akbar, M. A., <b>Khan, A. A.</b>, Mahmood, S., Alsanad, A., & Gumaei, A.(2020). A Robust Framework for Cloud based Software Development Outsourcing Factors using Analytical Hierarchy Process, Journal of Software: Evolution and Process DOI: 10.1002/smr.2275 </p>
                        <p>Akbar, M. A., Mahmood, S., Huang, Z., <b>Khan, A. A.</b>, & Shameem, M. (2020). Readiness model for requirements change management in global software development. Journal of Software: Evolution and Process, e2264. </p>
                        <p>Shameem, M., <b>Khan, A. A.</b>, Hasan, M. G., & Akbar, M. A. (2020). Analytic Hierarchy Process Based Prioritisation and Taxonomy of Success Factors for Scaling Agile Methods in Global Software Development. IET Software, 14(4), 389 – 401.</p>
                        <p>Akbar, M. A., Shameem, M., <b>Khan, A. A.</b>, Nadeem, M., Alsanad, A (2020). A Fuzzy Analytical Hierarchy Process to Prioritize the Success Factors of Requirements Change Management in Global Software Development”, Journal of Software: Evolution and Process, DOI: 10.1002/smr.2292,. </p>
                        <p>Shameem, M., Kumar, R. R., Nadeem, M., & <b>Khan, A. A.</b> (2020). Taxonomical classification of barriers for scaling agile methods in global software development environment using fuzzy analytic hierarchy process. Applied Soft Computing, 90, 106122.</p>
                        <p>Akbar, M. A., <b>Khan, A. A.</b>, Khan, W.A., Mahmood, S. (2020). Requirement Change Management Challenges in Global Software Development (GSD): An Analytical Hierarchy Process Approach. Journal of Software: Evolution and Process. https://doi.org/10.1002/smr.2246</p>
                        <h4>2019:</h4>
                        <p><b>Khan, A. A.</b>, Shameem, M., Kumar, R. R., Hussain, S., & Yan, X. (2019). Fuzzy AHP based prioritization and taxonomy of software process improvement success factors in global software development. Applied Soft Computing, 83, 105648. </p>
                        <p><b>Khan, A. A.</b>, Keung, J., Niazi, M., Hussain, S., & Shameem, M. (2019). GSEPIM: A roadmap for software process assessment and improvement in the domain of global software development. Journal of Software: Evolution and Process, 31(1), e1988. </p>
                        <p>Akbar, M. A., Sang, J., <b>Khan, A. A.</b>, & Hussain, S. (2019). Investigation of the requirements change management challenges in the domain of global software development. Journal of Software: Evolution and Process, 31(10), e2207. </p>
                        <p>Hussain, S., Khan, A.A., M. Elahi, Sohail, K. 2019. Knowledge based Quality Analysis of Crowdsourcing-Based Software Development Platforms. Computational and Mathematical Organization Theory Journal, 25(2), 122-131, 2019. </p>
                        <p>Akbar, M. A., Sang, J., <b>Khan, A. A.</b>, & Shafiq, M. (2019). Towards the Guidelines for Requirements Change Management in Global Software Development: Client-Vendor Perspective. IEEE Access., 7, 76985-77007.</p>
                        <p>Hussain, S., Keung, J., Sohail, M. K., <b>Khan, A. A.</b>, Ahmad, G., Mufti, M. R., & Khatak, H. A. (2019). Methodology for the quantification of the effect of patterns and anti-patterns association on the software quality. IET Software. </p>
                        <p>Hussain, S., Keung, J., Sohail, M. K., <b>Khan, A. A.</b>, Ilahi, M., Ahmad, G., ... & Noor, M. A. (2019). A methodology to rank the design patterns on the base of text relevancy. Soft Computing, 1-16.</p>
                        <p>Akbar, M. A., Sang, J., <b>Khan, A. A.</b>, Mahmood, S., Qadri, S. F., Hu, H., & Xiang, H. (2019). Success factors influencing requirements change management process in global software development. Journal of Computer Languages, 51, 112-130. </p>
                        <p>Hussain, S., Keung, J., Sohail, M. K., <b>Khan, A. A.</b>, & Ilahi, M. (2019). Automated framework for classification and selection of software design patterns. Applied Soft Computing, 75, 1-20. </p>
                        <p>Hussain, S, Keung, J., <b>Khan, A. A.</b>,F. Iccialli, A. khunzada, S. uomo, A. Ahmad, and G. Jeon. 2018. Implication of Deep Learning for the automation of Design Patterns Organization, Journal of Parallel and Distributed Computing, 117, 256-266. </p>
                        <h4>2018:</h4>
                        <p><b>Khan, A. A.</b>, Keung, J., Hussain, S., Niazi, M., & Kieffer, S. (2018). Systematic literature study for dimensional classification of success factors affecting process improvement in global software development: client–vendor perspective. IET Software, 12(4), 333-344. </p>
                        <p>Shameem, M., Kumar, R. R., Kumar, C., Chandra, B., & <b>Khan, A. A.</b> (2018). Prioritizing challenges of agile process in distributed software development environment using analytic hierarchy process. Journal of Software: Evolution and Process, 30(11), e1979. </p>
                        <p>Shameem, M., Chandra, B., Kumar, C., & <b>Khan, A. A.</b> (2018). Understanding the Relationships Between Requirements Uncertainty and Nature of Conflicts: A Study of Software Development Team Effectiveness. Arabian Journal for Science and Engineering, 43(12), 8223-8238. </p>
                        <p>Shafiq, M., Zhang, Q., Akbar, M. A., <b>Khan, A. A.</b>, Hussain, S., Amin, F. E., ... & Soofi, A. A. (2018). Effect of project management in requirements engineering and requirements change management processes for global software development. IEEE Access, 6, 25747-25763. </p>
                        <p>Akbar, M. A., Sang, J., <b>Khan, A. A.</b>, Fazal, E., Shafiq, M., Hussain, S., Hu, H., Elahi, M., Xiang, H. 2018. Improving the quality of software development process by introducing a new methodology—AZ–Model. IEEE Access (2018), 6, 4811- 4823. </p>
                        <p>Akbar, M. A., Sang, J., <b>Khan, A. A.</b>, Fazal, E. 2018. Statistical Analysis of the Effects of Heavyweight and Lightweight Methodologies on the Six-Pointed Star Model, IEEE Access Journal (2018), 6, 8066 - 8079. </p>
                        <h4>2017:</h4>
                        <p><b>Khan, A. A.</b>, Keung,  J., Amin, E. F., Abdullah-Al-Wadud, M. 2017. SPIIMM: Toward a Model for Software Process Improvement Implementation and Management in Global Software Development. IEEE Access (2017), 5, 13720-13741. </p>
                        <p><b>Khan, A. A.</b>, Keung, J., Niazi, M., and Hussain, S. 2017. Understanding software process improvement in global software development: a theoretical framework of human factors. ACM SIGAPP Applied Computing Review 17.2 (2017): 5-15. </p>
                        <p><b>Khan, A. A.</b>, Keung,  J., Niazi, M., Hussain, S., Ahmad, A. 2017. Systematic Literature Review and Empirical investigation of Barriers for Software Process Improvement in Global Software Development: Client-Vendor Perspective, Information and Software Technology, 87, 180-205. </p>
                        <p>Hussain, S., Keung, J., <b>Khan, A. A.</b>  2017. Software Design Patterns Classification and Selection using Text Categorization Approach, Applied Soft Computing, 58, 225-244, (2017). </p>
                        <h4>2016:</h4>
                        <p><b>Khan, A. A.</b> and Keung, J. 2016. Systematic Review of success factors and barriers for Software Process Improvement in Global Software Development, IET Software 10.5 (2016): 125-135. </p>
                        <h4>2013:</h4>
                        <p><b>Khan, A. A.</b>, Basri, S., Dominic, P. D. D., & Fazal-e-Amin. 2013. Communication Risks and Best Practices in Global Software Development during Requirements Change Management: A Systematic Literature Review Protocol.  Research Journal of Applied Sciences, Engineering and Technology, 6(19): 3514-3519. (Scopus, First Author)</p>
                        <p><b>Khan, A. A.</b>, Basri, S., Dominic, P. D. D., & Fazal-e-Amin. 2013. A Survey based study on Factors effecting Communication in GSD”, Research Journal of Applied Sciences, Engineering and Technology 7 (7): 1123-1131. (Scopus, First Author)</p>
                    </div>
                </div>
                {/* Published Conference Proceedings */}
                <div ref={ref => conferencesProceedingsRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Published Conference Proceedings</h2>
                    </div>
                    <div className='col-9'>
                        <p>Waseem, M., Liang, P., Ahmad, A., Shahin, M., <b>Khan, A. A.</b>, & Márquez, G., (2022) Decision Models for Selecting Patterns and Strategies in Microservices Systems and their Evaluation by Practitioners. In Proceedings of the 44th IEEE/ACM International Conference on Software Engineering (ICSE): Software Engineering in Practice (SEIP) track, DOI: 10.1145/3510457.3513079.</p>
                        <p>Waseem, M., Liang, P., Márquez, G., Shahin, M., <b>Khan, A. A.</b>, & Ahmad, A. (2021, November). A Decision Model for Selecting Patterns and Strategies to Decompose Applications into Microservices. In International Conference on Service-Oriented Computing (pp. 850-858). Springer, Cham. </p>
                        <p>Zhou, P., <b>Khan, A. A.</b>, Liang, P., & Badshah, S. (2021). System and Software Processes in Practice: Insights from Chinese Industry. In Evaluation and Assessment in Software Engineering (pp. 394-401).</p>
                        <p>Cheng, S., Yan, X., & <b>Khan, A. A.</b> (2020). A Similarity Integration Method based Information Retrieval and Word Embedding in Bug Localization. In 2020 IEEE 20th International Conference on Software Quality, Reliability and Security (QRS) (pp. 180-187). IEEE.</p>
                        <p>Badshah,S., <b>Khan, A. A.</b>, and Khan, B.: Towards Process Improvement in DevOps: A Systematic Literature Review, (Accepted for publications in the proceedings of EASE 2020).</p>
                        <p>Sun,W., Yan, X., and <b>Khan, A. A.</b>: Generative Ranking based Sequential Recommendation in Software Crowdsourcing, (Accepted for publications in the proceedings of EASE 2020).</p>
                        <p>Chen, Y., Yan, X., & <b>Khan, A. A.</b> (2019). A novel reliability assessment method based on the effects of components. In 2019 IEEE 19th International Conference on Software Quality, Reliability and Security (QRS) (pp. 69-76). </p>
                        <p><b>Khan, A. A.</b>, Keung, J., Niazi, M., Hussain, S., and Zhang, H. 2017. Systematic Literature Reviews in Software Process Improvement: A Tertiary Study. In Communications in Computer and Information Science (CCIS) Series, vol.748:177-190, Springer, Cham, 2017. </p>
                        <p>Hussain, S. Keung, J., <b>Khan, A. A.</b>, A framework for Ranking of Software Design Patterns, In Advances in Intelligent Systems and Computing, vol.611:205-2015, Springer, 2017</p>
                        <p>Shameem, M., Kumar, C., Chandra, B., & <b>Khan, A. A.</b> (2017). Systematic Review of Success Factors for Scaling Agile Methods in Global Software Development Environment: A Client-Vendor Perspective. In 2017 IEEE 24th Asia-Pacific Software Engineering Conference Workshops (APSECW) (pp. 17-24). </p>
                        <p><b>Khan, A. A.</b>, Keung, J., Niazi, M., & Hussain, S. (2017). Towards a hypothetical framework of humans related success factors for process improvement in global software development: systematic review. In Proceedings of the ACM Symposium on Applied Computing (pp. 180-186). </p>
                        <p>Hussain, S., Keung, J., & <b>Khan, A. A.</b> (2017y). The Effect of Gang-of-Four Design Patterns Usage on Design Quality Attributes. In 2017 IEEE International Conference on Software Quality, Reliability and Security (QRS) (pp. 263-273). </p>
                        <p>Hussain, S., Keung, J., <b>Khan, A. A.</b>, & Bennin, K. E. (2016). Detection of fault-prone classes using logistic regression based object-oriented metrics thresholds. In 2016 IEEE International Conference on Software Quality, Reliability and Security Companion (QRS-C) (pp. 93-100). </p>
                        <p><b>Khan, A. A.</b> (2016). A framework for assisting software process improvement program in global software development: student research abstract. In Proceedings of the 31st Annual ACM Symposium on Applied Computing (pp. 1580-1581). </p>
                        <p>Hussain, S., <b>Khan, A. A.</b>, & Bennin, K. E. (2016). Empirical investigation of fault predictors in context of class membership probability estimation. In Proceedings of the 31st Annual ACM Symposium on Applied Computing (pp. 1550-1553). </p>
                        <p>Bennin, K.E., Alqadhi, M., Hussain, S., <b>Khan, A. A.</b>, Mensah, S., Ernest, P. “End User in Charge - Social Framework for Open Source Development” Second International Conference on Advances and Trends in Software Engineering (SOFTENG), Lisboa- Portugal. 2016.</p>
                        <p>Akhunzada, A., Gani, A., Hussain, S., & <b>Khan, A. A.</b> (2015). A formal framework for web service broker to compose QoS measures. In 2015 IEEE SAI Intelligent Systems Conference (IntelliSys) (pp. 532-536). </p>
                        <p>Akhunzada, A., Gani, A., Hussain, S., & <b>Khan, A. A.</b> (2015). Towards experiencing the pair programming as a practice of the Rational Unified Process (RUP). In 2015 IEEE SAI Intelligent Systems Conference (IntelliSys) (pp. 537-542). </p>
                        <p><b>Khan, A. A.</b>, Keung, J., Hussain, S., & Bennin, K. E. (2015). Effects of geographical, socio-cultural and temporal distances on communication in global software development during requirements change management a pilot study. In 2015 IEEE International Conference on Evaluation of Novel Approaches to Software Engineering (ENASE) (pp. 159-168). </p>
                        <p>Hussain, S., Keung, J., <b>Khan, A. A.</b>, & Bennin, K. E. (2015, September). Performance evaluation of ensemble methods for software fault prediction: An experiment. In Proceedings of the 24th ACM Australasian Software Engineering Conference (ASWEC 2015) (pp. 91-95). </p>
                        <p><b>Khan, A. A.</b>, Basri, S., Dominic, P. D. D. (2013) Communication risks in GSD during RCM: Results from SLR, International Conference on Computer and Information Sciences (ICCOINS), 2014, pp. 1-6</p>
                        <p><b>Khan, A. A.</b>, Basri, S., Dominic, P. D. D. (2013)  A Proposed Framework for Communication Risks during RCM in GSD” Procedia - Social and Behavioral Sciences, Volume 129, 15 May 2014, Pages 496-503, ISSN 1877-0428, http://dx.doi.org/10.1016/j.sbspro.2014.03.706.</p>
                        <p><b>Khan, A. A.</b>, Basri, S., Dominic, P. D. D., & Fazal-e-Amin. (2012) "A process model for Requirements Change Management in Collocated Software Development", Proceeding of the IEEE Symposium on E-Learning, E-Management and E-Services (IS3e),ISBN 978-1-4673-2390-1, pp. 1-6. </p>
                        <p><b>Khan, A. A.</b>, Basri, S., & Dominic, P. (2012) "A proposed framework for Requirement Change Management in Global Software Development", Proceeding of the International Conference on Computer & Information Science (ICCIS), ISBN 978-1-4673-1937-9, pp.944-947.</p>
                        <p><b>Khan, A. A.</b>, Khan, D. (2011) " A Model for Requirements Change Management: Using of CMMI level 2 Specific Practice, 1st All Pakistan Technical Paper Competition COMSATS Institute of Information Technology, Lahore Pakistan, 19 April 2011.</p>
                    </div>
                </div>
                {/* teaching activities */}
                <div ref={ref => teachingRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Teaching Activities</h2>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            {/* teaching activities left clumn*/}
                            <div className='col-6'>
                                <h3>College of Computer Science and Technology, Nanjing University of Aeronautics and Astronautics, Nanjing, China (May 2018- May 2021) <br></br>Sole Instructor for Software Engineering</h3>
                                <ul>
                                    <li>Conduct lectures and prepare teaching material for 4 hours’ weekly lectures</li>
                                    <li>Designed course project for developing a software system</li>
                                </ul>
                                <h3>Sole Instructor for Software Process Management</h3>
                                <ul>
                                    <li>Re-designed the course syllabus and prepare the teaching material for 4 hours’ weekly lectures</li>
                                    <li>Designed course project for deploying CMMI practices</li>
                                </ul>
                                <h3>Department of Computer Science, COMSATS University, Islamabad, Pakistan (Jan 2018- May 2018) <br></br>Sole Instructor for Software Project Management</h3>
                                <ul>
                                    <li>Designed the course syllabus and prepare the teaching material for 6 hours’ weekly lectures (3 different batches)</li>
                                </ul>
                                <h3>Sole Instructor for Enterprise Resource Planning</h3>
                                <ul>
                                    <li>Proposed the course first time in the department</li>
                                    <li>Designed the course syllabus and prepare the teaching material for 2 hours’ weekly lectures</li>
                                </ul>
                                <h3>City University of Hong Kong (Aug 2014- Aug 2017) <br></br>Teaching Assistant for Object Oriented Programming</h3>
                                <ul>
                                    <li>Conducted 2 hours’ weekly lab sessions</li>
                                    <li>Graded weekly lab work</li>
                                </ul>
                            </div>
                            {/* teaching activities right clumn*/}
                            <div className='col-6'>
                                <h3>Teaching Assistant for GE (Global IT Case Studies)</h3>
                                <ul>
                                    <li>Graded students case study reports</li>
                                    <li>Supervised and graded students report presentations</li>
                                </ul>
                                <h3>Teaching Assistant for Introduction to Computer Studies</h3>
                                <ul>
                                    <li>Graded weekly lab work</li>
                                </ul>
                                <h3>Teaching Assistant for Introduction to Internet and Programming</h3>
                                <ul>
                                    <li>Graded weekly lab work</li>
                                </ul>
                                <h3>Universiti Teknologi PETRONAS, Malaysia (Oct 2011- Nov 2013) <br></br>Teaching Assistant for System Analysis and Design</h3>
                                <ul>
                                    <li>Conducted 2 hours’ weekly lab sessions</li>
                                    <li>Graded weekly lab work</li>
                                    <li>Graded students’ semester project presentation</li>
                                </ul>
                                <h3>Teaching Assistant for Programming Fundamentals (C++/PASCAL)</h3>
                                <ul>
                                    <li>Conducted weekly 2 hours’ lab sessions</li>
                                    <li>Graded weekly lab work</li>
                                    <li>Graded students’ semester project presentation</li>
                                </ul>
                                <h3>Teaching Assistant for Final Year Project</h3>
                                <ul>
                                    <li>Graded students’ final year projects report</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Professional services */}
                <div ref={ref => servicesRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Professional services</h2>
                    </div>
                    <div className='col-9'>
                        <h4>Workshop Chair:</h4>
                        <ul>
                            <li>3rd International workshop on DevOps quality management (DevOps-QM)- collocated with the 26th International Conference on Evaluation and Assessment in Software Engineering (EASE 2022), 13-15 June 2022, Gothenburg, Sweden.</li>
                            <li>2nd International workshop on DevOps quality management (DevOps-QM)- collocated with the 25th International Conference on Evaluation and Assessment in Software Engineering (EASE 2021), 21-24 June 2021, Trondheim, Norway.</li>
                            <li>1st International workshop on DevOps quality management (DevOps-QM)- collocated with the 24th International Conference on Evaluation and Assessment in Software Engineering (EASE 2020), 15-17 April, 2020, Trondheim, Norway.</li>
                            <li>International workshop on Empirical Studies in the Domain of Global Software Engineering (ESDGSE), collocated with the 14th International Conference on Evaluation of Novel Approaches to Software Engineering, 4th-5th May, 2019, Heraklion, Greece.</li>
                        </ul>
                        <h4>Workshop Co-Chair:</h4>
                        <ul>
                            <li>1st International workshop on enabling software engineering practices via blockchain technology (ESEpBT)-collocated with the 3rd International Conference on Emerging Data and Industry 4.0 (EDI40 2020).</li>
                            <li>International Workshop on Empirical Studies in the Domain of Social Network Computing, La Toja Island, Spain (16th-19th April, 2019).</li>
                        </ul>
                        <h4>Guest Editor:</h4>
                        <ul>
                            <li>S1: (lead guest editor) Special Issue on Managing Software Processes Using Soft Computing Techniques in Information and Software Technology Journal.</li>
                            <li>S1: Special Issue on Evolving Software Process Paradigms: Trends and Future Directions in Information Technology and Management Journal (2020).</li>
                            <li>S2: Special Issue on COVID-19 impacts on Software Engineering industry and research community in CMC-Computers, Materials & Continua Journal (2020).</li>
                            <li>S3: Special issue on Multimedia Software Engineering: Challenges and Opportunities in Multimedia Tools and Applications Journal (2020).</li>
                            <li>S4: Special Issue on Knowledge Discovery for Software Development in IET Software Journal (2019).</li>
                        </ul>
                        <h4>Book Editor:</h4>
                        <ul>
                            <li>Evolving software processes: trend and future directions (Wiley and Scrivener), 2022.</li>
                        </ul>
                        <h4>Invited Talks:</h4>
                        <ul>
                            <li>Keynote talk: The Zoo of Agile Practices: Where the Chinese Global Software Development Industry is Heading? at 10th International Conference on Computer Engineering and Networks (CENet2020), Xian, China.</li>
                        </ul>
                        <h4>Program Committee Member:</h4>
                        <ul>
                            <li>International Conference on Software Analysis, Evolution, and Reengineering (SANER 2022).</li>
                            <li>IEEE International Conference on Software Quality, Reliability and Security (QRS 2020). </li>
                            <li>First International Workshop on Software Engineering Automation: A Natural Language Perspective, co-located with 35th IEEE/ACM International Conference on Automated Software Engineering (ASE2020).</li>
                            <li>17th IEEE International conference on frontiers of information technology (FIT 2019).</li>
                            <li>Evaluation and Assessment in Software Engineering (EASE 2019) Conference (Posters Session).</li>
                            <li>32nd ACM SIGAPP Symposium on Applied Computing, Marrakech, (SAC 2016). </li>
                        </ul>
                        <h4>Reviewer:</h4>
                        <ul>
                            <li>Empirical Software Engineering Journal</li>
                            <li>Information and Software Technology Journal</li>
                            <li>Journal of Systems and Software</li>
                            <li>Software Quality Journal</li>
                            <li>International Journal of Management Reviews</li>
                            <li>BISE (Business & Information Systems Engineering) Journal</li>
                            <li>Computer Science Review Journal</li>
                            <li>Applied Soft Computing Journal</li>
                            <li>Journal of Software: Evolution and Process</li>
                            <li>IEEE Access Journal</li>
                            <li>Information Resources Management Journal (IRMJ)</li>
                        </ul>
                        <h4>External PhD thesis examiner:</h4>
                        <ul>
                            <li>Cyber-secured framework for the control and monitoring of IoT devices in smart logistics (2021) by Arbab Waseem Abbas, University of Engineering and Technology, Peshawar, Pakistan.</li>
                        </ul>
                    </div>
                </div>
                {/* Honors and Awards */}
                <div ref={ref => awardsRef.current = ref} className='row section'>
                    <div className='col-3'>
                        <h2>Honors and Awards</h2>
                    </div>
                    <div className='col-9'>
                        <ul>
                            <li>Recipient of the 2018 Premium Award for Best Paper in IET Software</li>
                            <li>Recipient of the outstanding research student award of the year 2016/2017 (City University of Hong Kong)</li>
                            <li>Recipient of the Hall 8 and JCH most active Student of the year award 2017/2018 (City University of Hong Kong)</li>
                            <li>Recipient of the Hall 8 and JCH most active Student Residence award 2016/2017 (City University of Hong Kong)</li>
                            <li>Recipient of the Higher Education Commission of Pakistan Award of Partial Support Program</li>
                            <li>Recipient of fully funded research scholarship for MSc studies at Universiti Teknologi PETRONAS, Malaysia</li>
                            <li>Recipient of fully funded research scholarship for PhD studies at City University of Hong Kong</li>
                            <li>Recipient of SIGAPP and ACM student Travel Award to attend SAC 2016 in Pisa, Italy</li>
                            <li>Recipient of CityU travel grant for paper presentation in Barcelona, Spain</li>
                            <li>Winner of all UTP international squash tournament 2014</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arif_Ali_Khan
