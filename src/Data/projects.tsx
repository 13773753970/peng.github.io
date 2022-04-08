const projects = [
    {
        link: 'quantum-computing',
        icon: "icon-quantum-computing",
        title: "Software Architecture for Quantum Computing Systems",
        description: "This project provides a \"process-centered\" view of quantum software architectures and explores multi-faceted aspects of engineering and architecting principles and practices to develop quantum age software systems and applications.",
        descriptionHTML: <>
            <svg><use href={`#icon-quantum-computing`}></use></svg>
            <h2>Software Architecture for <span className="logocolor">Quantum Computing Systems</span> </h2>
            <p>This project provides a <span className="logocolor">"process-centered"</span> view of <span className="logocolor">quantum software architectures</span> and explores multi-faceted aspects of <span className="logocolor">engineering and architecting principles and practices</span> to develop quantum age software systems and applications.</p>
        </>,
        studies: [
            {
                title: 'Software Architecture for Quantum Computing Systems - A Systematic Review',
                link: 'https://arxiv.org/abs/2202.05505',
                type: 'Preprint',
                date: 'Feb 2022',
                authors: [
                    {name: 'Arif Ali Khan', portrait: require('../Images/arif.jpg')},
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Mahdi Fahmideh', portrait: require('../Images/Mahdi-Fahmideh-portrait.jpeg')},
                    {name: 'Tommi Mikkonen', },
                    {name: 'Pekka Abrahamsson', portrait: require('../Images/Pekka-Abrahamsson-portrait.jpeg')},
                ],
                abstract: 'Quantum computing systems rely on the principles of quantum mechanics to perform a multitude of computationally challenging tasks more efficiently than their classical counterparts. The architecture of software-intensive systems can empower architects who can leverage architecture-centric processes, practices, description languages, etc., to model, develop, and evolve quantum computing software (quantum software for short) at higher abstraction levels. We conducted a systematic literature review (SLR) to investigate (i) architectural process, (ii) modeling notations, (iii) architecture design patterns, (iv) tool support, and (iv) challenging factors for quantum software architecture. Results of the SLR indicate that quantum software represents a new genre of software-intensive systems; however, existing processes and notations can be tailored to derive the architecting activities and develop modeling languages for quantum software. Quantum bits (Qubits) mapped to Quantum gates (Qugates) can be represented as architectural components and connectors that implement quantum software. Tool-chains can incorporate reusable knowledge and human roles (e.g., quantum domain engineers, quantum code developers) to automate and customize the architectural process. Results of this SLR can facilitate researchers and practitioners to develop new hypotheses to be tested, derive reference architectures, and leverage architecture-centric principles and practices to engineer emerging and next generations of quantum software.'
            }
        ]
    },
    {
        link: 'ai-ethics',
        icon: "icon-AI",
        title: "AI Ethics",
        description: "The promises of AI systems like improving productivity, reducing costs, and safety have now been considered with worries that these complex systems might bring more ethical harm than economical good. This project aims to explore AI ethics in different contexts and propose tools and methods that could be used to consider ethics in AI application development processes.",
        descriptionHTML: <>
            <svg><use href={`#icon-AI`}></use></svg>
            <h2><span className="logocolor">AI Ethics</span></h2>
            <p>The promises of AI systems like improving productivity, reducing costs, and safety have now been considered with worries that <span className="logocolor">these complex systems might bring more ethical harm than economical good.</span> This project aims to explore AI ethics in different contexts and propose tools and methods that could be used to consider <span className="logocolor">ethics in AI application development processes.</span> </p>
        </>,
        studies: [
            {
                title: 'Ethics of AI: A Systematic Literature Review of Principles and Challenges',
                link: 'https://arxiv.org/abs/2109.07906',
                type: 'Preprint',
                date: 'Sep 2021',
                authors: [
                    {name: 'Arif Ali Khan', portrait: require('../Images/arif.jpg')},
                    {name: 'Sher Badshah', },
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Mahmood Niazi', },
                    {name: 'Muhammad Azeem Akbar', portrait: require('../Images/Muhammad-Azeem-Akbar-portrait.jpeg')}
                ],
                abstract: 'Ethics in AI becomes a global topic of interest for both policymakers and academic researchers. In the last few years, various research organizations, lawyers, think-tankers, and regulatory bodies get involved in developing AI ethics guidelines and principles. However, there is still debate about the implications of these principles. We conducted a systematic literature review (SLR) study to investigate the agreement on the significance of AI principles and identify the challenging factors that could negatively impact the adoption of AI ethics principles. The results reveal that the global convergence set consists of 22 ethical principles and 15 challenges. Transparency, privacy, accountability, and fairness are identified as the most common AI ethics principles. Similarly, lack of ethical knowledge and vague principles are reported as the significant challenges for considering ethics in AI. The findings of this study are the preliminary inputs for proposing a maturity model that assess the ethical capabilities of AI systems and provides best practices for further improvements.'
            },
            {
                title: 'Implementation of Ethically Aligned Design with Ethical User stories in SMART terminal Digitalization project: Use case Passenger Flow',
                link: 'https://arxiv.org/abs/2111.06116',
                type: 'Preprint',
                date: 'Nov 2021',
                authors: [
                    {name: 'Erika Halme', },
                    {name: 'Mamia Agbese', },
                    {name: 'Hanna-Kaisa Alanen', portrait: require('../Images/Hanna-Kaisa-Alanen-portrait.jpeg')},
                    {name: 'Jani Antikainen', },
                    {name: 'Marianna Jantunen', portrait: require('../Images/Marianna-Jantunen-portrait.jpeg')},
                    {name: 'Arif Ali Khan', portrait: require('../Images/arif.jpg')},
                    {name: 'Kai-Kristian Kemell', },
                    {name: 'Ville Vakkuri', },
                    {name: 'Pekka Abrahamsson', portrait: require('../Images/Pekka-Abrahamsson-portrait.jpeg')},
                ],
                abstract: 'Digitalization and Smart systems are part of our everyday lives today. So far the development has been rapid and all the implications that comes after the deployment has not been able to foresee or even assess during the development, especially when ethics or trustworthiness is concerned. Artificial Intelligence (AI) and Autonomous Systems (AS) are the direction that software systems are taking today. It is witnessed in banks, stores, internet and it is proceeding to transportation as well as on traveling. Autonomous maritime industry has also taking this direction when taking under development in digitalization on fairway and port terminals. AI ethics has advanced profoundly since the machine learning develop during the last decade and is now being implemented in AI development and workflow of software engineers. It is not an easy task and tools are needed to make the ethical assessment easier. This paper will review a research in an industrial setting, where Ethically Aligned Design practice, Ethical User Stories are used to transfer ethical requirements to ethical user stories to form practical solutions for project use. This project is in the field of maritime industry and concentrates on digitalization of port terminals and this particular paper focuses on the passenger flow. Results are positive towards the practice of Ethical User Stories, drawn from a large empirical data set.'
            },
            {
                title: 'Ethical User stories: Industrial study',
                link: 'https://www.researchgate.net/publication/359282196_Ethical_User_stories_Industrial_study',
                type: 'Conference Paper',
                date: 'Mar 2022',
                authors: [
                    {name: 'Erika Halme', },
                    {name: 'Mamia Agbese', },
                    {name: 'Jani Antikainen', },
                    {name: 'Hanna-Kaisa Alanen', portrait: require('../Images/Hanna-Kaisa-Alanen-portrait.jpeg')},
                    {name: 'Marianna Jantunen', portrait: require('../Images/Marianna-Jantunen-portrait.jpeg')},
                    {name: 'Arif Ali Khan', portrait: require('../Images/arif.jpg')},
                    {name: 'Kai-Kristian Kemell', },
                    {name: 'Ville Vakkuri', },
                    {name: 'Pekka Abrahamsson', portrait: require('../Images/Pekka-Abrahamsson-portrait.jpeg')},
                ],
                abstract: 'In Port terminals a progressive change is underway in digitalizing traditional systems to SMART systems with the aid of AI. This study follows one of such progressions, the SMARTER project. SMARTER is a sub research and development project of the Sea for Value program of DIMECC company, Finland to create replicable models for digitalization for future terminals which involves the use of AI enabled tools. AI and Autonomous Systems (AS) are the direction that software systems are taking today. But due to ethical challenges involved in the use of AI systems and increased emphasis on ethical practices in the use and design of AI systems, our study provides an ethical angle, Ethical User Stories (EUS). We use an ethically aligned design tool the ECCOLA method to transfer ethical requirements into EUS for non-functional requirements for an aspect of the logistics system, passenger flow. Over the span of six months, 125 EUS using the ECCOLA method were collected through a series of workshops for the passenger flow use case and the findings are revealed in this paper. This project is in the field of maritime industry and concentrates on digitalization of port terminals and this particular paper focuses on the passenger flow. Results are positive towards the practice of Ethical User Stories.'
            }
        ]
    },
    {
        link: 'iot',
        icon: "icon-IoT",
        title: "Software Engineering for Internet of Things (IoT)",
        description: "The project provides an understanding of the most important development process tasks and informs both software engineering practitioners and researchers of the challenges and recommendations related to the development of the next generation of IoT systems.",
        descriptionHTML: <>
            <svg><use href={`#icon-IoT`}></use></svg>
            <h2>Software Engineering for <span className="logocolor">Internet of Things </span>(IoT)</h2>
            <p>The project provides an understanding of <span className="logocolor">the most important development process tasks and informs</span> both software engineering practitioners and researchers of the challenges and recommendations related to <span className="logocolor">the development of the next generation of IoT systems.</span></p>
        </>,
        studies: [
            {
                title: 'Software Engineering for Internet of Things: The Practitioners\' Perspective',
                link: 'https://arxiv.org/abs/2102.10708',
                type: 'Preprint',
                date: 'Feb 2021',
                authors: [
                    {name: 'Mahdi Fahmideh', portrait: require('../Images/Mahdi-Fahmideh-portrait.jpeg')},
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Ali Behnaz', portrait: require('../Images/Ali-Behnaz-portrait.jpeg')},
                    {name: 'John Grundy', portrait: require('../Images/John-Grundy-portrait.jpeg')},
                    {name: 'Willy Susilo', portrait: require('../Images/Willy-Susilo-portrait.jpeg')},
                ],
                abstract: 'Internet of Things based systems (IoT systems for short) are becoming increasingly popular across different industrial domains and their development is rapidly increasing to provide value-added services to end-users and citizens. Little research to date uncovers the core development process lifecycle needed for IoT systems, and thus software engineers find themselves unprepared and unfamiliar with this new genre of system development. To ameliorate this gap, we conducted a mixed quantitative and qualitative research study where we derived a conceptual process framework from the extant literature on IoT, that identifies 27 key tasks for incorporating into development processes for IoT systems. The framework was then validated by means of a survey of 127 IoT systems practitioners developers from 35 countries across 6 continents with 15 different industry backgrounds. Our research provides an understanding of the most important development process tasks and informs both software engineering practitioners and researchers of the challenges and recommendations related to the development of next generation of IoT systems.'
            },
            {
                title: 'Software Engineering for IoT-Driven Data Analytics Applications',
                link: 'https://arxiv.org/abs/2103.11192',
                type: 'Article',
                date: 'Mar 2021',
                authors: [
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Mahdi Fahmideh', portrait: require('../Images/Mahdi-Fahmideh-portrait.jpeg')},
                    {name: 'Ahmed B. Altamimi', },
                    {name: 'Iyad Katib', portrait: require('../Images/Iyad-Katib-portrait.jpeg')},
                    {name: 'Aiiad Albeshri', portrait: require('../Images/Aiiad-Albeshri-portrait.jpeg')},
                    {name: 'Abdulrahman Alreshidi', },
                    {name: 'Adwan Alownie Alanazi', },
                    {name: 'Rashid Mehmood', portrait: require('../Images/Rashid-Mehmood-portrait.jpeg')},
                ],
                abstract: 'Internet of Things Driven Data Analytics (IoT-DA) has the potential to excel data-driven operationalisation of smart environments. However, limited research exists on how IoT-DA applications are designed, implemented, operationalised, and evolved in the context of software and system engineering life-cycle. This article empirically derives a framework that could be used to systematically investigate the role of software engineering (SE) processes and their underlying practices to engineer IoT-DA applications. First, using existing frameworks and taxonomies, we develop an evaluation framework to evaluate software processes, methods, and other artefacts of SE for IoT-DA. Secondly, we perform a systematic mapping study to qualitatively select 16 processes (from academic research and industrial solutions) of SE for IoT-DA. Thirdly, we apply our developed evaluation framework based on 17 distinct criterion (a.k.a. process activities) for fine-grained investigation of each of the 16 SE processes. Fourthly, we apply our proposed framework on a case study to demonstrate development of an IoT-DA healthcare application. Finally, we highlight key challenges, recommended practices, and the lessons learnt based on framework’s support for process-centric software engineering of IoT-DA. The results of this research can facilitate researchers and practitioners to engineer emerging and next-generation of IoT-DA software applications.'
            }
        ]
    },
    {
        link: 'block-chain',
        icon: "icon-block-chain",
        title: "Software Engineering for Blockchain based systems",
        description: "In this project, we presented a systematic literature review of the state-of-the-art in software engineering for blockchain-based software systems. We characterize the engineering of this class of systems based on the key aspects of theoretical foundations, processes, models, and roles. Based on these aspects, we present a rich repertoire of development tasks, design principles, models, roles, challenges, and resolution techniques that are incorporated into the development process of blockchain-based software systems.",
        descriptionHTML: <>
            <svg><use href={`#icon-block-chain`}></use></svg>
            <h2>Software Engineering for <span className="logocolor">Blockchain</span> based systems</h2>
            <p>In this project, we presented a systematic literature review of <span className="logocolor">the state-of-the-art in software engineering for blockchain-based software systems.</span> We characterize the engineering of this class of systems based on the key aspects of theoretical foundations, processes, models, and roles. Based on these aspects, <span className="logocolor">we present a rich repertoire of development tasks, design principles, models, roles, challenges, and resolution techniques that are incorporated into the development process of blockchain-based software systems.</span> </p>
        </>,
        studies: [
            {
                title: 'Software Engineering for Blockchain Based Software Systems: Foundations, Survey, and Future Directions',
                link: 'https://arxiv.org/abs/2105.01881',
                type: 'Preprint',
                date: 'May 2021',
                authors: [
                    {name: 'Mahdi Fahmideh', portrait: require('../Images/Mahdi-Fahmideh-portrait.jpeg')},
                    {name: 'John Grundy', portrait: require('../Images/John-Grundy-portrait.jpeg')},
                    {name: 'Aakash Ahmed', },
                    {name: 'Jun Shen', },
                    {name: 'Jun Yan', },
                    {name: 'Davoud Mougouei', portrait: require('../Images/Davoud-Mougouei-portrait.jpeg')},
                    {name: 'Peng Wang', },
                    {name: 'Aditya Ghose', },
                    {name: 'Anuradha Gunawardana', },
                    {name: 'Uwe Aickelin', portrait: require('../Images/Uwe-Aickelin-portrait.jpeg')},
                    {name: 'Babak Abedin', portrait: require('../Images/Babak-Abedin-portrait.jpeg')},
                ],
                abstract: 'Many scientific and practical areas have shown increasing interest in reaping the benefits of blockchain technology to empower software systems. However, the unique characteristics and requirements associated with Blockchain Based Software (BBS) systems raise new challenges across the development lifecycle that entail an extensive improvement of conventional software engineering. This article presents a systematic literature review of the state-of-the-art in BBS engineering research from a software engineering perspective. We characterize BBS engineering from the theoretical foundations, processes, models, and roles and discuss a rich repertoire of key development activities, principles, challenges, and techniques. The focus and depth of this survey not only gives software engineering practitioners and researchers a consolidated body of knowledge about current BBS development but also underpins a starting point for further research in this field.'
            }
        ]
    },
]

export default projects