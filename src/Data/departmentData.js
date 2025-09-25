// // Department options
// export const departments = [
//     {
//         id: 'web-development',
//         name: 'Web Development',
//         icon: '🌐',
//         color: '#667eea'
//     },
//     {
//         id: 'mobile-app',
//         name: 'Mobile App',
//         icon: '📱',
//         color: '#764ba2'
//     },
//     {
//         id: 'ai-ml',
//         name: 'AI/ML Solutions',
//         icon: '🤖',
//         color: '#f093fb'
//     },
//     {
//         id: 'e-commerce',
//         name: 'E-commerce',
//         icon: '🛒',
//         color: '#4facfe'
//     },
//     {
//         id: 'blockchain',
//         name: 'Blockchain',
//         icon: '⛓️',
//         color: '#43e97b'
//     },
//     {
//         id: 'consulting',
//         name: 'Consulting',
//         icon: '💼',
//         color: '#fa709a'
//     }
// ];

// // Department-specific roadmap steps
// export const roadmapStepsData = {
//     'web-development': [
//         {
//             id: 1,
//             title: "Initial Consultation",
//             description: "Discuss your web project requirements and goals",
//             icon: "📞",
//             duration: "1-2 days",
//             details: ["Project brief discussion", "Technology stack selection", "Timeline estimation"]
//         },
//         {
//             id: 2,
//             title: "Design & Planning",
//             description: "Create wireframes, mockups, and technical architecture",
//             icon: "🎨",
//             duration: "5-7 days",
//             details: ["UI/UX design", "Database design", "API planning", "Responsive design"]
//         },
//         {
//             id: 3,
//             title: "Development Phase",
//             description: "Build your website with modern technologies",
//             icon: "💻",
//             duration: "2-8 weeks",
//             details: ["Frontend development", "Backend development", "Database implementation", "Third-party integrations"]
//         },
//         {
//             id: 4,
//             title: "Testing & Quality Assurance",
//             description: "Comprehensive testing across all devices and browsers",
//             icon: "🧪",
//             duration: "3-5 days",
//             details: ["Functionality testing", "Performance optimization", "Security testing", "Cross-browser testing"]
//         },
//         {
//             id: 5,
//             title: "Deployment & Launch",
//             description: "Deploy to production and go live",
//             icon: "🚀",
//             duration: "1-2 days",
//             details: ["Server setup", "Domain configuration", "SSL certificate", "Go-live checklist"]
//         },
//         {
//             id: 6,
//             title: "Maintenance & Support",
//             description: "Ongoing support and updates",
//             icon: "🔧",
//             duration: "Ongoing",
//             details: ["Bug fixes", "Content updates", "Performance monitoring", "Security updates"]
//         }
//     ],
//     'mobile-app': [
//         {
//             id: 1,
//             title: "App Strategy & Planning",
//             description: "Define app concept, target audience, and platform strategy",
//             icon: "📋",
//             duration: "3-5 days",
//             details: ["Market research", "User personas", "Platform selection", "Feature prioritization"]
//         },
//         {
//             id: 2,
//             title: "UI/UX Design",
//             description: "Create intuitive and engaging mobile interfaces",
//             icon: "🎨",
//             duration: "7-10 days",
//             details: ["Wireframing", "Prototyping", "Visual design", "User testing"]
//         },
//         {
//             id: 3,
//             title: "App Development",
//             description: "Build native or cross-platform mobile application",
//             icon: "📱",
//             duration: "4-12 weeks",
//             details: ["Native development", "API integration", "Push notifications", "Offline functionality"]
//         },
//         {
//             id: 4,
//             title: "Testing & Optimization",
//             description: "Test across devices and optimize performance",
//             icon: "🔍",
//             duration: "5-7 days",
//             details: ["Device testing", "Performance optimization", "Bug fixing", "App store guidelines"]
//         },
//         {
//             id: 5,
//             title: "App Store Submission",
//             description: "Submit to app stores and manage approval process",
//             icon: "📤",
//             duration: "3-7 days",
//             details: ["App store optimization", "Metadata preparation", "Review process", "Publication"]
//         },
//         {
//             id: 6,
//             title: "Post-Launch Support",
//             description: "Monitor performance and provide ongoing updates",
//             icon: "📊",
//             duration: "Ongoing",
//             details: ["Analytics monitoring", "User feedback", "Regular updates", "Feature enhancements"]
//         }
//     ],
//     'ai-ml': [
//         {
//             id: 1,
//             title: "Data Assessment",
//             description: "Analyze your data and define AI/ML objectives",
//             icon: "📊",
//             duration: "5-7 days",
//             details: ["Data quality analysis", "Problem definition", "Success metrics", "Data collection strategy"]
//         },
//         {
//             id: 2,
//             title: "Model Development",
//             description: "Build and train machine learning models",
//             icon: "🧠",
//             duration: "2-6 weeks",
//             details: ["Algorithm selection", "Model training", "Feature engineering", "Hyperparameter tuning"]
//         },
//         {
//             id: 3,
//             title: "Model Validation",
//             description: "Test and validate model performance",
//             icon: "✅",
//             duration: "3-5 days",
//             details: ["Cross-validation", "Performance metrics", "Bias detection", "Model comparison"]
//         },
//         {
//             id: 4,
//             title: "Integration & Deployment",
//             description: "Integrate AI solution into your existing systems",
//             icon: "🔗",
//             duration: "1-2 weeks",
//             details: ["API development", "System integration", "Scalability setup", "Monitoring implementation"]
//         },
//         {
//             id: 5,
//             title: "Performance Monitoring",
//             description: "Monitor model performance and accuracy",
//             icon: "📈",
//             duration: "Ongoing",
//             details: ["Real-time monitoring", "Model drift detection", "Performance tracking", "Alert systems"]
//         },
//         {
//             id: 6,
//             title: "Continuous Improvement",
//             description: "Iterate and improve the AI solution",
//             icon: "🔄",
//             duration: "Ongoing",
//             details: ["Model retraining", "Feature updates", "Performance optimization", "New data integration"]
//         }
//     ],
//     'e-commerce': [
//         {
//             id: 1,
//             title: "E-commerce Strategy",
//             description: "Define your online business strategy and requirements",
//             icon: "💡",
//             duration: "3-5 days",
//             details: ["Business model analysis", "Target market research", "Competitor analysis", "Revenue projections"]
//         },
//         {
//             id: 2,
//             title: "Platform Selection",
//             description: "Choose the right e-commerce platform and technology",
//             icon: "🛍️",
//             duration: "2-3 days",
//             details: ["Platform comparison", "Custom vs. SaaS", "Payment gateway selection", "Hosting decisions"]
//         },
//         {
//             id: 3,
//             title: "Design & Development",
//             description: "Create your online store with custom features",
//             icon: "🎨",
//             duration: "3-8 weeks",
//             details: ["Store design", "Product catalog setup", "Shopping cart", "Checkout process"]
//         },
//         {
//             id: 4,
//             title: "Payment & Security",
//             description: "Implement secure payment processing and security measures",
//             icon: "🔒",
//             duration: "3-5 days",
//             details: ["Payment integration", "SSL certificates", "PCI compliance", "Security testing"]
//         },
//         {
//             id: 5,
//             title: "Testing & Launch",
//             description: "Test all functionality and launch your store",
//             icon: "🚀",
//             duration: "2-3 days",
//             details: ["End-to-end testing", "Performance optimization", "SEO setup", "Go-live preparation"]
//         },
//         {
//             id: 6,
//             title: "Marketing & Analytics",
//             description: "Set up marketing tools and analytics tracking",
//             icon: "📈",
//             duration: "Ongoing",
//             details: ["Analytics setup", "Marketing automation", "SEO optimization", "Conversion tracking"]
//         }
//     ],
//     'blockchain': [
//         {
//             id: 1,
//             title: "Blockchain Strategy",
//             description: "Define blockchain use case and technical requirements",
//             icon: "⛓️",
//             duration: "5-7 days",
//             details: ["Use case analysis", "Blockchain selection", "Consensus mechanism", "Token economics"]
//         },
//         {
//             id: 2,
//             title: "Smart Contract Development",
//             description: "Develop and test smart contracts",
//             icon: "📜",
//             duration: "2-4 weeks",
//             details: ["Contract architecture", "Code development", "Security audits", "Testing protocols"]
//         },
//         {
//             id: 3,
//             title: "DApp Development",
//             description: "Build decentralized application frontend and backend",
//             icon: "🌐",
//             duration: "3-8 weeks",
//             details: ["Frontend development", "Web3 integration", "User interface", "Wallet integration"]
//         },
//         {
//             id: 4,
//             title: "Testing & Security",
//             description: "Comprehensive testing and security audits",
//             icon: "🔐",
//             duration: "1-2 weeks",
//             details: ["Penetration testing", "Smart contract audits", "Vulnerability assessment", "Security hardening"]
//         },
//         {
//             id: 5,
//             title: "Deployment & Launch",
//             description: "Deploy to blockchain network and launch",
//             icon: "🚀",
//             duration: "2-3 days",
//             details: ["Mainnet deployment", "Node setup", "Network configuration", "Public launch"]
//         },
//         {
//             id: 6,
//             title: "Maintenance & Updates",
//             description: "Ongoing maintenance and feature updates",
//             icon: "🔧",
//             duration: "Ongoing",
//             details: ["Node maintenance", "Contract updates", "Performance monitoring", "Community support"]
//         }
//     ],
//     'consulting': [
//         {
//             id: 1,
//             title: "Initial Assessment",
//             description: "Evaluate your current technology and business processes",
//             icon: "🔍",
//             duration: "3-5 days",
//             details: ["Current state analysis", "Gap identification", "Stakeholder interviews", "Documentation review"]
//         },
//         {
//             id: 2,
//             title: "Strategy Development",
//             description: "Create comprehensive technology and business strategy",
//             icon: "📋",
//             duration: "5-7 days",
//             details: ["Strategic planning", "Technology roadmap", "Implementation timeline", "Resource allocation"]
//         },
//         {
//             id: 3,
//             title: "Solution Design",
//             description: "Design tailored solutions for your specific needs",
//             icon: "🎯",
//             duration: "1-2 weeks",
//             details: ["Solution architecture", "Technology selection", "Process optimization", "Change management"]
//         },
//         {
//             id: 4,
//             title: "Implementation Planning",
//             description: "Create detailed implementation plan and timeline",
//             icon: "📅",
//             duration: "2-3 days",
//             details: ["Project planning", "Resource allocation", "Risk assessment", "Milestone definition"]
//         },
//         {
//             id: 5,
//             title: "Execution Support",
//             description: "Provide guidance and support during implementation",
//             icon: "🤝",
//             duration: "Ongoing",
//             details: ["Project management", "Technical guidance", "Team training", "Quality assurance"]
//         },
//         {
//             id: 6,
//             title: "Review & Optimization",
//             description: "Review results and optimize for continuous improvement",
//             icon: "📊",
//             duration: "Ongoing",
//             details: ["Performance review", "KPI analysis", "Process optimization", "Future planning"]
//         }
//     ]
// };



