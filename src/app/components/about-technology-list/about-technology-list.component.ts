import { Component } from '@angular/core';
import { Technology } from '../../models/technology.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'clp-about-technology-list',
  imports: [],
  templateUrl: './about-technology-list.component.html',
  styleUrl: './about-technology-list.component.scss'
})
export class AboutTechnologyListComponent {
  technologies: Technology[] = [
    {
      id: 0,
      name: {
        en: 'skill1',
        zh: 'skill1 zh'
      }
    },
    {
      id: 1,
      name: {
        en: 'skill2',
        zh: 'skill2 zh'
      }
    },
    {
      id: 2,
      name: {
        en: 'skill2',
        zh: 'skill2 zh'
      }
    },
    {
      id: 3,
      name: {
        en: 'skill3',
        zh: 'skill3 zh'
      }
    },
    {
      id: 4,
      name: {
        en: 'skill4',
        zh: 'skill4 zh'
      }
    },
    {
      id: 5,
      name: {
        en: 'skill5',
        zh: 'skill5 zh'
      }
    }
  ]

  /**
   *
   */
  constructor (public translateService: TranslateService) {


  }
}
