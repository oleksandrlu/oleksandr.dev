// Project types and interfaces

export interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  url?: string;
  tags?: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface NavigationLink {
  id: string;
  href: string;
  label: string;
}

export interface Skill {
  name: string;
  category?: string;
}


