import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './components/skills/skills.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SkillsComponent, NavbarComponent, EducationComponent, FooterComponent, HeroComponent, ProjectsComponent, AboutComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Julio Rosario Portfolio';
}
