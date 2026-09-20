export interface PersonalInfo {
  name: string;
  title: string;
  shortTitle: string;
  statement: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  portfolioUrl: string;
  github: string;
  linkedin: string;
  twitter?: string;
  availability: string;
  status: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1 - 100
  category: 'programming' | 'frontend' | 'backend' | 'tools';
  icon: string;
  experienceYears: number;
  highlight?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  category: 'Full-Stack' | 'AI & Systems' | 'Web App' | 'Frontend';
  role: string;
  technologies: string[];
  features: string[];
  architectureNotes: string;
  githubUrl: string;
  liveUrl: string;
  stats?: { label: string; value: string }[];
  accentColor: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  type: 'Internship' | 'University' | 'Leadership' | 'Milestone';
  description: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  details: string[];
  coursework: string[];
}

export interface UiUxItem {
  id: string;
  title: string;
  subtitle: string;
  type: 'Mobile' | 'Web Design' | 'Design System' | 'Before / After';
  summary: string;
  figmaUrl?: string;
  tags: string[];
  metrics?: string;
  before?: { title: string; points: string[] };
  after?: { title: string; points: string[] };
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface AwardItem {
  title: string;
  competition: string;
  year: string;
  description: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  summary: string;
  stats: StatItem[];
  skills: {
    programming: SkillItem[];
    frontend: SkillItem[];
    backend: SkillItem[];
    tools: SkillItem[];
  };
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  uiUxWork: UiUxItem[];
  certifications: CertificationItem[];
  awards: AwardItem[];
  languages: { language: string; proficiency: string }[];
  interests: string[];
}

export type ResumeType = 'general' | 'software' | 'frontend' | 'uiux';

export interface ResumeConfig {
  type: ResumeType;
  sections: {
    summary: boolean;
    experience: boolean;
    projects: boolean;
    skills: boolean;
    education: boolean;
    certifications: boolean;
    awards: boolean;
    languages: boolean;
  };
  isCompactOnePage: boolean;
}
