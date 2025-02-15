import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HomepageService } from '../../services/homepage.service';

@Component({
  selector: 'clp-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  url?: SafeResourceUrl;
  constructor (private _sanitizer: DomSanitizer, private homepageService: HomepageService) { }

  ngOnInit (): void {
    this.homepageService.getHomepage().subscribe(result => {
      this.url = this._sanitizer.bypassSecurityTrustResourceUrl(result.mainVideo);
    })
  }
}
