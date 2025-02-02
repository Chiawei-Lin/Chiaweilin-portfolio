import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";
import { NavComponent } from './components/nav/nav.component';

@Component({
  selector: 'clp-root',
  imports: [
    RouterOutlet,
    TranslatePipe,
    TranslateDirective,
    NavComponent
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
