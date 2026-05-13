export interface ExperienceNodeProps {
  title: string;
  company: string;
  date: string;
  points: (string | React.ReactNode)[];
  techStack: string[];
  isActive?: boolean;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  index: number;
  githubUrl?: string;
  liveUrl?: string;
}
