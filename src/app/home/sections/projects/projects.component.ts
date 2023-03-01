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
        'A responsive web application which uses React.js and an open weather API to provide up to date weather data based on a user’s search parameters.',
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
        'Formulation of an interactive learning platform, created using JavaScript and TensorFlow.js to entice individuals to learn about Deep Learning and Machine Learning.',
      stack: ['JavaScript', 'HTML', 'CSS', 'Tensorflow'],
      repoLink: 'https://github.com/cindered/nnpackage',
      liveLink: 'https://cindered.github.io/nnpackage/',
    },
  ];

  ngOnInit(): void {}
}
