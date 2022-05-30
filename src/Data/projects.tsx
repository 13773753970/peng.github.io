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
                title: 'Towards Process Centered Architecting for Quantum Software Systems',
                link: 'https://www.researchgate.net/publication/360860763_Towards_Process_Centered_Architecting_for_Quantum_Software_Systems',
                type: 'Conference Paper',
                date: 'May 2022',
                authors: [
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Arif Ali Khan', portrait: require('../Images/Arif-Ali-Khan-portrait.jpeg')},
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Mahdi Fahmideh', portrait: require('../Images/Mahdi-Fahmideh-portrait.jpeg')},
                    {name: 'Tommi Mikkonen', },
                ],
                abstract: 'Quantum Software Engineering (QSE) is a recent trend-focused on unifying the principles of quantum mechanics and practices of software engineering-to design, develop, validate , and evolve quantum age software systems and applications. Software architecture for quantum computing (a.k.a. quantum software architectures (QSA)) supports the design, development, and maintenance etc. phases of quantum software systems using architectural components and connectors. QSA as a new genre of software architecture is used to design and implement quantum software, however, lack of process support for QSAs hinders any systematic and incremental development of architecture-centric solutions. Process-centered architecting is vital to enable quantum software designers and developers to map the operations of Qubits to architectural components and connectors in an incremental and systematic way. This research aims to explore the role of QSAs by investigating (i) architectural process having architecting activities, and (ii) human roles that can exploit available tools to automate and customise architecture-centric development. We have used the systematic review approach to identify a total of 589 published studies (e.g., investigating reference architectures and architectural solutions) and qualitatively selected 32 of them. Based on a review of 32 studies, we identified 05 architecting activities to derive QSA process, analysed 11 available tool prototypes, and 4 human roles that enable or enrich process-centered architecting of quantum software. Case study based approach demonstrates the architectural process to design a quantum key distribution solution. This research streamlines the role of software architectures and aims to facilitate knowledge transfer-enabling researchers and practitioners to address challenges related to quantum age software architectures.'
            },
            {
                title: 'Software Architecture for Quantum Computing Systems - A Systematic Review',
                link: 'https://arxiv.org/abs/2202.05505',
                type: 'Preprint',
                date: 'Feb 2022',
                authors: [
                    {name: 'Arif Ali Khan', portrait: require('../Images/Arif-Ali-Khan-portrait.jpeg')},
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
                date: 'September 2021',
                authors: [
                    {name: 'Mahdi Fahmideh', portrait: require('../Images/Mahdi-Fahmideh-portrait.jpeg')},
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Arif Ali Khan', portrait: require('../Images/Arif-Ali-Khan-portrait.jpeg')},
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
                    {name: 'Arif Ali Khan', portrait: require('../Images/Arif-Ali-Khan-portrait.jpeg')},
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
                    {name: 'Arif Ali Khan', portrait: require('../Images/Arif-Ali-Khan-portrait.jpeg')},
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
    {
        link: 'microservices',
        icon: "icon-microservices",
        title: 'Software Architecture Design of Microservices Systems',
        description: 'Microservices Architecture (MSA) has gained immense popularity in the past few years for designing, developing, and deploying software systems as a suite of small granular services that can be integrated through lightweight communication mechanisms. Many organizations have adopted MSA to improve system availability, scalability, autonomy, development agility, and delivery. However, existing literature reports that MSA brings unique challenges (e.g., defining the boundaries of microservices, managing microservices complexity, addressing security concerns) for software organizations in microservices system design, monitoring, and testing, specifically in the context of certain development practices (e.g., DevOps). To explore and address these challenges, this project has established two main objectives: First, to identify and organize the evidence from literature, industry, and open source projects on MSA in DevOps, design of microservices systems, and nature of issues in microservices systems. Second, using the identified and organized knowledge to develop taxonomies and decision models for assisting practitioners to address various types of issues in architecture design of microservices systems.',
        descriptionHTML: <>
            <svg><use href={`#icon-microservices`}></use></svg>
            <h2>Software Architecture Design of <span className="logocolor">Microservices</span> Systems</h2>
            <p><span className="logocolor">Microservices Architecture (MSA)</span> has gained immense popularity in the past few years for designing, developing, and deploying software systems as a suite of small granular services that can be integrated through lightweight communication mechanisms. 
            Many organizations have adopted MSA to improve system availability, scalability, autonomy, development agility, and delivery. 
            <span className="logocolor">However, existing literature reports that MSA brings unique challenges (e.g., defining the boundaries of microservices, managing microservices complexity, addressing security concerns) for software organizations in microservices system design, monitoring, and testing, specifically in the context of certain development practices (e.g., DevOps).</span> 
            To explore and address these challenges, this project has established two main objectives: 
            First, to identify and organize the evidence from literature, industry, and open source projects on MSA in DevOps, design of microservices systems, and nature of issues in microservices systems. 
            Second, using the identified and organized knowledge to develop taxonomies and decision models for assisting practitioners to address various types of issues in architecture design of microservices systems.</p>
        </>,
        studies: [
            {
                title: 'A Systematic Mapping Study on Microservices Architecture in DevOps',
                link: 'https://arxiv.org/abs/2008.07729',
                type: 'Preprint',
                date: 'August 2020',
                authors: [
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Mojtaba Shahin', portrait: require('../Images/Mojtaba-Shahin-portrait.jpeg')},
                ],
                abstract: 'Context: Applying Microservices Architecture (MSA) in DevOps has received significant attention in recent years. However, there exists no comprehensive review of the state of research on this topic. Objective: This work aims to systematically identify, analyze, and classify the literature on MSA in DevOps. Method: A Systematic Mapping Study (SMS) has been conducted on the literature published between January 2009 and July 2018. Results: Forty-seven studies were finally selected and the key results are: (1) Three themes on the research on MSA in DevOps are "microservices development and operations in DevOps", "approaches and tool support for MSA based systems in DevOps", and "MSA migration experiences in DevOps". (2) 24 problems with their solutions regarding implementing MSA in DevOps are identified. (3) MSA is mainly described by using boxes and lines. (4) Most of the quality attributes are positively affected when employing MSA in DevOps. (5) 50 tools that support building MSA based systems in DevOps are collected. (6) The combination of MSA and DevOps has been applied in a wide range of application domains. Conclusions: The results and findings will benefit researchers and practitioners to conduct further research and bring more dedicated solutions for the issues of MSA in DevOps.'
            },
            {
                title: 'Design, Monitoring, and Testing of Microservices Systems: The Practitioners\' Perspective',
                link: 'https://arxiv.org/abs/2108.03384',
                type: 'Preprint',
                date: 'August 2021',
                authors: [
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Mojtaba Shahin', portrait: require('../Images/Mojtaba-Shahin-portrait.jpeg')},
                    {name: 'Amleto Di Salle', portrait: require('../Images/Amleto-Di-Salle-portrait.jpeg')},
                    {name: 'Gastón Márquez', portrait: require('../Images/Gaston-Marquez-portrait.jpeg')},
                ],
                abstract: 'Context: Microservices Architecture (MSA) has received significant attention in the software industry. However, little empirical evidence exists on design, monitoring, and testing of microservices systems. Objective: This research aims to gain a deep understanding of how microservices systems are designed, monitored, and tested in the industry. Method: A mixed-methods study was conducted with 106 survey responses and 6 interviews from microservices practitioners. Results: The main findings are: (1) a combination of domain-driven design and business capability is the most used strategy to decompose an application into microservices, (2) over half of the participants used architecture evaluation and architecture implementation when designing microservices systems, (3) API gateway and Backend for frontend patterns are the most used MSA patterns, (4) resource usage and load balancing as monitoring metrics, log management and exception tracking as monitoring practices are widely used, (5) unit and end-to-end testing are the most used testing strategies, and (6) the complexity of microservices systems poses challenges for their design, monitoring, and testing, for which there are no dedicated solutions. Conclusions: Our findings reveal that more research is needed to (1) deal with microservices complexity at the design level, (2) handle security in microservices systems, and (3) address the monitoring and testing challenges through dedicated solutions.'
            },
            {
                title: 'Automated Identification of Security Discussions in Microservices Systems: Industrial Surveys and Experiments',
                link: 'https://arxiv.org/abs/2107.10059',
                type: 'Preprint',
                date: 'July 2021',
                authors: [
                    {name: 'Ali Rezaei Nasab', portrait: require('../Images/Ali-Rezaei-Nasab-portrait.jpeg')},
                    {name: 'Mojtaba Shahin', portrait: require('../Images/Mojtaba-Shahin-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Ehsan Basiri', portrait: require('../Images/Ehsan-Basiri-portrait.jpeg')},
                    {name: 'Seyed Ali Hoseyni Raviz', },
                    {name: 'Hourieh Khalajzadeh', portrait: require('../Images/Hourieh-Khalajzadeh-portrait.jpeg')},
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Amine Naseri', },
                ],
                abstract: 'Lack of awareness and knowledge of microservices-specific security challenges and solutions often leads to ill-informed security decisions in microservices system development. We claim that identifying and leveraging security discussions scattered in existing microservices systems can partially close this gap. We define security discussion as "a paragraph from developer discussions that includes design decisions, challenges, or solutions relating to security". We first surveyed 67 practitioners and found that securing microservices systems is a unique challenge and that having access to security discussions is useful for making security decisions. The survey also confirms the usefulness of potential tools that can automatically identify such security discussions. We developed fifteen machine/deep learning models to automatically identify security discussions. We applied these models on a manually constructed dataset consisting of 4,813 security discussions and 12,464 non-security discussions. We found that all the models can effectively identify security discussions: an average precision of 84.86%, recall of 72.80%, F1-score of 77.89%, AUC of 83.75% and G-mean 82.77%. DeepM1, a deep learning model, performs the best, achieving above 84% in all metrics and significantly outperforms three baselines. Finally, the practitioners\' feedback collected from a validation survey reveals that security discussions identified by DeepM1 have promising applications in practice.'
            },
            {
                title: 'On the Nature of Issues in Five Open Source Microservices Systems: An Empirical Study',
                link: 'https://arxiv.org/abs/2104.12192',
                type: 'Preprint',
                date: 'April 2021',
                authors: [
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Mojtaba Shahin', portrait: require('../Images/Mojtaba-Shahin-portrait.jpeg')},
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Ali Rezaei Nasab', portrait: require('../Images/Ali-Rezaei-Nasab-portrait.jpeg')},
                ],
                abstract: 'Due to its enormous benefits, the research and industry communities have shown an increasing interest in the Microservices Architecture (MSA) style over the last few years. Despite this, there is a limited evidence-based and thorough understanding of the types of issues (e.g., faults, errors, failures, mistakes) faced by microservices system developers and causes that trigger the issues. Such evidence-based understanding of issues and causes is vital for long-term, impactful, and quality research and practice in the MSA style. To that end, we conducted an empirical study on 1,345 issue discussions extracted from five open source microservices systems hosted on GitHub. Our analysis led to the first of its kind taxonomy of the types of issues in open source microservices systems, informing that the problems originating from Technical debt (321, 23.86%), Build (145, 10.78%), Security (137, 10.18%), and Service execution and communication (119, 8.84%) are prominent. We identified that "General programming errors", "Poor security management", "Invalid configuration and communication", and "Legacy versions, compatibility and dependency" are the predominant causes for the leading four issue categories. Study results streamline a taxonomy of issues, their mapping with underlying causes, and present empirical findings that could facilitate research and development on emerging and next-generation microservices systems.'
            },
            {
                title: 'Software Architecture for Quantum Computing Systems - A Systematic Review',
                link: 'https://arxiv.org/abs/2202.05505',
                type: 'Preprint',
                date: 'February 2022',
                authors: [
                    {name: 'Arif Ali Khan', portrait: require('../Images/Arif-Ali-Khan-portrait.jpeg')},
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Mahdi Fahmideh', portrait: require('../Images/Mahdi-Fahmideh-portrait.jpeg')},
                    {name: 'Tommi Mikkonen', },
                    {name: 'Pekka Abrahamsson', portrait: require('../Images/Pekka-Abrahamsson-portrait.jpeg')},
                ],
                abstract: 'Quantum computing systems rely on the principles of quantum mechanics to perform a multitude of computationally challenging tasks more efficiently than their classical counterparts. The architecture of software-intensive systems can empower architects who can leverage architecture-centric processes, practices, description languages, etc., to model, develop, and evolve quantum computing software (quantum software for short) at higher abstraction levels. We conducted a systematic literature review (SLR) to investigate (i) architectural process, (ii) modeling notations, (iii) architecture design patterns, (iv) tool support, and (iv) challenging factors for quantum software architecture. Results of the SLR indicate that quantum software represents a new genre of software-intensive systems; however, existing processes and notations can be tailored to derive the architecting activities and develop modeling languages for quantum software. Quantum bits (Qubits) mapped to Quantum gates (Qugates) can be represented as architectural components and connectors that implement quantum software. Tool-chains can incorporate reusable knowledge and human roles (e.g., quantum domain engineers, quantum code developers) to automate and customize the architectural process. Results of this SLR can facilitate researchers and practitioners to develop new hypotheses to be tested, derive reference architectures, and leverage architecture-centric principles and practices to engineer emerging and next generations of quantum software.'
            },
            {
                title: 'Decision Models for Selecting Patterns and Strategies in Microservices Systems and their Evaluation by Practitioners',
                link: 'https://arxiv.org/abs/2201.05825',
                type: 'Preprint',
                date: 'January 2022',
                authors: [
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Mojtaba Shahin', portrait: require('../Images/Mojtaba-Shahin-portrait.jpeg')},
                    {name: 'Arif Ali Khan', portrait: require('../Images/Arif-Ali-Khan-portrait.jpeg')},
                    {name: 'Gastón Márquez', portrait: require('../Images/Gaston-Marquez-portrait.jpeg')},
                ],
                abstract: 'Researchers and practitioners have recently proposed many Microservices Architecture (MSA) patterns and strategies covering various aspects of microservices system life cycle, such as service design and security. However, selecting and implementing these patterns and strategies can entail various challenges for microservices practitioners. To this end, this study proposes decision models for selecting patterns and strategies covering four MSA design areas: application decomposition into microservices, microservices security, microservices communication, and service discovery. We used peer-reviewed and grey literature to identify the patterns, strategies, and quality attributes for creating these decision models. To evaluate the familiarity, understandability, completeness, and usefulness of the decision models, we conducted semi-structured interviews with 24 microservices practitioners from 12 countries across five continents. Our evaluation results show that the practitioners found the decision models as an effective guide to select microservices patterns and strategies.'
            },
            {
                title: 'A Decision Model for Selecting Patterns and Strategies to Decompose Applications into Microservices',
                link: 'https://arxiv.org/abs/2110.03889',
                type: 'Chapter',
                date: 'November 2021',
                authors: [
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Gastón Márquez', portrait: require('../Images/Gaston-Marquez-portrait.jpeg')},
                    {name: 'Mojtaba Shahin', portrait: require('../Images/Mojtaba-Shahin-portrait.jpeg')},
                    {name: 'Arif Ali Khan', portrait: require('../Images/Arif-Ali-Khan-portrait.jpeg')},
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                ],
                abstract: 'Microservices Architecture (MSA) style is a promising design approach to develop software applications consisting of multiple small and independently deployable services. Over the past few years, researchers and practitioners have proposed many MSA patterns and strategies covering various aspects of microservices design, such as application decomposition. However, selecting appropriate patterns and strategies can entail various challenges for practitioners. To this end, this study proposes a decision model for selecting patterns and strategies to decompose applications into microservices. We used peer-reviewed and grey literature to collect the patterns, strategies, and quality attributes for creating this decision model.'
            },
            {
                title: 'On the Nature of Issues in Five Open Source Microservices Systems: An Empirical Study',
                link: 'https://arxiv.org/abs/2104.12192',
                type: 'Preprint',
                date: 'April 2021',
                authors: [
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Mojtaba Shahin', portrait: require('../Images/Mojtaba-Shahin-portrait.jpeg')},
                    {name: 'Aakash Ahmad', portrait: require('../Images/Aakash-Ahmad-portrait.jpeg')},
                    {name: 'Ali Rezaei Nasab', portrait: require('../Images/Ali-Rezaei-Nasab-portrait.jpeg')},
                ],
                abstract: 'Due to its enormous benefits, the research and industry communities have shown an increasing interest in the Microservices Architecture (MSA) style over the last few years. Despite this, there is a limited evidence-based and thorough understanding of the types of issues (e.g., faults, errors, failures, mistakes) faced by microservices system developers and causes that trigger the issues. Such evidence-based understanding of issues and causes is vital for long-term, impactful, and quality research and practice in the MSA style. To that end, we conducted an empirical study on 1,345 issue discussions extracted from five open source microservices systems hosted on GitHub. Our analysis led to the first of its kind taxonomy of the types of issues in open source microservices systems, informing that the problems originating from Technical debt (321, 23.86%), Build (145, 10.78%), Security (137, 10.18%), and Service execution and communication (119, 8.84%) are prominent. We identified that "General programming errors", "Poor security management", "Invalid configuration and communication", and "Legacy versions, compatibility and dependency" are the predominant causes for the leading four issue categories. Study results streamline a taxonomy of issues, their mapping with underlying causes, and present empirical findings that could facilitate research and development on emerging and next-generation microservices systems.'
            },
            {
                title: 'Testing Microservices Architecture-Based Applications: A Systematic Mapping Study',
                link: 'https://www.researchgate.net/publication/344679617_Testing_Microservices_Architecture-Based_Applications_A_Systematic_Mapping_Study',
                type: 'Conference Paper',
                date: 'October 2020',
                authors: [
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                    {name: 'Gastón Márquez', portrait: require('../Images/Gaston-Marquez-portrait.jpeg')},
                    {name: 'Amleto Di Salle', portrait: require('../Images/Amleto-Di-Salle-portrait.jpeg')},
                ],
                abstract: 'Microservices is an architectural style that provides several benefits to develop applications as small, independent, and modular services. Building Microservices Architecture (MSA)-based applications is immensely supported by using software testing fundamentals. With the increasing interest in the development of MSA-based applications, it is important to systematically identify, analyze, and classify the publication trends, research themes, approaches, tools, and challenges in the context of testing MSA-based applications. The search yielded 2,481 articles, and 33 articles were finally selected as the primary studies with snowballing. The key findings are that (i) 5 research themes characterize testing approaches in MSA-based applications; (ii) integration and unit testing are the most popular testing approaches; and (iii) addressing the challenges in automated and inter-communication testing is gaining the interest of the community. Additionally, it emerges that there is a lack of dedicated tools to support testing for MSA-based applications, and the reasons and solutions behind the challenges in testing MSA-based applications need to be further explored.'
            },
            {
                title: 'Microservices Architecture in DevOps',
                link: 'https://www.researchgate.net/publication/322986199_Microservices_Architecture_in_DevOps',
                type: 'Conference Paper',
                date: 'December 2017',
                authors: [
                    {name: 'Muhammad Waseem', portrait: require('../Images/Muhammad-Waseem-portrait.jpeg')},
                    {name: 'Peng Liang', portrait: require('../Images/Peng-Liang-portrait.jpeg')},
                ],
                abstract: 'This doctoral research proposal is designed to address the challenges on employing microservices architecture (MSA) in DevOps. These two practices are relatively recent trends on the crowded street of software engineering paradigms. We believe that the coexistence of these practices may bring new challenges for architects about making and implementing decisions of microservices in DevOps. We plan to gain a deep understanding of the challenges/solutions, architecture description, migration, refactoring, and evolution in MSA with DevOps. Our expected outcome would be: (i) a systematic mapping study on MSA in DevOps, (ii) an evidence based framework for synthesizing MSA challenges/solutions in DevOps, (iii) recommendations for documenting MSA in DevOps based on industrial practices, (iv) a migration process from monolithic applications/architecture to MSA in DevOps, and (v) empirical reports on MSA refactoring and evolution in DevOps.'
            }
        ]
    }
]

export default projects