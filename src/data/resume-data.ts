import { ExperienceItem, SkillCategory, ProjectItem, EducationItem } from '@/types';

export const PERSONAL_INFO = {
  name: 'Anandhu Chandran',
  title: 'DevOps Engineer',
  tagline: 'CI/CD Automation • GitHub Actions • Jenkins • Docker • Ansible • Linux • AWS',
  summary:
    'Hands-on DevOps Engineer with strong CI/CD and deployment automation experience. Skilled in Jenkins, GitHub Actions with self-hosted runners, Docker containerization, Ansible configuration management, and Linux administration, with ongoing practice in AWS, Terraform, and Kubernetes.',
  email: 'anandhuchandran011999@gmail.com',
  phone: '+91-6282532876',
  linkedin: 'https://linkedin.com/in/anandhuchandran',
  github: 'https://github.com/anandhuchandran',
  location: 'Kerala, India',
  resumeFile: '/Anandhu-DevOps-Engineer-Resume.pdf',
  profilePhoto: '/profile-photo.jpg',
  status: 'Open to DevOps & Cloud Engineer Opportunities',
};

export interface CoreTechItem {
  name: string;
  role: string;
}

export const CORE_TECH_STACK: CoreTechItem[] = [
  { name: 'Jenkins', role: 'CI/CD Pipelines' },
  { name: 'GitHub Actions', role: 'Self-Hosted Deployments' },
  { name: 'Docker', role: 'Containerization' },
  { name: 'Ansible', role: 'Config Automation' },
  { name: 'Kubernetes', role: 'Orchestration (Basic)' },
  { name: 'AWS', role: 'Cloud (EC2, S3)' },
  { name: 'Terraform', role: 'IaC (Practice)' },
  { name: 'Grafana', role: 'Dashboards' },
  { name: 'Slack', role: 'ChatOps & Alerts' },
  { name: 'Linux', role: 'Ubuntu & CentOS' },
  { name: 'Git', role: 'Version Control' },
  { name: 'JFrog Artifactory', role: 'Artifact Repository' },
  { name: 'Liquibase', role: 'Database DevOps' },
  { name: 'ELK Stack', role: 'Centralized Logging' },
  { name: 'Apache NiFi', role: 'Data Flows' },
];

