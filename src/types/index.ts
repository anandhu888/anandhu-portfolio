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
  technologies: string[];
  highlights: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  period: string;
  location?: string;
}
