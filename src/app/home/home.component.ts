import { Component } from '@angular/core';
import { AboutPageContent, Job, Project } from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public aboutContent: AboutPageContent = {
    name: 'Asaas Baig',
    title: 'Software Engineer',
    about:
      'A full stack software engineer; currently using Go, TypeScript and Angular to create efficient and responsive projects.',
    stack: ['Go', 'TypeScript', 'Angular', 'MySQL', 'AWS', 'Docker'],
  };

  public jobs: Job[] = [
    {
      company: 'Geometric Results Inc / Magnit Global',
      role: 'Software Developer',
      product: 'E-Tips',
      description:
        "Creating, updating and fixing features for a Vendor Management System called 'E-Tips' that acts as a middleman service for recruitment agencies, clients and their candidates.",
      responsibilities:
        'Responsibilites included: ' +
        'Designing and developing software applications using Go, Angular, AWS and Docker. Creating reusable components and implemening efficient algorithms, also writing automated tests to create robust features. Deploying applications using Docker containers and configuring the necessary environments via BitBucket, and collaborating and contributing to the team to improve the development process.',
      dateFrom: '02/2021',
      dateTo: '',
      stack: ['Go', 'TypeScript', 'Angular', 'MySQL', 'AWS', 'Docker'],
    },
  ];

  public projects: Project[] = [
    {
      name: 'Weather App',
      description:
        'A simple weather web application search engine created using React.js and WeatherStack API.',
      stack: ['React', 'React Spring', 'WeatherStack API'],
      repoLink: 'https://github.com/cindered/weather-app',
      liveLink: 'https://github.com/cindered/weather-app',
    },
    {
      name: 'Chittr',
      description:
        "A 'Twitter-Like' phone application created using React-Native which allows users to interact with others. Includes user profiles, logins, posts, geolocation, following and unfollowing features.",
      stack: ['React-Native', 'Node', 'HTML', 'CSS'],
      repoLink: 'https://github.com/cindered/chittr',
      liveLink: 'https://github.com/cindered/chittr',
    },
    {
      name: 'Neural Network Package',
      description:
        "An online interactive example that makes use of google's TensorFlow.js in an attempt to teach people about Deep Learning.",
      stack: ['JavaScript', 'Tensorflow', 'HTML', 'CSS'],
      repoLink: 'https://github.com/cindered/nnpackage',
      liveLink: 'https://cindered.github.io/nnpackage/',
    },
  ];

  ngOnInit(): void {
    this.addStyleToStackLabel('/');
  }

  // Function that adds a symbol to the stack array labels for styling
  addStyleToStackLabel(symbol: string): void {
    this.aboutContent.stack.forEach((val, index) => {
      if (index < this.aboutContent.stack.length - 1) {
        this.aboutContent.stack[index] = val + ' ' + symbol;
      }
    });
  }

  jobDateTo(index: number): string {
    return this.jobs[index].dateTo ? this.jobs[index].dateTo : 'Current';
  }
}