const handsOn = 'Hands-on';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'CI/CD & Automation',
    description: 'Automating build pipelines, target deployments, and operational delivery.',
    iconName: 'Workflow',
    skills: [
      { name: 'Jenkins', level: handsOn, description: 'Declarative CI/CD pipeline engineering & maintenance' },
      { name: 'GitHub Actions', level: handsOn, description: 'Workflow automation & direct server deployments' },
      { name: 'GitHub Actions Self-Hosted Runners', level: handsOn, description: 'Direct deployment operations in target server environments' },
      { name: 'Build & Deployment Automation', level: handsOn, description: 'Consistent multi-environment application rollouts' },
    ],
  },
  {
    title: 'Containerization & Orchestration',
    description: 'Application containerization, lifecycle automation, and cluster management.',
    iconName: 'Box',
    skills: [
      { name: 'Docker', level: handsOn, description: 'Multi-stage builds, container lifecycle & restart automation' },
      { name: 'Docker Compose', level: handsOn, description: 'Containerized application service configuration' },
      { name: 'Kubernetes', level: 'Basic', description: 'Basic pods and deployment management' },
    ],
  },
  {
    title: 'Configuration Management',
    description: 'Repeatable server provisioning and automated application deployment.',
    iconName: 'Settings2',
    skills: [
      { name: 'Ansible', level: handsOn, description: 'Modular playbooks for automated provisioning & deployments' },
      { name: 'Playbooks', level: handsOn, description: 'Repeatable provisioning and deployment automation' },
      { name: 'Roles', level: handsOn, description: 'Reusable Ansible automation structure' },
      { name: 'Inventory', level: handsOn, description: 'Target environment configuration' },
      { name: 'Automated Provisioning', level: handsOn, description: 'Consistent server setup and application rollout' },
    ],
  },
  {
    title: 'Infrastructure as Code',
    description: 'Declarative cloud infrastructure definition and provisioning practice.',
    iconName: 'Layers',
    skills: [
      { name: 'Terraform', level: 'Foundational Practice', description: 'Infrastructure provisioning practice for AWS EC2 and S3 resources' },
    ],
  },
  {
    title: 'Cloud',
    description: 'Cloud computing and storage services in Linux production environments.',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS', level: handsOn, description: 'Cloud infrastructure administration and resource operations' },
      { name: 'EC2', level: handsOn, description: 'Virtual compute instances & operational maintenance' },
      { name: 'S3', level: handsOn, description: 'Scalable object storage & artifact backup operations' },
      { name: 'IAM Basics', level: 'Basic', description: 'Foundational AWS identity and access management knowledge' },
    ],
  },
  {
    title: 'Version Control',
    description: 'Source code management, branching strategies, and release control.',
    iconName: 'GitBranch',
    skills: [
      { name: 'Git', level: handsOn, description: 'Enterprise Git branching, tagging & release management' },
      { name: 'GitHub', level: handsOn, description: 'Repository administration & Actions integration' },
      { name: 'Gitea', level: handsOn, description: 'Self-hosted Git repository management' },
      { name: 'GitFlow', level: handsOn, description: 'Structured branching and release workflows' },
      { name: 'Release Workflows', level: handsOn, description: 'Version-controlled release coordination' },
    ],
  },
  {
    title: 'Monitoring & Logging',
    description: 'Operational metrics dashboards and centralized log analysis.',
    iconName: 'Activity',
    skills: [
      { name: 'Grafana', level: handsOn, description: 'Operational monitoring dashboards & system metrics' },
      { name: 'Elasticsearch', level: handsOn, description: 'Centralized log storage and search' },
      { name: 'Logstash', level: handsOn, description: 'Log collection and processing' },
      { name: 'Kibana', level: handsOn, description: 'Log inspection and visualization' },
      { name: 'ELK Stack', level: handsOn, description: 'Centralized log aggregation' },
    ],
  },
  {
    title: 'Artifact Management',
    description: 'Package versioning, binary dependencies, and release integrity.',
    iconName: 'Package',
    skills: [
      { name: 'JFrog Artifactory', level: handsOn, description: 'Artifact lifecycle, binary dependencies & build versioning' },
    ],
  },
  {
    title: 'Documentation',
    description: 'Centralized DevOps knowledge sharing and operational runbooks.',
    iconName: 'BookOpen',
    skills: [
      { name: 'Wiki.js', level: handsOn, description: 'DevOps knowledge base and runbook repository' },
    ],
  },
  {
    title: 'Architecture',
    description: 'Delivery practices for distributed application environments.',
    iconName: 'Network',
    skills: [
      { name: 'Microservices', level: handsOn, description: 'Dockerized microservice delivery' },
      { name: 'Distributed Systems Delivery', level: handsOn, description: 'Multi-environment deployment workflows' },
    ],
  },
  {
    title: 'Database DevOps',
    description: 'Automated database migrations and version-controlled schema tracking.',
    iconName: 'Database',
    skills: [
      { name: 'Liquibase', level: handsOn, description: 'Automated schema migration, changelogs & version control' },
    ],
  },
  {
    title: 'Scripting',
    description: 'Automation scripts for deployments, system tasks, and operational checks.',
    iconName: 'Terminal',
    skills: [
      { name: 'Bash', level: handsOn, description: 'Linux administration and deployment automation scripts' },
      { name: 'Groovy', level: handsOn, description: 'Jenkins pipeline automation and dynamic job scripts' },
    ],
  },
  {
    title: 'Operating Systems',
    description: 'Linux systems administration in production and staging environments.',
    iconName: 'MonitorCog',
    skills: [
      { name: 'Linux', level: handsOn, description: 'Server administration, tuning & security permissions' },
      { name: 'Ubuntu', level: handsOn, description: 'Production server configuration & package maintenance' },
      { name: 'CentOS', level: handsOn, description: 'Enterprise Linux hosting & daemon management' },
    ],
  },
  {
    title: 'Data Pipelines',
    description: 'Automated backend data ingestion and pipeline configuration.',
    iconName: 'Network',
    skills: [
      { name: 'Apache NiFi', level: handsOn, description: 'Automated backend data flow orchestration & ingestion' },
    ],
  },
  {
    title: 'Collaboration',
    description: 'Team notification workflows and automated operational ChatOps.',
    iconName: 'MessageSquare',
    skills: [
      { name: 'Slack', level: handsOn, description: 'Jenkins & GitHub build triggers, sprint branches & log notifications' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'muziris-devops',
    role: 'DevOps Engineer',
    company: 'Muziris Softech (P) Ltd',
    period: 'January 2025 – Present',
    startDate: 'January 2025',
    endDate: 'Present',
    isCurrent: true,
    type: 'Full-time',
    responsibilities: [
      'Engineered and maintained declarative Jenkins and Groovy CI/CD pipelines, reducing deployment cycle time by 40%.',
      'Implemented GitHub Actions deployment workflows with self-hosted runners in target client environments.',
      'Automated server provisioning and application rollouts with Ansible, reducing manual configuration errors by 60%.',
      'Containerized microservices with Docker and automated lifecycle routines, restarts, and health checks.',
      'Integrated Jenkins and Slack for daily builds, sprint-plan branch creation, and build log visibility.',
      'Managed release packages in JFrog Artifactory and database migrations with Liquibase.',
      'Built Grafana dashboards and ELK-based centralized logging for verification and troubleshooting.',
      'Configured Apache NiFi data flows and Wiki.js as a DevOps knowledge base and runbook repository.',
      'Authored Bash and Groovy automation for administration, container maintenance, and environment checks.',
      'Applied basic Kubernetes deployment management and foundational Terraform practice for AWS EC2 and S3.',
    ],
    technologies: [
      'Jenkins',
      'GitHub Actions',
      'Self-Hosted Runners',
      'Docker',
      'Ansible',
      'JFrog Artifactory',
      'Liquibase',
      'Grafana',
      'ELK Stack',
      'Slack',
      'Bash',
      'Groovy',
      'Kubernetes (Basic)',
      'Terraform (Practice)',
      'AWS (EC2, S3)',
      'Linux',
    ],
  },
  {
    id: 'muziris-svc',
    role: 'Software Version Controller',
    company: 'Muziris Softech (P) Ltd',
    period: 'May 2022 – December 2024',
    startDate: 'May 2022',
    endDate: 'December 2024',
    isCurrent: false,
    type: 'Full-time',
    responsibilities: [
      'Administered Git and Gitea repositories, branching strategies, release tags, and version-controlled workflows.',
      'Coordinated release workflows and deployment schedules with engineering teams.',
      'Maintained Linux staging and production environments, including permissions, cron jobs, and background services.',
      'Created Bash automation for routine maintenance, environment health checks, and build artifact archiving.',
      'Supported DevOps practices and standardized release documentation through Wiki.js.',
    ],
    technologies: [
      'Git',
      'GitHub',
      'Gitea',
      'Release Workflows',
      'Branching Strategies',
      'Bash',
      'Linux (Ubuntu, CentOS)',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'target-server-deployment-automation',
    title: 'Target-Server Deployment Automation via GitHub Actions Self-Hosted Runners',
    category: 'Professional Implementation • Muziris Softech (P) Ltd',
    description:
      'Configured self-hosted runners in target client environments to automate deployment workflows, Docker container lifecycle restarts, and post-deployment service verification.',
    technologies: [
      'GitHub Actions',
      'GitHub Actions Self-Hosted Runners',
      'Docker',
      'Linux',
      'Bash',
    ],
    highlights: [
      'Executed deployment workflows directly in target client environments.',
      'Automated container restart routines and service verification.',
    ],
  },
  {
    id: 'jenkins-slack-chatops',
    title: 'Jenkins & Slack ChatOps Integration for Automated Release Operations',
    category: 'Professional Implementation • Muziris Softech (P) Ltd',
    description: 'Integrated Jenkins and Slack to support automated daily builds, readable build status and log visibility, sprint-plan branch creation workflows, and release package management.',
    technologies: ['Jenkins', 'Slack', 'Groovy', 'JFrog Artifactory'],
    highlights: ['Automated daily build trigger workflows and notifications.', 'Improved build status and log visibility for release operations.'],
  },
  {
    id: 'ansible-docker-delivery',
    title: 'Automated Multi-Environment Delivery with Ansible & Docker',
    category: 'Professional Implementation • Muziris Softech (P) Ltd',
    description: 'Used modular Ansible playbooks for provisioning and package configuration, Dockerized application deployments, and Liquibase database migrations across environments.',
    technologies: ['Ansible', 'Docker', 'Liquibase', 'Linux'],
    highlights: ['Automated provisioning and application rollout activities.', 'Version-controlled database schema migrations with Liquibase.'],
  },
  {
    id: 'centralized-observability',
    title: 'Centralized Observability & Logging Infrastructure',
    category: 'Professional Implementation • Muziris Softech (P) Ltd',
    description: 'Established Grafana monitoring dashboards and centralized ELK logging for health monitoring, post-deployment verification, and troubleshooting.',
    technologies: ['Grafana', 'ELK Stack', 'Linux', 'Bash'],
    highlights: ['Created dashboards for operational monitoring.', 'Centralized logs to support inspection and post-deployment troubleshooting.'],
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
    field: 'Higher Secondary Education',
    period: '2014 – 2016',
    location: 'Kerala, India',
  },
];
