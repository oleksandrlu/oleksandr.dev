// Shared constants and configuration

import type { Project, Testimonial, SocialLink, NavigationLink, Skill } from '@/types';

export const CONTACT_EMAIL = 'oleksandr.lu11@gmail.com';
export const LOCATION = 'DNIPRO, UA';

export const SKILLS: Skill[] = [
  { name: 'REACT / NEXT.JS' },
  { name: 'TYPESCRIPT' },
  { name: 'WORDPRESS' },
  { name: 'NODE.JS' },
  { name: 'VUE.JS' },
  { name: 'UI / UX DESIGN' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'NEURAL_INTERFACE',
    image: '/images/projects/unavailable_project.jpg',
    description: 'AI-powered interface design',
  },
  {
    id: 2,
    title: 'VOID_WALKER',
    image: '/images/projects/unavailable_project.jpg',
    description: 'Immersive experience platform',
  },
  {
    id: 3,
    title: 'DIGITAL_WORKSPACE',
    image: '/images/projects/unavailable_project.jpg',
    description: 'Modern productivity suite',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'User 1',
    position: 'Product Manager, Company 1',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    text: 'Working with this developer was an absolute pleasure. They delivered a high-quality product ahead of schedule and their attention to detail was exceptional. The code was clean, well-documented, and easy to maintain.',
    rating: 5,
  },
  {
    id: 2,
    name: 'User 2',
    position: 'CTO, Company 2',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    text: 'An exceptional developer with strong problem-solving skills. They transformed our vision into a beautiful, functional website that exceeded our expectations. Communication was clear and professional throughout.',
    rating: 5,
  },
  {
    id: 3,
    name: 'User 3',
    position: 'Marketing Director, Company 3',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
    text: 'I highly recommend this developer! They created a stunning portfolio site for our agency that perfectly captures our brand. The site is fast, responsive, and our clients love it. Outstanding work!',
    rating: 5,
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: 'https://instagram.com/oleksandr.1049' },
  { name: 'Telegram', url: 'https://t.me/oleksandr_asdd' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/oleksandr-ludchak-817765163/' },
];
