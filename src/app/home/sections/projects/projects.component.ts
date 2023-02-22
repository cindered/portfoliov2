import { Component } from '@angular/core';
import { Project } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
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
      stack: ['React-Native', 'HTML', 'CSS', 'Node'],
      repoLink: 'https://github.com/cindered/chittr',
      liveLink: 'https://github.com/cindered/chittr',
    },
    {
      name: 'Neural Network Package',
      description:
        "An online interactive example that makes use of google's TensorFlow.js in an attempt to teach people about Deep Learning.",
      stack: ['JavaScript', 'HTML', 'CSS', 'Tensorflow'],
      repoLink: 'https://github.com/cindered/nnpackage',
      liveLink: 'https://cindered.github.io/nnpackage/',
    },
  ];

  ngOnInit(): void {}
}