// Department options
// export const departments = [
//     {
//         id: 'web-development',
//         name: 'Web Development',
//         icon: 'FaGlobe',
//         color: '#667eea',
//         description: 'Web Development involves building and maintaining websites and web applications to ensure optimal performance and user experience.',
//         roles: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'DevOps Engineer']
//     },
//     {
//         id: 'mobile-app',
//         name: 'Mobile App',
//         icon: 'FaMobileAlt',
//         color: '#764ba2',
//         description: 'Mobile App Development focuses on creating native or cross-platform applications for iOS and Android devices, delivering seamless user experiences.',
//         roles: ['Mobile App Developer', 'UI/UX Designer', 'QA Engineer', 'App Store Specialist']
//     },
//     {
//         id: 'ai-ml',
//         name: 'AI/ML Solutions',
//         icon: 'FaRobot',
//         color: '#f093fb',
//         description: 'AI/ML Solutions leverage artificial intelligence and machine learning to provide data-driven insights and automation for businesses.',
//         roles: ['Data Scientist', 'Machine Learning Engineer', 'AI Researcher', 'Data Analyst']
//     },
//     {
//         id: 'e-commerce',
//         name: 'E-commerce',
//         icon: 'FaShoppingCart',
//         color: '#4facfe',
//         description: 'E-commerce Development creates robust online stores with secure payment systems, user-friendly interfaces, and scalable architectures.',
//         roles: ['E-commerce Developer', 'Payment Integration Specialist', 'SEO Specialist', 'Digital Marketer']
//     },
//     {
//         id: 'blockchain',
//         name: 'Blockchain',
//         icon: 'FaLink',
//         color: '#43e97b',
//         description: 'Blockchain Development builds secure, decentralized applications and smart contracts to enable trustless transactions and data integrity.',
//         roles: ['Blockchain Developer', 'Smart Contract Engineer', 'Security Auditor', 'DApp Developer']
//     },
//     {
//         id: 'consulting',
//         name: 'Consulting',
//         icon: 'FaBriefcase',
//         color: '#fa709a',
//         description: 'Consulting provides strategic guidance to optimize technology and business processes, ensuring alignment with organizational goals.',
//         roles: ['Technology Consultant', 'Business Analyst', 'Project Manager', 'Change Management Specialist']
//     }
// ];
// export const departments = [
//     {
//         id: 'web-development',
//         name: 'Web Development',
//         icon: 'FaGlobe',
//         color: '#667eea',
//         description: 'Web Development involves building and maintaining websites and web applications to ensure optimal performance and user experience.',
//         roles: [
//             {
//                 title: 'Frontend Developer',
//                 description: [
//                     'Develops responsive user interfaces using HTML, CSS, and JavaScript frameworks.',
//                     'Collaborates with designers to ensure brand consistency.',
//                     'Implements reusable UI components for scalability.',
//                     'Optimizes web pages for speed and performance.',
//                     'Ensures cross-browser and cross-device compatibility.',
//                     'Integrates APIs for dynamic content rendering.',
//                     'Debugs and troubleshoots front-end issues.'
//                 ]
//             },
//             {
//                 title: 'Backend Developer',
//                 description: [
//                     'Designs and develops server-side logic and APIs.',
//                     'Manages databases, data storage, and retrieval processes.',
//                     'Implements authentication and authorization mechanisms.',
//                     'Optimizes server performance and scalability.',
//                     'Works with frontend developers to integrate services.',
//                     'Ensures application security best practices.',
//                     'Debugs and maintains backend services.'
//                 ]
//             },
//             {
//                 title: 'UI/UX Designer',
//                 description: [
//                     'Conducts user research to understand customer needs.',
//                     'Designs wireframes, prototypes, and mockups.',
//                     'Focuses on usability and user-friendly interactions.',
//                     'Collaborates with developers to bring designs to life.',
//                     'Creates consistent design systems and style guides.',
//                     'Performs usability testing and gathers feedback.',
//                     'Iterates designs based on user insights.'
//                 ]
//             },
//             {
//                 title: 'DevOps Engineer',
//                 description: [
//                     'Automates deployment pipelines using CI/CD tools.',
//                     'Monitors infrastructure and application performance.',
//                     'Implements cloud solutions for scalability.',
//                     'Manages containerization and orchestration (Docker, Kubernetes).',
//                     'Ensures system reliability and uptime.',
//                     'Sets up logging and monitoring solutions.',
//                     'Collaborates with developers to streamline workflows.'
//                 ]
//             }
//         ]
//     },
//     {
//         id: 'mobile-app',
//         name: 'Mobile App',
//         icon: 'FaMobileAlt',
//         color: '#764ba2',
//         description: 'Mobile App Development focuses on creating native or cross-platform applications for iOS and Android devices, delivering seamless user experiences.',
//         roles: [
//             {
//                 title: 'Mobile App Developer',
//                 description: [
//                     'Builds native and cross-platform mobile applications.',
//                     'Integrates backend APIs with mobile applications.',
//                     'Implements mobile-friendly UI/UX principles.',
//                     'Optimizes app performance and battery usage.',
//                     'Conducts debugging and troubleshooting on devices.',
//                     'Publishes and maintains apps in app stores.',
//                     'Collaborates with designers and QA engineers.'
//                 ]
//             },
//             {
//                 title: 'UI/UX Designer',
//                 description: [
//                     'Designs engaging mobile-first interfaces.',
//                     'Creates prototypes and user flows for mobile experiences.',
//                     'Ensures touch-friendly and accessible designs.',
//                     'Collaborates with developers for seamless integration.',
//                     'Conducts usability tests on various devices.',
//                     'Improves user engagement through design.',
//                     'Maintains consistent branding across platforms.'
//                 ]
//             },
//             {
//                 title: 'QA Engineer',
//                 description: [
//                     'Performs functional, integration, and regression testing.',
//                     'Writes and executes test cases for mobile apps.',
//                     'Ensures compatibility across different devices and OS versions.',
//                     'Automates mobile testing with frameworks like Appium.',
//                     'Reports and tracks bugs throughout the lifecycle.',
//                     'Collaborates with developers to resolve issues.',
//                     'Validates app performance under different conditions.'
//                 ]
//             },
//             {
//                 title: 'App Store Specialist',
//                 description: [
//                     'Manages app store submissions and updates.',
//                     'Optimizes app listings with SEO-friendly content.',
//                     'Monitors app performance and ratings.',
//                     'Ensures compliance with app store guidelines.',
//                     'Coordinates user acquisition and retention strategies.',
//                     'Tracks app analytics and usage metrics.',
//                     'Implements app monetization strategies.'
//                 ]
//             }
//         ]
//     },
//     {
//         id: 'ai-ml',
//         name: 'AI/ML Solutions',
//         icon: 'FaRobot',
//         color: '#f093fb',
//         description: 'AI/ML Solutions leverage artificial intelligence and machine learning to provide data-driven insights and automation for businesses.',
//         roles: [
//             {
//                 title: 'Data Scientist',
//                 description: [
//                     'Collects and preprocesses structured and unstructured data.',
//                     'Builds statistical and predictive models.',
//                     'Visualizes insights using data visualization tools.',
//                     'Collaborates with business teams to define requirements.',
//                     'Deploys machine learning solutions into production.',
//                     'Performs data cleaning and transformation.',
//                     'Monitors and evaluates model performance.'
//                 ]
//             },
//             {
//                 title: 'Machine Learning Engineer',
//                 description: [
//                     'Designs and trains ML models for automation and prediction.',
//                     'Optimizes algorithms for scalability and efficiency.',
//                     'Implements feature engineering for better results.',
//                     'Deploys models in cloud or edge environments.',
//                     'Monitors model drift and retrains as necessary.',
//                     'Works with data scientists to scale solutions.',
//                     'Ensures reproducibility and automation in ML pipelines.'
//                 ]
//             },
//             {
//                 title: 'AI Researcher',
//                 description: [
//                     'Explores new algorithms and AI techniques.',
//                     'Publishes findings in research journals.',
//                     'Collaborates with universities and R&D teams.',
//                     'Prototypes AI solutions for real-world challenges.',
//                     'Focuses on NLP, computer vision, or robotics.',
//                     'Develops experimental AI architectures.',
//                     'Tests ethical and responsible AI applications.'
//                 ]
//             },
//             {
//                 title: 'Data Analyst',
//                 description: [
//                     'Analyzes datasets to identify trends and patterns.',
//                     'Prepares dashboards and reports for stakeholders.',
//                     'Assists decision-making with actionable insights.',
//                     'Cleans raw data for reporting purposes.',
//                     'Uses SQL, Excel, and BI tools for analysis.',
//                     'Collaborates with data engineers for access pipelines.',
//                     'Validates accuracy of reporting metrics.'
//                 ]
//             }
//         ]
//     },
//     {
//         id: 'e-commerce',
//         name: 'E-commerce',
//         icon: 'FaShoppingCart',
//         color: '#4facfe',
//         description: 'E-commerce Development creates robust online stores with secure payment systems, user-friendly interfaces, and scalable architectures.',
//         roles: [
//             {
//                 title: 'E-commerce Developer',
//                 description: [
//                     'Builds and customizes e-commerce platforms.',
//                     'Integrates secure payment gateways.',
//                     'Develops product catalog and inventory management systems.',
//                     'Ensures responsive and optimized shopping experiences.',
//                     'Implements search and recommendation systems.',
//                     'Troubleshoots and maintains store functionality.',
//                     'Collaborates with marketing teams for features.'
//                 ]
//             },
//             {
//                 title: 'Payment Integration Specialist',
//                 description: [
//                     'Implements secure online payment solutions.',
//                     'Works with multiple payment providers (Stripe, PayPal, etc.).',
//                     'Ensures compliance with PCI-DSS standards.',
//                     'Troubleshoots transaction failures.',
//                     'Implements fraud detection measures.',
//                     'Maintains transaction logs and monitoring.',
//                     'Optimizes checkout flow for higher conversions.'
//                 ]
//             },
//             {
//                 title: 'SEO Specialist',
//                 description: [
//                     'Optimizes website content for search engines.',
//                     'Conducts keyword research for product listings.',
//                     'Improves page rankings through link building.',
//                     'Monitors site analytics for performance.',
//                     'Collaborates with content writers for SEO-friendly text.',
//                     'Implements technical SEO improvements.',
//                     'Keeps updated with search algorithm changes.'
//                 ]
//             },
//             {
//                 title: 'Digital Marketer',
//                 description: [
//                     'Creates and manages online marketing campaigns.',
//                     'Optimizes campaigns for ROI and conversions.',
//                     'Runs social media and email marketing strategies.',
//                     'Analyzes campaign performance using analytics tools.',
//                     'Coordinates with SEO and content teams.',
//                     'Implements retargeting strategies.',
//                     'Manages paid ads across platforms (Google, Meta, etc.).'
//                 ]
//             }
//         ]
//     },
//     {
//         id: 'blockchain',
//         name: 'Blockchain',
//         icon: 'FaLink',
//         color: '#43e97b',
//         description: 'Blockchain Development builds secure, decentralized applications and smart contracts to enable trustless transactions and data integrity.',
//         roles: [
//             {
//                 title: 'Blockchain Developer',
//                 description: [
//                     'Develops decentralized applications (dApps).',
//                     'Implements blockchain protocols and consensus algorithms.',
//                     'Integrates blockchain with web and mobile apps.',
//                     'Ensures security in blockchain transactions.',
//                     'Optimizes performance of blockchain networks.',
//                     'Tests and deploys blockchain solutions.',
//                     'Collaborates with cryptographers and engineers.'
//                 ]
//             },
//             {
//                 title: 'Smart Contract Engineer',
//                 description: [
//                     'Writes and audits smart contracts on Ethereum/Solidity.',
//                     'Ensures contracts are secure and bug-free.',
//                     'Tests contracts with unit and integration tests.',
//                     'Optimizes gas usage for efficiency.',
//                     'Deploys contracts to testnet and mainnet.',
//                     'Maintains documentation of contracts.',
//                     'Collaborates with blockchain developers.'
//                 ]
//             },
//             {
//                 title: 'Security Auditor',
//                 description: [
//                     'Performs audits of smart contracts and blockchain code.',
//                     'Identifies potential vulnerabilities and exploits.',
//                     'Recommends fixes for discovered issues.',
//                     'Monitors blockchain networks for suspicious activity.',
//                     'Works with developers to apply security patches.',
//                     'Ensures compliance with security standards.',
//                     'Conducts penetration tests on applications.'
//                 ]
//             },
//             {
//                 title: 'DApp Developer',
//                 description: [
//                     'Builds decentralized applications using blockchain APIs.',
//                     'Integrates smart contracts with frontend apps.',
//                     'Focuses on user-friendly Web3 interfaces.',
//                     'Implements wallet integration (MetaMask, WalletConnect).',
//                     'Tests applications across blockchain networks.',
//                     'Collaborates with UI/UX teams for usability.',
//                     'Deploys and maintains dApps on blockchain.'
//                 ]
//             }
//         ]
//     },
//     {
//         id: 'consulting',
//         name: 'Consulting',
//         icon: 'FaBriefcase',
//         color: '#fa709a',
//         description: 'Consulting provides strategic guidance to optimize technology and business processes, ensuring alignment with organizational goals.',
//         roles: [
//             {
//                 title: 'Technology Consultant',
//                 description: [
//                     'Advises organizations on the best tech solutions.',
//                     'Analyzes business processes for optimization.',
//                     'Recommends software and infrastructure improvements.',
//                     'Collaborates with teams on digital transformation.',
//                     'Evaluates vendors and third-party solutions.',
//                     'Ensures tech aligns with business goals.',
//                     'Provides training on new technologies.'
//                 ]
//             },
//             {
//                 title: 'Business Analyst',
//                 description: [
//                     'Gathers and documents business requirements.',
//                     'Bridges communication between stakeholders and developers.',
//                     'Creates functional specifications for solutions.',
//                     'Analyzes workflows and proposes improvements.',
//                     'Ensures solutions meet business needs.',
//                     'Conducts feasibility studies and gap analysis.',
//                     'Supports testing and validation phases.'
//                 ]
//             },
//             {
//                 title: 'Project Manager',
//                 description: [
//                     'Plans, executes, and monitors projects.',
//                     'Defines project scope, goals, and deliverables.',
//                     'Manages team tasks and deadlines.',
//                     'Monitors budget and resource allocation.',
//                     'Communicates progress with stakeholders.',
//                     'Mitigates project risks and challenges.',
//                     'Ensures timely delivery of project outcomes.'
//                 ]
//             },
//             {
//                 title: 'Change Management Specialist',
//                 description: [
//                     'Guides organizations through business transitions.',
//                     'Develops change management strategies.',
//                     'Trains employees on new processes and tools.',
//                     'Communicates changes effectively across teams.',
//                     'Monitors adoption rates and feedback.',
//                     'Identifies and resolves resistance to change.',
//                     'Ensures smooth implementation of initiatives.'
//                 ]
//             }
//         ]
//     }
// ];

