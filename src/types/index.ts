export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  type: string;
  responsibilities: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  technologies: string[];
  highlights: string[];
  architectureStage: 'CI/CD' | 'IaC & Config' | 'Observability' | 'Database' | 'Containers';
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location?: string;
}

export interface PipelineStage {
  id: string;
  step: string;
  name: string;
  tools: string[];
  description: string;
  color: string;
}
