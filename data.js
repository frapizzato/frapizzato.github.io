const portfolioData = {
    personal: {
        name: "Francesco Pizzato",
        title: "Cloud Security Researcher & PhD Student",
        affiliation: "Politecnico di Torino<br>DAUIN Department",
        photoUrl: "profile.jpg",
        email: "fpizzato997@gmail.com",
        links: {
            scholar: "https://scholar.google.com/citations?user=Rb06NmIAAAAJ&hl=en",
            github: "https://github.com/frapizzato",
            linkedin: "https://linkedin.com/in/francesco-pizzato-19831a151/",
            cv: "cv-pizzato.pdf",
            poster: "presentations/phdposter_2025.pdf"
        }
    },
    about: [
        "I am a PhD Student in Computer and Control Engineering at <strong>Politecnico di Torino (DAUIN)</strong>. I work on network and cloud security automation, turning high-level security intents into concrete, enforceable configurations and formally ensuring they work as intended.",
        "My current work spans Kubernetes policy refinement and validation (e.g., Network Policies and RBAC), scalable firewall reconfiguration, constraint-based security analysis, and reactive security updates driven by monitoring/IDS signals.",
        "I have gained international research experience through a visiting period at <strong>Telefónica Research</strong> in Spain and collaborations with national and European research projects."
    ],
    researchKeywords: [
        { word: "Cloud Security", weight: 5 },
        { word: "Network Automation", weight: 5 },
        { word: "Formal Verification", weight: 4 },
        { word: "Cyberattack Mitigation", weight: 4 },
        { word: "Firewall Configuration", weight: 4 },
        { word: "Policy Refinement", weight: 4 },
        { word: "Constraint-based Security Analysis", weight: 4 },
        { word: "Kubernetes", weight: 3 },
        { word: "eBPF", weight: 3 },
        { word: "Security Orchestration", weight: 3 },
        { word: "Zero Trust", weight: 3 },
        { word: "Serverless", weight: 2 },
        { word: "Intent-based Networking", weight: 3 }
    ],
    skills: [
        {  category: "Programming Languages", items: ["Java", "Python", "C", "Bash", "JavaScript"] },
        { category: "Frameworks & Technologies", items: ["Kubernetes", "Docker", "eBPF", "Linux Systems", "OpenFaaS", "Formal Verification (Z3)", "Node.js", "React"] }
    ],
    experience: [
        {
            date: "Nov 2023 - Present",
            title: "PhD Student",
            organization: "Politecnico di Torino",
            description: "Conduct research in network security automation and cloud security, with a focus on formal verification of cloud security configurations and optimized security reconfiguration in dynamic environments. Supervise and co-manage 10+ Master's thesis projects."
        },
        {
            date: "Sept 2024 - Present",
            title: "Teaching Assistant",
            organization: "Politecnico di Torino",
            description: "Delivered 80+ hours of laboratory teaching for Master's-level courses in distributed systems, data protection, network security, and cloud technologies. Designed and improved hands-on activities on Kubernetes administration, X.509 certificates, RBAC, monitoring, and distributed communication protocols."
        },
        {
            date: "Sept 2025 - Jan 2026",
            title: "Course Collaborator",
            organization: "UNICOLLEGE",
            description: "Contributed to the Bachelor's course 'Analisi del cybercrime e security', including student project review and evaluation on cybercrime, legal aspects, and cybersecurity topics."
        },
        {
            date: "May 2024 - Nov 2024",
            title: "Research Intern",
            organization: "Telefónica Research",
            description: "Designed and implemented an eBPF-based authorization mechanism for serverless workflows using information flow control techniques, reducing attack surface and improving system latency by approximately 10% compared to prior state-of-the-art solutions."
        },
        {
            date: "Jun 2023 - Nov 2023",
            title: "Research Scholarship",
            organization: "Politecnico di Torino",
            description: "Extended Master's thesis work on cloud security and firewall automation toward publication and the initial definition of PhD research activities."
        }
    ],
    education: [
        {
            date: "Nov 2023 - Expected Nov 2026",
            title: "Ph.D. in Computer and Control Engineering",
            organization: "Politecnico di Torino",
            description: "Expected completion in November 2026."
        },
        {
            date: "Mar 2020 - Apr 2023",
            title: "Master's Degree in Computer Engineering (Cybersecurity Track)",
            organization: "Politecnico di Torino",
            description: "Final grade: 110/110."
        },
        {
            date: "Aug 2016 - Mar 2020",
            title: "Bachelor's Degree in Computer Engineering",
            organization: "Politecnico di Torino",
            description: "Final grade: 101/110."
        }
    ],
    projects: [
        {
            title: "Janus",
            description: "An eBPF-based authorization layer for serverless workflows, designed to enforce information-flow policies close to the runtime boundary without pushing security logic into application code.",
            problem: "Serverless workflows often rely on coarse-grained trust between functions and platform services. When a step is compromised, excessive permissions and implicit data flows can enlarge the attack surface.",
            solution: "Janus introduces an eBPF-based authorization mechanism that enforces information-flow constraints close to the runtime boundary, without requiring each function to embed custom security logic.",
            objective: "Reduce the attack surface of serverless workflows while keeping authorization lightweight enough for latency-sensitive function chains.",
            approach: {
                text: "The prototype combines Linux/eBPF instrumentation, serverless runtime integration, and policy checks derived from information-flow control. The implementation is currently private and will be disclosed once the related publication is accepted; the GitHub button is kept as the future public entry point."
            },
            impact: [
                "~10% latency improvement compared to the prior state-of-the-art baseline in the prototype evaluation.",
                "Reduced workflow attack surface by constraining which serverless steps can access sensitive resources.",
                "Connects kernel-level instrumentation, authorization design, and experimental systems evaluation."
            ],
            references: [
                { text: "Paper under submission - citation placeholder" }
            ],
            links: [
                { text: "Source Code", icon: "fab fa-github", url: "https://github.com/frapizzato/janus", type: "badge-code" }
            ]
        },
        {
            title: "REACT-Verefoo",
            description: "A reactive extension of VEREFOO for autonomous cyberattack mitigation: it computes formally correct firewall changes for evolving security requirements instead of regenerating the whole distributed firewall configuration from scratch.",
            problem: "In autonomous attack reaction, new filtering requirements may arrive frequently and must be deployed quickly. Recomputing the complete distributed firewall configuration from scratch is formally sound but too expensive for short-lived mitigation loops.",
            solution: "REACT-Verefoo narrows the synthesis problem to the parts of the network affected by added or changed requirements, while keeping the remaining configuration fixed and preserving formal correctness.",
            objective: "Compute optimized, formally correct firewall reconfigurations within short reaction times after an IDS or monitoring system raises a new mitigation requirement.",
            approach: {
                text: "The approach identifies the minimum reconfiguration area induced by the target Network Security Requirements, then formulates a MaxSMT problem with hard constraints for correctness and soft constraints for resource minimization and configuration preservation.",
                images: [
                    { src: "assets/projects/react-paper-approach.png", alt: "REACT-Verefoo approach diagram", caption: "General schema of the reconfiguration approach." }
                ]
            },
            impact: [
                "In the largest evaluated scenario, optimized reconfiguration took 2.529 s with 90% requirements kept, versus 34.343 s for complete reconfiguration (~13.6x faster).",
                "The change-identification step added only 0-100 ms across validation runs, with most executions below 10 ms.",
                "Validated on synthetic networks up to 140 endpoints, 30 network security requirements, and 25 NATs."
            ],
            impactImages: [
                { src: "assets/projects/react-paper-performance.png", alt: "REACT-Verefoo performance test graph", caption: "Performance comparison across increasing network sizes." },
                { src: "assets/projects/react-paper-optimality.png", alt: "REACT-Verefoo optimality comparison graph", caption: "Optimality comparison under different preservation/resource trade-offs." }
            ],
            references: [
                { text: "F. Pizzato et al., Automatic and optimized firewall reconfiguration, IEEE/IFIP NOMS 2024.", url: "https://doi.org/10.1109/NOMS59830.2024.10575212" },
                { text: "D. Bringhenti et al., Autonomous attack mitigation through firewall reconfiguration, IJNM 2025.", url: "https://doi.org/10.1002/nem.2307" }
            ],
            links: [
                { text: "Source Code", icon: "fab fa-github", url: "https://github.com/netgroup-polito/verefoo", type: "badge-code" }
            ]
        },
        {
            title: "Secure Border Controller",
            description: "An intent-driven Kubernetes controller for workload isolation in the cloud-edge continuum, translating high-level tenant/provider communication intents into enforceable Network Policies.",
            problem: "In continuum scenarios, workloads may be offloaded across administrative domains. Consumers and providers need to agree on allowed communications without manually writing low-level Kubernetes Network Policies for every peering.",
            solution: "Secure Border Controller lets tenants express private, request, and authorization intents, harmonizes them during resource acquisition, and translates the resulting policy into enforceable Kubernetes Network Policies.",
            objective: "Automate zero trust and least privilege network isolation for multi-tenant, multi-domain Kubernetes environments participating in cloud-edge resource sharing.",
            approach: {
                text: "The designed workflow exchanges consumer and provider intents, resolves discordances through harmonization, translates the accepted intent set, and enforces the resulting network policies through the Kubernetes API.",
                images: [
                    { src: "assets/projects/sbc-jnsm-architecture.png", alt: "Secure Border Controller architecture diagram", caption: "Secure Border Controller architecture." },
                    { src: "assets/projects/sbc-jnsm-workflow.png", alt: "Secure Border Controller workflow diagram", caption: "Verification, harmonization, and translation workflow." }
                ]
            },
            impact: [
                "Provides a refined intent language, a dedicated verification phase, formal harmonization algorithms, and quantitative validation.",
                "Verification remains below 0.05 ms per request/authorization tuple across the evaluated scenarios, supporting fast compatibility checks across candidate providers.",
                "Translation remains bounded to very low average execution times across CIDR, pod/namespace, and mixed-selector scenarios.",
                "Implements verification, harmonization, translation, and enforcement as a Java Kubernetes Controller integrated with the FLUIDOS resource-acquisition workflow."
            ],
            impactImages: [
                { src: "assets/projects/sbc-jnsm-translation.png", alt: "Secure Border Controller translation example", caption: "Example of intent translation into Kubernetes Network Policies." },
                { src: "assets/projects/sbc-jnsm-performance-1.png", alt: "Secure Border Controller performance figure one", caption: "Quantitative validation of the verification and harmonization phases." },
                { src: "assets/projects/sbc-jnsm-performance-2.png", alt: "Secure Border Controller performance figure two", caption: "Additional scalability validation for intent processing." },
                { src: "assets/projects/sbc-jnsm-performance-3.png", alt: "Secure Border Controller performance figure three", caption: "Additional scalability validation for intent processing." }
            ],
            videos: [
                { title: "Secure Border Controller demo video", youtubeId: "7NBoORvkJ5U", thumbnail: "https://img.youtube.com/vi/7NBoORvkJ5U/hqdefault.jpg", url: "https://www.youtube.com/watch?v=7NBoORvkJ5U" }
            ],
            references: [
                { text: "F. Pizzato et al., Intent-Driven Network Isolation for the Cloud Computing Continuum, JNSM 2026.", url: "https://doi.org/10.1007/s10922-025-09986-1" },
                { text: "Earlier conference version: F. Pizzato et al., An intent-based solution for network isolation in Kubernetes, IEEE NetSoft 2024.", url: "https://doi.org/10.1109/NetSoft60951.2024.10588939" }
            ],
            links: [
                { text: "Source Code", icon: "fab fa-github", url: "https://github.com/netgroup-polito/secure-border-controller", type: "badge-code" }
            ]
        },
        {
            title: "Cloud Formal",
            description: "A query-driven formal verification prototype for cloud security configurations, focused on Kubernetes RBAC and Network Policies.",
            problem: "Cloud administrators need to validate RBAC and Network Policy configurations, but manual inspection is hard to scale and often misses cross-domain issues such as authorization paths combined with reachable network endpoints.",
            solution: "Cloud Formal offers a high-level query language and maps cloud configuration plus verification queries into SMT constraints solved with Z3, returning user-facing answers to administrators.",
            objective: "Make formal verification usable for cloud security configuration auditing, covering both access control and network reachability in a single query-driven workflow.",
            approach: {
                text: "The workflow extracts cluster configuration into a graph model, formulates security configuration and query clauses, solves them with an SMT solver, and translates solver assignments back into answered queries.",
                images: [
                    { src: "assets/projects/cloud-formal-paper-architecture.png", alt: "Cloud Formal architecture diagram", caption: "Architecture of the query-driven verification approach." }
                ]
            },
            impact: [
                "Validated on pessimistic synthetic scenarios with a fixed cluster of 1,000 users, 1,000 roles, 1,000 IP addresses, and 1,200 resources.",
                "Solved the largest tested scenario, 40,000 verification queries, in less than 15 minutes on a 32 GB laptop-class machine.",
                "Supports authorization checks, role auditing, isolation verification, data-exfiltration checks, and combined RBAC/network-policy queries."
            ],
            impactImages: [
                { src: "assets/projects/cloud-formal-paper-scalability.png", alt: "Cloud Formal scalability graphs", caption: "Computation-time and memory scalability with increasing query volume." }
            ],
            references: [
                { text: "F. Pizzato et al., Toward a Query-Driven Approach for Formal Verification of Cloud Security Configuration, IEEE/IFIP NOMS 2026.", url: "#" },
                { text: "Repository/link placeholder." }
            ],
            links: [
                { text: "Source Code Soon", icon: "fab fa-github", url: "#", type: "badge-code", placeholder: true }
            ]
        },
        {
            title: "Parallel Automatic Firewall Configuration",
            description: "A traffic-aware graph-partitioning approach for parallel firewall configuration, decomposing one monolithic VEREFOO-style refinement problem into cluster-scoped subproblems.",
            problem: "Constraint-based firewall configuration can become too slow when the whole network is encoded as one globally coupled MaxSMT problem, especially as topology size and policy complexity increase.",
            solution: "The approach builds a flow-weighted graph, partitions it into traffic-aware clusters, solves one configuration problem per cluster in parallel, and merges the partial solutions into one deployable firewall configuration.",
            objective: "Improve the scalability of automatic firewall allocation and rule synthesis while preserving formal correctness and keeping optimization loss modest.",
            approach: {
                text: "The workflow performs problem segmentation, parallel per-cluster configuration, merging, and post-processing to remove redundant firewalls introduced by decomposition.",
                images: [
                    { src: "assets/projects/parallel-firewall-paper-approach.png", alt: "Parallel firewall configuration approach diagram", caption: "Traffic-aware clusterization workflow for parallel policy refinement." }
                ]
            },
            impact: [
                "Achieved runtime reductions that increase with problem size, reaching up to ~98% on large instances in the evaluation.",
                "Enabled the resolution of firewall configuration problems beyond the practical limits of the monolithic formulation.",
                "Post-processing mitigates decomposition overhead, with modest degradation in allocated-firewall and rule-count optimality."
            ],
            impactImages: [
                { src: "assets/projects/parallel-firewall-paper-performance.png", alt: "Parallel firewall configuration performance graphs", caption: "Runtime comparison between the parallelized approach and original VEREFOO." },
                { src: "assets/projects/parallel-firewall-paper-optimality.png", alt: "Parallel firewall configuration optimality graphs", caption: "Optimization evaluation after merging and post-processing." }
            ],
            references: [
                { text: "F. Pizzato, D. Bringhenti, F. Valenza, Parallel Automatic Firewall Configuration via Traffic-Aware Graph Partitioning, draft under review." },
                { text: "Repository/link placeholder." }
            ],
            links: [
                { text: "Source Code Soon", icon: "fab fa-github", url: "#", type: "badge-code", placeholder: true }
            ]
        }
    ],
    publications: [
        {
            title: "Toward a Query-Driven Approach for Formal Verification of Cloud Security Configuration",
            authors: "<strong>F. Pizzato</strong>, D. Bringhenti, R. Sisto, F. Valenza et al.",
            venue: "IEEE/IFIP NOMS, 2026.",
            url: "https://hdl.handle.net/11583/3007330",
            abstract: "This work presents a novel query-driven formal verification methodology tailored to modern cloud-native security setups. By allowing administrators to run declarative queries against cloud configuration states, vulnerabilities are proactively mapped before deployment.",
            topics: ["Formal Verification", "Cloud Security"],
            year: 2026
        },
        {
            title: "Intent-Driven Network Isolation for the Cloud Computing Continuum",
            authors: "<strong>F. Pizzato</strong>, D. Bringhenti, R. Sisto, F. Valenza",
            venue: "Journal of Network and Systems Management, vol. 34, no. 1, 2026.",
            url: "https://doi.org/10.1007/s10922-025-09986-1",
            abstract: "This paper introduces an intent-driven framework for achieving network isolation across distributed cloud computing continuum environments. By automatically translating high-level, human-readable intents into verifiable network policies, the system simplifies multi-domain configuration while upholding Zero Trust architectures.",
            topics: ["Network Isolation", "Zero Trust", "Cloud Security"],
            year: 2026
        },
        {
            title: "A demonstration of a network isolation solution for the computing continuum",
            authors: "<strong>F. Pizzato</strong>, D. Bringhenti, L. Cetino, R. Sisto, F. Valenza",
            venue: "IEEE NFV-SDN, 2025.",
            url: "https://doi.org/10.1109/NFV-SDN66355.2025.11349451",
            presentation: "presentations/NFVSDN_demo.pdf",
            abstract: "This demo highlights an intent-based orchestrator automatically translating declarative network isolation intents into enforceable data-plane configurations across a geographically distributed computing continuum.",
            topics: ["Network Isolation", "Intent-based Networking"],
            year: 2025
        },
        {
            title: "A demonstration of an autonomous approach for cyberattack mitigation",
            authors: "<strong>F. Pizzato</strong>, D. Bringhenti, R. Sisto, F. Valenza",
            venue: "IEEE CNSM, 2025.",
            url: "https://doi.org/10.23919/CNSM67658.2025.11297455",
            presentation: "presentations/CNSM_demo.pdf",
            abstract: "A live demonstration showcasing an autonomous system architecture that ingests IDS alerts and dynamically synthesizes responsive, optimized packet anomaly mitigation rules across distributed edge nodes.",
            topics: ["Cyberattack Mitigation"],
            year: 2025
        },
        {
            title: "Autonomous attack mitigation through firewall reconfiguration",
            authors: "D. Bringhenti, <strong>F. Pizzato</strong>, R. Sisto, F. Valenza",
            venue: "International Journal of Network Management, vol. 35, no. 1, 2025.",
            url: "https://doi.org/10.1002/nem.2307",
            abstract: "We propose an autonomous approach for mitigating short-lived cyberattacks by dynamically and optimally reconfiguring packet-filtering firewalls. The framework minimizes human intervention while mathematically assuring correct rule displacement.",
            topics: ["Cyberattack Mitigation", "Firewall Configuration", "Formal Verification"],
            year: 2025
        },
        {
            title: "A looping process for cyberattack mitigation",
            authors: "D. Bringhenti, <strong>F. Pizzato</strong>, R. Sisto, F. Valenza",
            venue: "IEEE CSR, 2024.",
            url: "https://doi.org/10.1109/CSR61664.2024.10679501",
            abstract: "This paper addresses mitigating attacks in highly dynamic virtual computer networks through an autonomous, optimized, and provably correct 'looping' process. It leverages a dedicated engine to process monitoring alerts and re-configure distributed firewalls on the fly to neutralize threats.",
            topics: ["Cyberattack Mitigation", "Network Automation"],
            year: 2024
        },
        {
            title: "An intent-based solution for network isolation in Kubernetes",
            authors: "<strong>F. Pizzato</strong>, D. Bringhenti, R. Sisto, F. Valenza",
            venue: "IEEE NetSoft, 2024.",
            url: "https://doi.org/10.1109/NetSoft60951.2024.10588939",
            presentation: "presentations/2024_SecSoft.pdf",
            abstract: "We propose a security orchestrator that automates the generation of Kubernetes Network Policies from high-level user intents. It features a conflict resolution mechanism to harmonize intents from multi-tenant flat-network environments, thereby seamlessly enforcing Zero Trust patterns.",
            topics: ["Network Isolation", "Kubernetes", "Intent-based Networking"],
            year: 2024
        },
        {
            title: "Security Automation in next-generation Networks and Cloud environments",
            authors: "<strong>F. Pizzato</strong>, D. Bringhenti, R. Sisto, F. Valenza",
            venue: "IEEE/IFIP NOMS, 2024.",
            url: "https://dblp.org/rec/conf/noms/PizzatoBSV24",
            presentation: "presentations/2024_NOMS_Symposium.pdf",
            abstract: "An architectural overview of modern security automation methods, comparing traditional monolithic management planes with emerging cloud-native, continuous verification techniques for next-generation virtual networks.",
            topics: ["Cloud Security", "Network Automation"],
            year: 2024
        },
        {
            title: "Automatic and optimized firewall reconfiguration",
            authors: "<strong>F. Pizzato</strong>, D. Bringhenti, R. Sisto, F. Valenza",
            venue: "IEEE/IFIP NOMS, 2024.",
            url: "https://doi.org/10.1109/NOMS59830.2024.10575212",
            presentation: "presentations/2024_NOMS.pdf",
            abstract: "We address the challenge of firewall management in dynamic networks by proposing an algorithm that automatically extracts optimal packet-filter rules from high-level alerts, removing the need for manual, error-prone configurations.",
            topics: ["Firewall Configuration", "Network Automation"],
            year: 2024
        }
    ]
};
