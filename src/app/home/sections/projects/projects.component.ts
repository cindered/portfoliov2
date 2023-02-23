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
        'A simple, reactive single page web application created using React.js and WeatherStack API to display the current weather anywhere in the world.',
      stack: ['React', 'React Spring', 'WeatherStack API'],
      repoLink: 'https://github.com/cindered/weather-app',
      liveLink: 'https://github.com/cindered/weather-app',
    },
    {
      name: 'Chittr',
      description:
        "A 'Twitter-Like' phone application created using React-Native which uses communication with an API to handle data. Features included are user profiles, logins, posts, geolocation, following, unfollowing and more.",
      stack: ['React-Native', 'HTML', 'CSS', 'Node'],
      repoLink: 'https://github.com/cindered/chittr',
      liveLink: 'https://github.com/cindered/chittr',
    },
    {
      name: 'Neural Network Package',
      description:
        "An online interactive example that makes use of google's TensorFlow.js in an attempt to teach people about Deep Learning with visual examples.",
      stack: ['JavaScript', 'HTML', 'CSS', 'Tensorflow'],
      repoLink: 'https://github.com/cindered/nnpackage',
      liveLink: 'https://cindered.github.io/nnpackage/',
    },
  ];

  ngOnInit(): void {}
}
