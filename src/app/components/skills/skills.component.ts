import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule   
  ],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills = [
    { name: 'Angular',    icon: 'angularicon.png'       },
    { name: 'TypeScript', icon: 'tsicon.png'            },
    { name: 'JavaScript', icon: 'jsicon.png'            },
    { name: 'HTML',       icon: 'htmlicon.png'          },
    { name: 'CSS',        icon: 'cssicon.png'           },
    { name: 'REST-API',   icon: 'restapiicon.png'       },
    { name: 'Firebase',   icon: 'firebaseicon.png'      },
    { name: 'Git',        icon: 'giticon.png'           },
    { name: 'Scrum',      icon: 'scrumicon.png'         },
    { name: 'Material',   icon: 'materialdesignicon.png'},
    { name: 'Wordpress',  icon: 'wordpress.png'         },
    { name: 'woocomerce', icon: 'woocomerce2.png'       },
    { name: 'Challenge',  icon: 'challangemeicon.png'   },
  ];
}
