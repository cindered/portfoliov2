import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public links = ['About', 'Work', 'Projects', 'Contact'];

  ngOnInit(): void {}

  scrollTo(event: Event): void {
    const navClicked = (
      event.target as HTMLInputElement
    ).innerText.toLocaleLowerCase();
    const element = document.getElementById(navClicked);

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });
  }
}
