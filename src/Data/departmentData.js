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
export const departments = [
    {
        id: 'web-development',
        name: 'Web Development',
        icon: 'FaGlobe',
        color: '#667eea',
        description: 'Web Development involves building and maintaining websites and web applications to ensure optimal performance and user experience.',
        roles: ['Frontend Developer', 'Backend Developer', 'UI/UX Designer', 'DevOps Engineer']
    },
    {
        id: 'mobile-app',
        name: 'Mobile App',
        icon: 'FaMobileAlt',
        color: '#764ba2',
        description: 'Mobile App Development focuses on creating native or cross-platform applications for iOS and Android devices, delivering seamless user experiences.',
        roles: ['Mobile App Developer', 'UI/UX Designer', 'QA Engineer', 'App Store Specialist']
    },
    {
        id: 'ai-ml',
        name: 'AI/ML Solutions',
        icon: 'FaRobot',
        color: '#f093fb',
        description: 'AI/ML Solutions leverage artificial intelligence and machine learning to provide data-driven insights and automation for businesses.',
        roles: ['Data Scientist', 'Machine Learning Engineer', 'AI Researcher', 'Data Analyst']
    },
    {
        id: 'e-commerce',
        name: 'E-commerce',
        icon: 'FaShoppingCart',
        color: '#4facfe',
        description: 'E-commerce Development creates robust online stores with secure payment systems, user-friendly interfaces, and scalable architectures.',
        roles: ['E-commerce Developer', 'Payment Integration Specialist', 'SEO Specialist', 'Digital Marketer']
    },
    {
        id: 'blockchain',
        name: 'Blockchain',
        icon: 'FaLink',
        color: '#43e97b',
        description: 'Blockchain Development builds secure, decentralized applications and smart contracts to enable trustless transactions and data integrity.',
        roles: ['Blockchain Developer', 'Smart Contract Engineer', 'Security Auditor', 'DApp Developer']
    },
    {
        id: 'consulting',
        name: 'Consulting',
        icon: 'FaBriefcase',
        color: '#fa709a',
        description: 'Consulting provides strategic guidance to optimize technology and business processes, ensuring alignment with organizational goals.',
        roles: ['Technology Consultant', 'Business Analyst', 'Project Manager', 'Change Management Specialist']
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