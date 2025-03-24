import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { AbstractComponent } from '../../models/abstract-component.base';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'clp-nav',
  imports: [TranslatePipe, BurgerMenuComponent, NgClass, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent extends AbstractComponent {
  mobileMenuToggled: boolean = false;

  constructor (public translateService: TranslateService, public themeService: ThemeService) {
    super({
      translationPrefix: 'NAV'
    });
  }

  languageToggle () {
    const currentLanguage = this.translateService.currentLang;
    currentLanguage === 'en' ? this.toggleZhLanguage() : this.toggleEnLanguage();
  }


  toggleEnLanguage () {
    this.translateService.use('en');
  }

  toggleZhLanguage () {
    this.translateService.use('zh');
  }

  themeToggle () {
    this.themeService.currentMode === 'darkmode' ? this.themeService.setTheme('lightmode') : this.themeService.setTheme('darkmode');
  }
}
