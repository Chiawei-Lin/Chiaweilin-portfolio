import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
} from "@ngx-translate/core";
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'clp-root',
  imports: [
    RouterOutlet,
    NavComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor (public translate: TranslateService) {
    this.translate.addLangs(['en', 'zh']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