export const departments = [
    {
        id: 'web-development',
        name: 'Web Development',
        icon: 'FaGlobe',
        color: '#667eea',
        description: 'Web Development involves building and maintaining websites and web applications to ensure optimal performance and user experience.',
        roles: [
            {
                title: 'Frontend Developer',
                description: 'The Frontend Developer at the company handles the creation of responsive user interfaces using HTML, CSS, and JavaScript frameworks. They collaborate closely with designers to maintain brand consistency across all digital assets. Additionally, they implement reusable UI components to promote scalability, optimize web pages for maximum speed and performance, and ensure compatibility across various browsers and devices. They also integrate APIs to enable dynamic content rendering and are responsible for debugging and troubleshooting any front-end issues that arise.'
            },
            {
                title: 'Backend Developer',
                description: 'The Backend Developer manages server-side logic and API development within the company. They oversee databases, handling data storage and retrieval efficiently. Implementing secure authentication and authorization mechanisms is a key part of their role, along with optimizing server performance for scalability. They work in tandem with frontend developers to integrate services seamlessly, adhere to application security best practices, and debug and maintain backend services to ensure smooth operations.'
            },
            {
                title: 'UI/UX Designer',
                description: 'The UI/UX Designer conducts thorough user research to understand customer needs and preferences. They design wireframes, prototypes, and mockups focused on usability and intuitive interactions. Collaborating with developers, they bring designs to life while creating consistent design systems and style guides. They perform usability testing, gather feedback, and iterate on designs based on user insights to enhance the overall user experience in the company.'
            },
            {
                title: 'DevOps Engineer',
                description: 'The DevOps Engineer automates deployment pipelines using CI/CD tools to streamline processes. They monitor infrastructure and application performance, implement scalable cloud solutions, and manage containerization and orchestration with tools like Docker and Kubernetes. Ensuring system reliability and uptime is crucial, as is setting up logging and monitoring solutions. They collaborate with developers to optimize workflows and maintain efficient operations across the company.'
            }
        ]
    },
    {
        id: 'mobile-app',
        name: 'Mobile App',
        icon: 'FaMobileAlt',
        color: '#764ba2',
        description: 'Mobile App Development focuses on creating native or cross-platform applications for iOS and Android devices, delivering seamless user experiences.',
        roles: [
            {
                title: 'Mobile App Developer',
                description: 'The Mobile App Developer builds native and cross-platform mobile applications tailored to user needs. They integrate backend APIs with mobile apps, apply mobile-friendly UI/UX principles, and optimize performance and battery usage. Conducting debugging and troubleshooting on various devices is essential, as is publishing and maintaining apps in app stores. They collaborate with designers and QA engineers to deliver high-quality mobile solutions in the company.'
            },
            {
                title: 'UI/UX Designer',
                description: 'The UI/UX Designer specializes in creating engaging mobile-first interfaces. They develop prototypes and user flows optimized for mobile experiences, ensuring designs are touch-friendly and accessible. Working with developers, they ensure seamless integration, conduct usability tests on different devices, and improve user engagement through thoughtful design. They also maintain consistent branding across all platforms within the company.'
            },
            {
                title: 'QA Engineer',
                description: 'The QA Engineer performs functional, integration, and regression testing on mobile apps. They write and execute test cases, ensure compatibility across devices and OS versions, and automate testing using frameworks like Appium. Reporting and tracking bugs throughout the lifecycle is key, as is collaborating with developers to resolve issues and validating app performance under various conditions to uphold quality standards in the company.'
            },
            {
                title: 'App Store Specialist',
                description: 'The App Store Specialist manages submissions and updates to app stores, optimizing listings with SEO-friendly content. They monitor app performance, ratings, and compliance with guidelines. Coordinating user acquisition and retention strategies, tracking analytics and usage metrics, and implementing monetization approaches are all part of their role in driving app success within the company.'
            }
        ]
    },
    {
        id: 'ai-ml',
        name: 'AI/ML Solutions',
        icon: 'FaRobot',
        color: '#f093fb',
        description: 'AI/ML Solutions leverage artificial intelligence and machine learning to provide data-driven insights and automation for businesses.',
        roles: [
            {
                title: 'Data Scientist',
                description: 'The Data Scientist collects and preprocesses structured and unstructured data to build statistical and predictive models. They visualize insights using data tools and collaborate with business teams to define requirements. Deploying machine learning solutions into production, performing data cleaning and transformation, and monitoring model performance are critical responsibilities they handle in the company.'
            },
            {
                title: 'Machine Learning Engineer',
                description: 'The Machine Learning Engineer designs and trains ML models for automation and prediction tasks. They optimize algorithms for scalability, implement feature engineering, and deploy models in cloud or edge environments. Monitoring for model drift, retraining as needed, working with data scientists to scale solutions, and ensuring reproducibility in ML pipelines are key aspects of their role in the company.'
            },
            {
                title: 'AI Researcher',
                description: 'The AI Researcher explores new algorithms and techniques, publishing findings in journals and collaborating with universities and R&D teams. They prototype AI solutions for real-world challenges, focusing on areas like NLP, computer vision, or robotics. Developing experimental architectures and testing ethical AI applications are part of their innovative work in the company.'
            },
            {
                title: 'Data Analyst',
                description: 'The Data Analyst analyzes datasets to identify trends and patterns, preparing dashboards and reports for stakeholders. They assist in decision-making with actionable insights, clean raw data for reporting, and use tools like SQL, Excel, and BI software. Collaborating with data engineers for access pipelines and validating reporting metrics ensure accurate data-driven strategies in the company.'
            }
        ]
    },
    {
        id: 'e-commerce',
        name: 'E-commerce',
        icon: 'FaShoppingCart',
        color: '#4facfe',
        description: 'E-commerce Development creates robust online stores with secure payment systems, user-friendly interfaces, and scalable architectures.',
        roles: [
            {
                title: 'E-commerce Developer',
                description: 'The E-commerce Developer builds and customizes e-commerce platforms, integrating secure payment gateways and developing product catalog and inventory systems. They ensure responsive shopping experiences, implement search and recommendation systems, troubleshoot store functionality, and collaborate with marketing teams to add features that enhance online retail operations in the company.'
            },
            {
                title: 'Payment Integration Specialist',
                description: 'The Payment Integration Specialist implements secure online payment solutions, working with providers like Stripe and PayPal. They ensure PCI-DSS compliance, troubleshoot transaction issues, implement fraud detection, maintain logs and monitoring, and optimize checkout flows to improve conversion rates within the company\'s e-commerce ecosystem.'
            },
            {
                title: 'SEO Specialist',
                description: 'The SEO Specialist optimizes website content for search engines, conducts keyword research for product listings, and improves rankings through link building. They monitor site analytics, collaborate with content writers for SEO-friendly text, implement technical improvements, and stay updated with algorithm changes to boost visibility and traffic for the company.'
            },
            {
                title: 'Digital Marketer',
                description: 'The Digital Marketer creates and manages online campaigns, optimizing for ROI and conversions. They run social media and email strategies, analyze performance with analytics tools, coordinate with SEO and content teams, implement retargeting, and manage paid ads across platforms like Google and Meta to drive growth in the company.'
            }
        ]
    },
    {
        id: 'blockchain',
        name: 'Blockchain',
        icon: 'FaLink',
        color: '#43e97b',
        description: 'Blockchain Development builds secure, decentralized applications and smart contracts to enable trustless transactions and data integrity.',
        roles: [
            {
                title: 'Blockchain Developer',
                description: 'The Blockchain Developer develops decentralized applications (dApps), implements protocols and consensus algorithms, and integrates blockchain with web and mobile apps. They ensure transaction security, optimize network performance, test and deploy solutions, and collaborate with cryptographers and engineers to advance blockchain initiatives in the company.'
            },
            {
                title: 'Smart Contract Engineer',
                description: 'The Smart Contract Engineer writes and audits contracts using Ethereum and Solidity, ensuring they are secure and bug-free. They conduct unit and integration tests, optimize gas usage, deploy to testnet and mainnet, maintain documentation, and work with blockchain developers to support reliable smart contract functionality in the company.'
            },
            {
                title: 'Security Auditor',
                description: 'The Security Auditor performs audits on smart contracts and blockchain code, identifying vulnerabilities and recommending fixes. They monitor networks for suspicious activity, collaborate with developers on security patches, ensure compliance with standards, and conduct penetration tests to safeguard applications in the company.'
            },
            {
                title: 'DApp Developer',
                description: 'The DApp Developer builds decentralized applications using blockchain APIs, integrates smart contracts with frontend apps, and focuses on user-friendly Web3 interfaces. They implement wallet integrations like MetaMask, test across networks, collaborate with UI/UX teams for usability, and deploy and maintain dApps on blockchain platforms in the company.'
            }
        ]
    },
    {
        id: 'consulting',
        name: 'Consulting',
        icon: 'FaBriefcase',
        color: '#fa709a',
        description: 'Consulting provides strategic guidance to optimize technology and business processes, ensuring alignment with organizational goals.',
        roles: [
            {
                title: 'Technology Consultant',
                description: 'The Technology Consultant advises organizations on optimal tech solutions, analyzes business processes for improvements, and recommends software and infrastructure enhancements. They collaborate on digital transformation, evaluate vendors, align tech with business goals, and provide training on new technologies to support the company\'s consulting services.'
            },
            {
                title: 'Business Analyst',
                description: 'The Business Analyst gathers and documents business requirements, bridges communication between stakeholders and developers, and creates functional specifications. They analyze workflows, propose improvements, ensure solutions meet needs, conduct feasibility studies and gap analysis, and support testing phases to facilitate effective project outcomes in the company.'
            },
            {
                title: 'Project Manager',
                description: 'The Project Manager plans, executes, and monitors projects, defining scope, goals, and deliverables. They manage team tasks and deadlines, oversee budget and resources, communicate progress to stakeholders, mitigate risks, and ensure timely delivery to maintain project success within the company.'
            },
            {
                title: 'Change Management Specialist',
                description: 'The Change Management Specialist guides organizations through transitions, develops strategies, and trains employees on new processes and tools. They communicate changes effectively, monitor adoption and feedback, identify and resolve resistance, and ensure smooth implementation of initiatives to support organizational change in the company.'
            }
        ]
    }
];


