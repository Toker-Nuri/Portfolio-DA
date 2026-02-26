import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

interface Project {
  titleKey: string;
  techStack: string[];
  descriptionKey: string;
  imageUrl: string;
  githubUrl: string;
  liveDemoUrl: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      titleKey: 'PROJECTS.JOIN.TITLE',
      techStack: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      descriptionKey: 'PROJECTS.JOIN.DESCRIPTION',
      imageUrl: 'assets/img/join.png',
      githubUrl: 'https://github.com/Toker-Nuri/Join',
      liveDemoUrl: 'https://nuri-toker.developerakademie.net/Join/index.html'
    },
    {
      titleKey: 'PROJECTS.EL_POLLO_LOCO.TITLE',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      descriptionKey: 'PROJECTS.EL_POLLO_LOCO.DESCRIPTION',
      imageUrl: 'assets/img/elpollolocco.png',
      githubUrl: 'https://github.com/Toker-Nuri/El-Pollo-Loco',
      liveDemoUrl: 'https://nuri-toker.developerakademie.net/El%20Pollo%20Loco/index.html'
    }
  ];
}
