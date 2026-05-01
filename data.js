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
        "I have gained international research experience through an abroad visiting period in Spain and collaborations with national and European research projects."
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
          title: "REACT-Verefoo",
          description: "A MaxSMT-based reconfiguration engine for autonomous attack mitigation that computes formally correct, optimized updates to distributed firewall placement and rules without regenerating the entire configuration from scratch. In the extended system, REACT-Verefoo is the core synthesis component within an end-to-end pipeline that extracts new security requirements from IDS logs, merges them with existing policies, and deploys the updated firewall configuration automatically.",
          problem: "Modern cyber attacks evolve quickly, while distributed firewall management in virtualized networks remains too slow and too manual. Recomputing the full firewall allocation and rule set from scratch after each new mitigation requirement wastes time, may cause large configuration churn, and is poorly suited to short attack-reaction loops. Existing approaches also often require human intervention to interpret IDS alerts, derive new security requirements, and deploy the resulting rules.",

          solution: "REACT-Verefoo narrows the synthesis problem to the network areas affected by newly added security requirements, while keeping unaffected parts of the deployed configuration fixed. It models reconfiguration as a partial weighted MaxSMT problem with hard constraints for formal correctness and soft constraints that prefer reusing existing firewall instances and rules, thereby reducing both computation time and configuration churn. In the full autonomous framework, this reconfiguration is triggered by IDS logs and followed by automatic rule translation and deployment.",

          objective: "Enable fast, autonomous, and formally correct firewall reconfiguration for attack mitigation in virtualized networks, minimizing both reaction time and the number of changes applied to the deployed distributed firewall.",

          approach: {
            text: "The overall system starts from a service graph and an initial set of network security requirements. IDS logs are monitored continuously; when an attack is detected, new requirements are extracted and merged with the existing ones to produce a target requirement set. REACT-Verefoo then identifies the subset of the network that may need reconfiguration, builds a partial weighted MaxSMT model over the service graph, allocation graph, traffic flows, and security requirements, and computes an updated firewall allocation scheme and rule set. The optimization prefers preserving existing firewall placements and previously configured rules while still enforcing the target requirements correctly.",
            images: [
              { src: "assets/projects/react-verefoo-autonomous-pipeline.png", alt: "Autonomous attack-mitigation pipeline with REACT-Verefoo, IDS, requirement extraction, merging, and deployment", caption: "End-to-end autonomous attack-mitigation workflow, with REACT-Verefoo as the reconfiguration engine." },
              { src: "assets/projects/react-verefoo-schema.png", alt: "REACT-Verefoo schema showing service graph, allocation graph, requirements, and resulting firewall configuration", caption: "REACT-Verefoo takes the current network and security requirements and computes an updated firewall allocation and configuration." }
            ]
          },
      
          impact: [
            "Reduced reconfiguration time substantially versus complete recomputation. In the Case-E experiment, average time was 2.529 s with 90% of requirements kept and 4.509 s with 70% kept, compared with 34.343 s for complete reconfiguration.",
            "The network-area selection step added only 0-100 ms, with most runs below 10 ms, so the optimization overhead was negligible relative to total solving time.",
            "On larger scalability experiments, the optimized approach reduced average computation time by about 60% versus non-optimized complete reconfiguration in the evaluated upper-bound scenario.",
            "The method preserves formal correctness while favoring reuse of already allocated firewalls and existing rules, reducing configuration churn during mitigation."
          ],
      
        //   impactImages: [
        //     { src: "assets/projects/react-verefoo-scalability.png", alt: "Scalability comparison between the new approach and the old approach", caption: "The optimized approach scales better than full reconfiguration as network size grows." },
        //     { src: "assets/projects/react-verefoo-performance.png", alt: "Average computation time for 90% kept, 70% kept, and complete reconfiguration across Cases A-E", caption: "Reconfiguration remains much faster than complete recomputation across increasing network sizes." }
        //   ],
      
          references: [
            { text: "F. Pizzato, D. Bringhenti, R. Sisto, F. Valenza, Automatic and optimized firewall reconfiguration, IEEE/IFIP NOMS 2024.", url: "https://doi.org/10.1109/NOMS59830.2024.10575212" },
            { text: "D. Bringhenti, F. Pizzato, R. Sisto, F. Valenza, Autonomous Attack Mitigation Through Firewall Reconfiguration, International Journal of Network Management, 2025.", url: "https://doi.org/10.1002/nem.2307" }
          ],
      
          links: [
            { text: "Source Code", icon: "fab fa-github", url: "https://github.com/netgroup-polito/verefoo", type: "badge-code" }
          ]
        },
        {
          title: "Secure Border Controller",
          description: "An intent-driven security solution for workload-level network isolation in the computing continuum, implemented as a Kubernetes controller that verifies, harmonizes, translates, and enforces consumer and provider intents as Kubernetes Network Policies.",
        
          problem: "In the computing continuum, workloads can be dynamically offloaded across clusters and administrative domains, creating simultaneous and potentially conflicting isolation goals for consumers and providers. Existing approaches are inadequate because they do not address the continuum’s dynamic multi-tenant nature, its infrastructure heterogeneity, or the need to reconcile conflicting objectives before enforcing low-level network isolation policies.",
        
          solution: "Secure Border Controller introduces an intent-based workflow in which consumers and providers express high-level network isolation intents, a verification phase checks compatibility between consumer requests and provider authorizations, a harmonization phase resolves discordances between the parties, and a translation phase converts the resulting conflict-free intents into enforceable Kubernetes Network Policies.",
        
          objective: "Automate zero-trust and least-privilege workload isolation across the computing continuum by giving both consumers and providers fine-grained control over communications while hiding low-level Kubernetes policy complexity.",
        
          approach: {
            text: "The solution is integrated into the resource acquisition workflow of the computing continuum. Consumers define Private and Request intents, providers define Authorization intents, and the platform contributes Setup intents required for correct operation. The Secure Border Controller first verifies compatibility between consumer Request intents and provider Authorization intents across candidate providers. After a provider is selected, it harmonizes the involved intent sets to resolve three classes of discordance, then translates the harmonized intents into one or more Kubernetes Network Policies and enforces them through the Kubernetes API server. The implementation was built as a Java Kubernetes Controller and validated in the FLUIDOS context using Liqo as the continuum provider substrate.",
            images: [
              { src: "assets/projects/sbc-jnsm-workflow.png", alt: "Secure Border Controller workflow across consumer and provider clusters", caption: "Workflow of Secure Border Controller: verification, harmonization, translation, and enforcement across consumer and provider domains." },
              { src: "assets/projects/sbc-jnsm-architecture.png", alt: "High-level Secure Border Controller architecture for protected borders in the computing continuum", caption: "High-level protected-border architecture showing how Secure Border Controller safeguards communications across the computing continuum." }
            ]
          },
      
          impact: [
            "Extends the earlier conference version with an enhanced intent language, a new verification phase, a formal harmonization algorithm, and stronger validation.",
            "Provides four intent categories—Private, Request, Authorization, and Setup—to express both consumer and provider isolation goals in continuum scenarios.",
            "Verification remains very fast, staying below 0.05 ms per evaluated Request/Authorization tuple across the tested scenarios.",
            "Translation also remains bounded to negligible average execution times across CIDR-only, pod/namespace-only, and mixed-selector cases.",
            "Implements the full workflow as a Java Kubernetes Controller that translates harmonized intents into Kubernetes Network Policies and integrates with FLUIDOS and Liqo for continuum resource sharing."
          ],
      
          references: [
            { text: "F. Pizzato et al., Intent-Driven Network Isolation for the Cloud Computing Continuum, Journal of Network and Systems Management, 2026.", url: "https://doi.org/10.1007/s10922-025-09986-1" },
            { text: "Earlier conference version: F. Pizzato et al., An intent-based solution for network isolation in Kubernetes, IEEE NetSoft 2024.", url: "https://doi.org/10.1109/NetSoft60951.2024.10588939" }
          ],
      
          videos: [
            { title: "Secure Border Controller demo video", youtubeId: "7NBoORvkJ5U", thumbnail: "https://img.youtube.com/vi/7NBoORvkJ5U/hqdefault.jpg", url: "https://www.youtube.com/watch?v=7NBoORvkJ5U" }
          ],
      
          links: [
            { text: "Source Code", icon: "fab fa-github", url: "https://github.com/netgroup-polito/secure-border-controller", type: "badge-code" }
          ]
        },
        {
          title: "Cloud Formal",
          description: "A query-driven formal verification approach for Kubernetes security configuration that lets administrators express high-level verification queries and checks them by translating both cluster configuration and queries into SMT constraints solved with Z3.",
        
          problem: "Ensuring the correctness of Kubernetes security configuration is increasingly difficult because cloud environments are large, dynamic, and easy to misconfigure. Manual inspection and testing do not scale well and often fail to reveal subtle errors spanning multiple security domains, such as RBAC authorization combined with reachable network endpoints.",
        
          solution: "Cloud Formal introduces a high-level query language for administrators and a formal verification workflow that models Kubernetes security configuration and verification queries as an SMT problem. The approach supports both RBAC and Network Policies and can detect complex cross-domain issues, including lateral movement and multi-level attack conditions.",
        
          objective: "Make formal verification practical for cloud security auditing by combining a user-friendly query language with mathematically sound checking of both access control and network reachability properties in a single workflow.",
        
          approach: {
            text: "The workflow starts from two inputs: the cluster configuration and a set of administrator-defined verification queries. The configuration is converted into a graph model where vertices represent cluster resources and edges encode relationships such as role assignments, permissions, and allowed communications. Dedicated modules then extract security-configuration clauses and formulate query clauses over a formal model of users, roles, resources, and endpoints. These clauses are combined into an SMT problem, solved with Z3, and finally translated back into user-facing answers corresponding to the original queries.",
            images: [
              { src: "assets/projects/cloud-formal-paper-architecture.png", alt: "Cloud Formal verification workflow architecture", caption: "Architecture of the query-driven formal verification workflow: query input, problem modeling, SMT solving, and translation of results." }
            ]
          },
      
          impact: [
            "Supports multiple classes of security checks through one query language, including authorization verification, role auditing, network-isolation verification, hypothetical what-if analysis, and holistic queries that combine RBAC and Network Policies.",
            "Validated on deliberately pessimistic synthetic scenarios with a fixed cluster of 1,000 users, 1,000 roles, 1,000 IP addresses, and 1,200 resources.",
            "Solved the largest tested scenario, 40,000 verification queries, in less than 15 minutes on a machine with an Intel Core Ultra 7 155H and 32 GB of memory.",
            "Showed that memory consumption, rather than solver time, becomes the main scalability bottleneck in the largest scenarios, while still remaining manageable on the evaluation machine."
          ],
      
          references: [
            { text: "F. Pizzato et al., Toward a Query-Driven Approach for Formal Verification of Cloud Security Configuration, IEEE/IFIP NOMS 2026." }
          ],
      
          links: [
            { text: "Source Code Soon", icon: "fab fa-github", url: "#", type: "badge-code", placeholder: true }
          ]
        },
        {
          title: "Parallel Automatic Firewall Configuration",
          description: "A traffic-aware graph-partitioning approach for the parallel automated configuration of distributed firewalls, decomposing a global MaxSMT-based refinement problem into cluster-scoped subproblems that are solved concurrently and then reconciled into one deployable configuration.",
        
          problem: "Automatic distributed firewall configuration becomes difficult to scale when the whole network and all security requirements are encoded as one globally coupled constraint-solving problem. As network size and policy complexity increase, monolithic MaxSMT synthesis incurs rapidly growing computation costs that can make it impractical for large deployments and time-sensitive scenarios.",
        
          solution: "The approach constructs a flow-weighted graph representation of the network, partitions it into traffic-coupled clusters through community detection, solves one MaxSMT-based firewall synthesis problem per cluster in parallel, and then merges the local configurations into a formally correct global solution. A post-processing phase further removes redundant enforcement points introduced by decomposition.",
        
          objective: "Improve the scalability of automatic firewall allocation and rule synthesis while preserving formal correctness and keeping the degradation of optimization quality acceptable in terms of allocated firewalls and configured rules.",
        
          approach: {
            text: "Starting from an allocation graph and a set of network security requirements, the workflow first builds a flow graph where edge weights capture traffic-induced coupling among nodes. A traffic-aware clusterization step partitions this graph into subnetworks and assigns security requirements accordingly, with special handling for cut flows and boundary conditions. Each resulting subproblem is then solved independently using the baseline VEREFOO MaxSMT formulation in parallel. Finally, a merge phase reconciles independently synthesized local firewall configurations at shared allocation places, and a post-processing phase removes duplicate firewalls that are no longer necessary after the merge.",
            images: [
              { src: "assets/projects/parallel-firewall-paper-approach.png", alt: "Parallel automatic firewall configuration workflow", caption: "Traffic-aware workflow: problem segmentation, parallel per-cluster configuration, merging, and final deployable firewall configuration." }
            ]
          },
      
          impact: [
            "Substantially reduced computation time versus monolithic VEREFOO, with gains increasing with problem size and reaching about 98% on the largest evaluated instances.",
            "Enabled the resolution of larger firewall-configuration problems beyond the practical limits of the original monolithic formulation.",
            "Kept optimization loss modest: post-processing often recovered redundant allocations and, in some topologies, matched the monolithic solution in the number of allocated firewalls.",
            "Showed that decomposition quality depends on traffic locality and clusterization parameters, but still delivers strong scalability improvements across realistic and synthetic topology families."
          ],
          references: [
            { text: "F. Pizzato, D. Bringhenti, F. Valenza, Parallel Automatic Firewall Configuration via Traffic-Aware Graph Partitioning." }
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
