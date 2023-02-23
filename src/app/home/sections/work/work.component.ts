import { Component } from '@angular/core';
import { Job } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent {
  public jobs: Job[] = [
    {
      company: 'Geometric Results Inc / Magnit Global',
      role: 'Software Developer',
      product: 'E-Tips',
      description:
        "Creating, updating and fixing features for a Vendor Management System called 'E-Tips' that acts as a middleman service for recruitment agencies, clients and their candidates.",
      responsibilities:
        'Responsibilites included: ' +
        'Designing and developing software applications using Go, Angular, AWS and Docker, ' +
        'creating reusable components and implemening efficient algorithms, writing automated tests to create robust features, ' +
        'deploying services using Docker and AWS, managing source code and CI/CD pipelines via BitBucket, and finally collaborating and contributing to the team to improve the development process.',
      dateFrom: '02/2021',
      dateTo: '',
      stack: ['Go', 'TypeScript', 'Angular', 'MySQL', 'AWS', 'Docker'],
    },
  ];

  ngOnInit(): void {}

  jobDateTo(index: number): string {
    return this.jobs[index].dateTo ? this.jobs[index].dateTo : 'Current';
  }
}
