import { Component } from '@angular/core';
import { FooterLinks } from '../interfaces/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public links: FooterLinks[] = [
    { link: 'https://github.com/cindered', iconName: 'github' },
    {
      link: 'https://www.linkedin.com/in/asaas-baig-55975a183/',
      iconName: 'linkedin',
    },
  ];
}
