import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface AboutPageContent {
  name: string;
  title: string;
  about: string;
  stack: string[];
}

export interface Job {
  company: string;
  role: string;
  product: string;
  description: string;
  responsibilities: string;
  dateFrom: string;
  dateTo: string;
  stack: string[];
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  repoLink: string;
  liveLink: string;
}

export interface FooterLinks {
  link: string;
  iconName: IconName;
}
