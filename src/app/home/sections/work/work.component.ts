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
      responsibilities: [
        'Upgrading the company’s front-end and back-end features for an efficient microservices product written in Go. ',
        'Refining and fixing legacy features for their Vendor Management System called “E-Tips” that deals with features such as timesheets, finance and reporting for recruitment agencies and clients. This platform handles the main revenue for the company in millions as there are a large number of clients that use the platform.',
        'Optimising and implementing a REST API with Go that handles many requests daily, also connected to a front-end platform written in TypeScript.',
        'Performing integration and deployment of software changes via BitBucket CI/CD pipelines and Jenkins. ',
        'Stress testing and efficiency monitoring via Elasticsearch and Jaeger to make the system stand out from their competition.',
        'Formulating and implementing SaaS features for client specific requirements by using RBAC functionality within the API.',
      ],
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
