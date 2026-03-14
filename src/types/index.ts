export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  tags: string[];
}

export interface Technology {
  name: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  email: string;
  bio: string;
  tagline: string;
  socials: SocialLink[];
  resumeUrl: string;
}
