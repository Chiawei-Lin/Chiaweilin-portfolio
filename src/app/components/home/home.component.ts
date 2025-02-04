import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'clp-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  url?: SafeResourceUrl;
  constructor (private _sanitizer: DomSanitizer) {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/MsROL4Kf8QY?si=y3acn_0RYUSbIbbW');
  }
}
