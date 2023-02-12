import { Component } from '@angular/core';
import { AboutPageContent } from '../../../interfaces/interfaces';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public aboutContent: AboutPageContent = {
    name: 'Asaas Baig',
    title: 'Software Engineer',
    about:
      'A full stack software engineer; currently using Go, TypeScript and Angular to create efficient and responsive projects.',
    stack: ['Go', 'TypeScript', 'Angular', 'MySQL', 'AWS', 'Docker'],
  };

  ngOnInit(): void {
    this.addStyleToStackLabel('/');
  }

  // Function that adds a symbol to the stack array labels for styling
  addStyleToStackLabel(symbol: string): void {
    this.aboutContent.stack.forEach((val: string, index: number) => {
      if (index < this.aboutContent.stack.length - 1) {
        this.aboutContent.stack[index] = val + ' ' + symbol;
      }
    });
  }
}