// Department-specific roadmap steps
export const roadmapStepsData = {
    'web-development': [
        {
            id: 1,
            title: "Initial Consultation",
            description: "Discuss your web project requirements and goals",
            icon: "FaPhone",
            duration: "1-2 days",
            details: ["Project brief discussion", "Technology stack selection", "Timeline estimation"]
        },
        {
            id: 2,
            title: "Design & Planning",
            description: "Create wireframes, mockups, and technical architecture",
            icon: "FaPaintBrush",
            duration: "5-7 days",
            details: ["UI/UX design", "Database design", "API planning", "Responsive design"]
        },
        {
            id: 3,
            title: "Development Phase",
            description: "Build your website with modern technologies",
            icon: "FaLaptopCode",
            duration: "2-8 weeks",
            details: ["Frontend development", "Backend development", "Database implementation", "Third-party integrations"]
        },
        {
            id: 4,
            title: "Testing & Quality Assurance",
            description: "Comprehensive testing across all devices and browsers",
            icon: "FaFlask",
            duration: "3-5 days",
            details: ["Functionality testing", "Performance optimization", "Security testing", "Cross-browser testing"]
        },
        {
            id: 5,
            title: "Deployment & Launch",
            description: "Deploy to production and go live",
            icon: "FaRocket",
            duration: "1-2 days",
            details: ["Server setup", "Domain configuration", "SSL certificate", "Go-live checklist"]
        },
        {
            id: 6,
            title: "Maintenance & Support",
            description: "Ongoing support and updates",
            icon: "FaWrench",
            duration: "Ongoing",
            details: ["Bug fixes", "Content updates", "Performance monitoring", "Security updates"]
        }
    ],
    'mobile-app': [
        {
            id: 1,
            title: "App Strategy & Planning",
            description: "Define app concept, target audience, and platform strategy",
            icon: "FaListAlt",
            duration: "3-5 days",
            details: ["Market research", "User personas", "Platform selection", "Feature prioritization"]
        },
        {
            id: 2,
            title: "UI/UX Design",
            description: "Create intuitive and engaging mobile interfaces",
            icon: "FaPaintBrush",
            duration: "7-10 days",
            details: ["Wireframing", "Prototyping", "Visual design", "User testing"]
        },
        {
            id: 3,
            title: "App Development",
            description: "Build native or cross-platform mobile application",
            icon: "FaMobileAlt",
            duration: "4-12 weeks",
            details: ["Native development", "API integration", "Push notifications", "Offline functionality"]
        },
        {
            id: 4,
            title: "Testing & Optimization",
            description: "Test across devices and optimize performance",
            icon: "FaSearch",
            duration: "5-7 days",
            details: ["Device testing", "Performance optimization", "Bug fixing", "App store guidelines"]
        },
        {
            id: 5,
            title: "App Store Submission",
            description: "Submit to app stores and manage approval process",
            icon: "FaUpload",
            duration: "3-7 days",
            details: ["App store optimization", "Metadata preparation", "Review process", "Publication"]
        },
        {
            id: 6,
            title: "Post-Launch Support",
            description: "Monitor performance and provide ongoing updates",
            icon: "FaChartLine",
            duration: "Ongoing",
            details: ["Analytics monitoring", "User feedback", "Regular updates", "Feature enhancements"]
        }
    ],
    'ai-ml': [
        {
            id: 1,
            title: "Data Assessment",
            description: "Analyze your data and define AI/ML objectives",
            icon: "FaChartLine",
            duration: "5-7 days",
            details: ["Data quality analysis", "Problem definition", "Success metrics", "Data collection strategy"]
        },
        {
            id: 2,
            title: "Model Development",
            description: "Build and train machine learning models",
            icon: "FaBrain",
            duration: "2-6 weeks",
            details: ["Algorithm selection", "Model training", "Feature engineering", "Hyperparameter tuning"]
        },
        {
            id: 3,
            title: "Model Validation",
            description: "Test and validate model performance",
            icon: "FaCheckCircle",
            duration: "3-5 days",
            details: ["Cross-validation", "Performance metrics", "Bias detection", "Model comparison"]
        },
        {
            id: 4,
            title: "Integration & Deployment",
            description: "Integrate AI solution into your existing systems",
            icon: "FaLink",
            duration: "1-2 weeks",
            details: ["API development", "System integration", "Scalability setup", "Monitoring implementation"]
        },
        {
            id: 5,
            title: "Performance Monitoring",
            description: "Monitor model performance and accuracy",
            icon: "FaChartLine",
            duration: "Ongoing",
            details: ["Real-time monitoring", "Model drift detection", "Performance tracking", "Alert systems"]
        },
        {
            id: 6,
            title: "Continuous Improvement",
            description: "Iterate and improve the AI solution",
            icon: "FaSyncAlt",
            duration: "Ongoing",
            details: ["Model retraining", "Feature updates", "Performance optimization", "New data integration"]
        }
    ],
    'e-commerce': [
        {
            id: 1,
            title: "E-commerce Strategy",
            description: "Define your online business strategy and requirements",
            icon: "FaLightbulb",
            duration: "3-5 days",
            details: ["Business model analysis", "Target market research", "Competitor analysis", "Revenue projections"]
        },
        {
            id: 2,
            title: "Platform Selection",
            description: "Choose the right e-commerce platform and technology",
            icon: "FaShoppingCart",
            duration: "2-3 days",
            details: ["Platform comparison", "Custom vs. SaaS", "Payment gateway selection", "Hosting decisions"]
        },
        {
            id: 3,
            title: "Design & Development",
            description: "Create your online store with custom features",
            icon: "FaPaintBrush",
            duration: "3-8 weeks",
            details: ["Store design", "Product catalog setup", "Shopping cart", "Checkout process"]
        },
        {
            id: 4,
            title: "Payment & Security",
            description: "Implement secure payment processing and security measures",
            icon: "FaLock",
            duration: "3-5 days",
            details: ["Payment integration", "SSL certificates", "PCI compliance", "Security testing"]
        },
        {
            id: 5,
            title: "Testing & Launch",
            description: "Test all functionality and launch your store",
            icon: "FaRocket",
            duration: "2-3 days",
            details: ["End-to-end testing", "Performance optimization", "SEO setup", "Go-live preparation"]
        },
        {
            id: 6,
            title: "Marketing & Analytics",
            description: "Set up marketing tools and analytics tracking",
            icon: "FaChartLine",
            duration: "Ongoing",
            details: ["Analytics setup", "Marketing automation", "SEO optimization", "Conversion tracking"]
        }
    ],
    'blockchain': [
        {
            id: 1,
            title: "Blockchain Strategy",
            description: "Define blockchain use case and technical requirements",
            icon: "FaLink",
            duration: "5-7 days",
            details: ["Use case analysis", "Blockchain selection", "Consensus mechanism", "Token economics"]
        },
        {
            id: 2,
            title: "Smart Contract Development",
            description: "Develop and test smart contracts",
            icon: "FaFileContract",
            duration: "2-4 weeks",
            details: ["Contract architecture", "Code development", "Security audits", "Testing protocols"]
        },
        {
            id: 3,
            title: "DApp Development",
            description: "Build decentralized application frontend and backend",
            icon: "FaNetworkWired",
            duration: "3-8 weeks",
            details: ["Frontend development", "Web3 integration", "User interface", "Wallet integration"]
        },
        {
            id: 4,
            title: "Testing & Security",
            description: "Comprehensive testing and security audits",
            icon: "FaLock",
            duration: "1-2 weeks",
            details: ["Penetration testing", "Smart contract audits", "Vulnerability assessment", "Security hardening"]
        },
        {
            id: 5,
            title: "Deployment & Launch",
            description: "Deploy to blockchain network and launch",
            icon: "FaRocket",
            duration: "2-3 days",
            details: ["Mainnet deployment", "Node setup", "Network configuration", "Public launch"]
        },
        {
            id: 6,
            title: "Maintenance & Updates",
            description: "Ongoing maintenance and feature updates",
            icon: "FaWrench",
            duration: "Ongoing",
            details: ["Node maintenance", "Contract updates", "Performance monitoring", "Community support"]
        }
    ],
    'consulting': [
        {
            id: 1,
            title: "Initial Assessment",
            description: "Evaluate your current technology and business processes",
            icon: "FaSearch",
            duration: "3-5 days",
            details: ["Current state analysis", "Gap identification", "Stakeholder interviews", "Documentation review"]
        },
        {
            id: 2,
            title: "Strategy Development",
            description: "Create comprehensive technology and business strategy",
            icon: "FaListAlt",
            duration: "5-7 days",
            details: ["Strategic planning", "Technology roadmap", "Implementation timeline", "Resource allocation"]
        },
        {
            id: 3,
            title: "Solution Design",
            description: "Design tailored solutions for your specific needs",
            icon: "FaBullseye",
            duration: "1-2 weeks",
            details: ["Solution architecture", "Technology selection", "Process optimization", "Change management"]
        },
        {
            id: 4,
            title: "Implementation Planning",
            description: "Create detailed implementation plan and timeline",
            icon: "FaCalendarAlt",
            duration: "2-3 days",
            details: ["Project planning", "Resource allocation", "Risk assessment", "Milestone definition"]
        },
        {
            id: 5,
            title: "Execution Support",
            description: "Provide guidance and support during implementation",
            icon: "FaHandshake",
            duration: "Ongoing",
            details: ["Project management", "Technical guidance", "Team training", "Quality assurance"]
        },
        {
            id: 6,
            title: "Review & Optimization",
            description: "Review results and optimize for continuous improvement",
            icon: "FaChartLine",
            duration: "Ongoing",
            details: ["Performance review", "KPI analysis", "Process optimization", "Future planning"]
        }
    ]
};