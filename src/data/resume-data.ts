import { ExperienceItem, SkillCategory, ProjectItem, EducationItem, PipelineStage } from '@/types';

export const PERSONAL_INFO = {
  name: 'Anandhu Chandran',
  title: 'DevOps Engineer',
  tagline: 'CI/CD Automation • Containerization • Infrastructure Management',
  summary:
    'Results-driven DevOps Engineer with 2+ years of experience in CI/CD automation, containerization, and infrastructure management within Linux environments. Skilled in Jenkins, Docker, Ansible, Bash/Groovy scripting, Kubernetes (basic), Terraform (Infrastructure as Code), and JFrog Artifactory. Experienced in building scalable microservices architectures, implementing Liquibase for database versioning, and designing monitoring solutions using Grafana and ELK Stack.',
  email: 'anandhuchandran011999@gmail.com',
  phone: '+91-6282532876',
  linkedin: 'https://linkedin.com/in/anandhuchandran',
  github: 'https://github.com/anandhuchandran',
  location: 'Kerala, India',
  resumeFile: '/Anandhu-DevOps.pdf',
  profilePhoto: '/profile-photo.jpg',
  status: 'Open to DevOps & Cloud Engineer Opportunities',
};

export const METRICS = [
  {
    value: '40%',
    label: 'Deployment Time Reduction',
    detail: 'Achieved by designing and optimizing automated Jenkins CI/CD pipelines',
  },
  {
    value: '60%',
    label: 'Configuration Error Reduction',
    detail: 'Eliminated manual deployment mistakes via Ansible automation',
  },
  {
    value: '2+ Years',
    label: 'DevOps & Linux Experience',
    detail: 'Continuous integration, containerization & infrastructure operations',
  },
  {
    value: '100%',
    label: 'Automated DB Versioning',
    detail: 'Reliable schema migration and version control using Liquibase',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'CI/CD & Version Control',
    description: 'Pipeline automation, branching strategies, and release workflows',
    iconName: 'GitBranch',
    skills: [
      { name: 'Jenkins', level: 'Production', description: 'Declarative & Scripted Pipelines' },
      { name: 'Git', level: 'Production', description: 'Repository management & branch strategies' },
    ],
  },
  {
    title: 'Containerization & Orchestration',
    description: 'Packaging microservices and managing container lifecycle',
    iconName: 'Box',
    skills: [
      { name: 'Docker', level: 'Production', description: 'Multi-stage builds & containerization' },
      { name: 'Kubernetes', level: 'Basic', description: 'Container orchestration & pod deployment' },
    ],
  },
  {
    title: 'Configuration Management',
    description: 'Automating multi-node server setup and configuration drift prevention',
    iconName: 'Cpu',
    skills: [
      { name: 'Ansible', level: 'Production', description: 'Playbooks, roles & automated deployment' },
    ],
  },
  {
    title: 'Infrastructure as Code (IaC)',
    description: 'Declarative cloud infrastructure provisioning and state management',
    iconName: 'Layers',
    skills: [
      { name: 'Terraform', level: 'Learning & Practice', description: 'Provisioning AWS cloud infrastructure' },
    ],
  },
  {
    title: 'Scripting & Automation',
    description: 'Task automation, pipeline scripts, and system health checks',
    iconName: 'Terminal',
    skills: [
      { name: 'Bash', level: 'Production', description: 'Shell automation & system scripting' },
      { name: 'Groovy', level: 'Production', description: 'Jenkins pipeline scripts & shared libraries' },
    ],
  },
  {
    title: 'Monitoring & Logging',
    description: 'Centralized observability, system metrics, and log aggregation',
    iconName: 'Activity',
    skills: [
      { name: 'Grafana', level: 'Production', description: 'Visual telemetry & infrastructure dashboards' },
      { name: 'ELK Stack', level: 'Production', description: 'Elasticsearch, Logstash, Kibana log management' },
    ],
  },
  {
    title: 'Artifacts & Database Versioning',
    description: 'Binary package storage and automated schema synchronization',
    iconName: 'Database',
    skills: [
      { name: 'JFrog Artifactory', level: 'Production', description: 'Build artifacts & dependency versioning' },
      { name: 'Liquibase', level: 'Production', description: 'Automated database schema migrations' },
    ],
  },
  {
    title: 'Cloud, Systems & Architecture',
    description: 'Operating system tuning, cloud primitives, and data flows',
    iconName: 'Cloud',
    skills: [
      { name: 'Linux (Ubuntu, CentOS)', level: 'Production', description: 'Kernel tuning, system administration' },
      { name: 'AWS (EC2, S3)', level: 'Applied', description: 'Compute instances & object storage' },
      { name: 'Apache NiFi', level: 'Applied', description: 'Automated data pipeline routing' },
      { name: 'Microservices', level: 'Production', description: 'Distributed service architectures' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'muziris-devops',
    role: 'DevOps Engineer',
    company: 'Muziris Softech (P) Ltd',
    period: 'Jan 2025 – Present',
    startDate: 'Jan 2025',
    endDate: 'Present',
    isCurrent: true,
    type: 'Full-time',
    responsibilities: [
      'Designed and maintained CI/CD pipelines using Jenkins, reducing deployment time by 40%.',
      'Containerized applications using Docker for consistent multi-environment deployments.',
      'Automated deployments using Ansible, reducing manual configuration errors by 60%.',
      'Managed artifacts and build versions using JFrog Artifactory.',
      'Developed Bash and Groovy scripts for automation and monitoring tasks.',
      'Implemented Liquibase for automated database schema migration and version control.',
      'Built monitoring dashboards using Grafana and centralized logging using ELK Stack.',
      'Worked with Kubernetes (basic) for container orchestration and deployment management.',
      'Practicing infrastructure provisioning using Terraform for AWS environments.',
    ],
    technologies: [
      'Jenkins',
      'Docker',
      'Ansible',
      'JFrog Artifactory',
      'Bash',
      'Groovy',
      'Liquibase',
      'Grafana',
      'ELK Stack',
      'Kubernetes',
      'Terraform',
      'AWS',
      'Linux',
    ],
    metrics: [
      { label: 'Deployment Time', value: '-40%' },
      { label: 'Configuration Errors', value: '-60%' },
    ],
  },
  {
    id: 'muziris-svc',
    role: 'Software Version Controller',
    company: 'Muziris Softech (P) Ltd',
    period: 'May 2022 – Dec 2024',
    startDate: 'May 2022',
    endDate: 'Dec 2024',
    isCurrent: false,
    type: 'Full-time',
    responsibilities: [
      'Managed Git repositories, branching strategies, and release workflows.',
      'Optimized Linux production environments for performance and scalability.',
      'Collaborated with development teams to improve deployment reliability.',
      'Promoted DevOps culture and CI/CD best practices across teams.',
    ],
    technologies: [
      'Git',
      'Linux (Ubuntu, CentOS)',
      'Release Workflows',
      'Branching Strategies',
      'CI/CD Best Practices',
      'Bash Scripting',
    ],
    metrics: [
      { label: 'Role Duration', value: '2 yrs 8 mos' },
      { label: 'Environment', value: 'Ubuntu / CentOS' },
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'jenkins-cicd-pipeline',
    title: 'Automated CI/CD & Artifact Release Pipeline',
    category: 'Continuous Integration & Delivery',
    architectureStage: 'CI/CD',
    description:
      'Engineered enterprise continuous integration and deployment pipelines using Jenkins and Groovy scripting, automating application build, test, Docker packaging, and pushing versioned artifacts to JFrog Artifactory.',
    impact: 'Accelerated release velocity by slashing end-to-end deployment time by 40%.',
    technologies: ['Jenkins', 'Groovy', 'Docker', 'JFrog Artifactory', 'Git', 'Linux'],
    highlights: [
      'Automated multi-stage build and test pipelines with custom Groovy scripts',
      'Integrated JFrog Artifactory for binary versioning and artifact consistency',
      'Standardized release gates to prevent untested code from reaching staging environments',
    ],
  },
  {
    id: 'ansible-deployment-automation',
    title: 'Configuration Management & Deployment Automation',
    category: 'Infrastructure Automation',
    architectureStage: 'IaC & Config',
    description:
      'Developed declarative Ansible playbooks and Bash automation routines to configure Linux (Ubuntu/CentOS) hosts and deploy application updates reliably across multiple environments.',
    impact: 'Reduced manual configuration and deployment errors by 60%.',
    technologies: ['Ansible', 'Bash', 'Linux (Ubuntu, CentOS)', 'SSH', 'Git'],
    highlights: [
      'Authored idempotent Ansible playbooks for system configuration and software updates',
      'Eliminated server configuration drift across development, staging, and production',
      'Implemented automated rollback routines to protect system availability',
    ],
  },
  {
    id: 'observability-elk-grafana',
    title: 'Centralized Logging & Observability Platform',
    category: 'Monitoring & Telemetry',
    architectureStage: 'Observability',
    description:
      'Designed and deployed full-stack monitoring dashboards using Grafana and configured centralized log collection, indexing, and visualization via the ELK Stack (Elasticsearch, Logstash, Kibana).',
    impact: 'Provided unified real-time visibility into microservices health and system logs.',
    technologies: ['Grafana', 'ELK Stack', 'Elasticsearch', 'Logstash', 'Kibana', 'Linux'],
    highlights: [
      'Built Grafana operational dashboards tracking infrastructure metrics and service health',
      'Streamlined log analysis by ingesting distributed server logs into Elasticsearch',
      'Reduced mean time to resolution (MTTR) by enabling fast query-based troubleshooting',
    ],
  },
  {
    id: 'liquibase-database-versioning',
    title: 'Automated Database Schema Migration System',
    category: 'Database CI/CD',
    architectureStage: 'Database',
    description:
      'Implemented Liquibase to automate database schema migrations and establish version-controlled changelogs integrated directly into the CI/CD pipeline.',
    impact: 'Eliminated manual SQL execution errors and ensured schema parity across all environments.',
    technologies: ['Liquibase', 'Git', 'Jenkins', 'Linux', 'SQL'],
    highlights: [
      'Managed schema versioning via declarative Liquibase changelogs tracked in Git',
      'Automated database updates during deployment with rollback capabilities',
      'Ensured seamless database consistency across development, testing, and production',
    ],
  },
  {
    id: 'microservices-containerization-cloud',
    title: 'Microservices Containerization & Cloud Infrastructure',
    category: 'Cloud & Containers',
    architectureStage: 'Containers',
    description:
      'Containerized monolithic and microservices workloads using Docker for uniform multi-environment deployment, managed basic orchestration with Kubernetes, and practiced cloud resource provisioning using Terraform on AWS (EC2, S3).',
    impact: 'Established immutable, repeatable application containers and reproducible cloud environments.',
    technologies: ['Docker', 'Kubernetes (Basic)', 'Terraform', 'AWS (EC2, S3)', 'Microservices'],
    highlights: [
      'Designed optimized multi-stage Dockerfiles for minimal container image sizes',
      'Configured basic Kubernetes manifests for service deployment and pod management',
      'Provisioned and managed AWS infrastructure resources using declarative Terraform code',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'btech-cse',
    institution: 'Mangalam College of Engineering, Ettumanoor',
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    period: '2016 – 2020',
    location: 'Kerala, India',
  },
  {
    id: 'higher-secondary',
    institution: 'Govt. Tribal Higher Secondary School, Murikkattukudy',
    degree: 'Higher Secondary Education',
    period: '2014 – 2016',
    location: 'Kerala, India',
  },
];

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'code',
    step: '01',
    name: 'Version & Branch',
    tools: ['Git', 'Branching Strategy'],
    description: 'Repository governance, feature branching, release workflows, and code hygiene.',
    color: 'border-cyan-500/40 text-cyan-400',
  },
  {
    id: 'build',
    step: '02',
    name: 'Build & CI Automation',
    tools: ['Jenkins', 'Groovy Scripts'],
    description: 'Automated test execution, pipeline orchestration, and build validation.',
    color: 'border-blue-500/40 text-blue-400',
  },
  {
    id: 'artifact',
    step: '03',
    name: 'Artifact & DB Version',
    tools: ['JFrog Artifactory', 'Liquibase'],
    description: 'Immutable artifact storage, build version tracking, and schema migrations.',
    color: 'border-indigo-500/40 text-indigo-400',
  },
  {
    id: 'package',
    step: '04',
    name: 'Containerization',
    tools: ['Docker', 'Microservices'],
    description: 'Building multi-stage container images and consistent runtime environments.',
    color: 'border-emerald-500/40 text-emerald-400',
  },
  {
    id: 'deploy',
    step: '05',
    name: 'Provision & Deploy',
    tools: ['Ansible', 'Terraform', 'Kubernetes'],
    description: 'Idempotent configuration, AWS infrastructure provisioning, and container deployment.',
    color: 'border-amber-500/40 text-amber-400',
  },
  {
    id: 'monitor',
    step: '06',
    name: 'Observability & Logs',
    tools: ['Grafana', 'ELK Stack'],
    description: 'Centralized log aggregation, telemetry dashboards, and system performance monitoring.',
    color: 'border-violet-500/40 text-violet-400',
  },
];
