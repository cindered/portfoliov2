import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './home/sections/about/about.component';
import { ContactComponent } from './home/sections/contact/contact.component';
import { ProjectsComponent } from './home/sections/projects/projects.component';
import { WorkComponent } from './home/sections/work/work.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    WorkComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
})
export class AppModule {
  constructor(IconLibrary: FaIconLibrary) {
    IconLibrary.addIcons(faGithub, faLinkedin);
  }
}
