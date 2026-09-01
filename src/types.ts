export interface Project {
  id: string;
  category: 'ai-vision' | 'backend-pipeline';
  categoryLabel: string;
  title: string;
  subtitle: string;
  targetDomain: string;
  badges: string[];
  techStack: string[];
  metric?: {
    label: string;
    before: string;
    after: string;
    description: string;
  };
  problemDefinition: {
    title: string;
    points: string[];
  };
  coreArchitecture: {
    title: string;
    items: {
      tag: string;
      heading: string;
      description: string;
      details?: string[];
    }[];
  };
  hanaContribution: {
    title: string;
    summary: string;
    points: string[];
  };
}

export interface StrengthCategory {
  title: string;
  englishTitle: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  period: string;
  targetAudience: string;
  keyAchievements: string[];
  hanaSynergy: {
    title: string;
    description: string;
  };
}

export interface Qualification {
  name: string;
  fullName: string;
  issuer: string;
  highlight: string;
}
