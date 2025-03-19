import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HomepageService } from '../../services/homepage.service';
import { YoutubeEmbedComponent } from "../youtube-embed/youtube-embed.component";

@Component({
  selector: 'clp-home',
  imports: [YoutubeEmbedComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  url?: string;
  constructor (private homepageService: HomepageService) { }

  ngOnInit (): void {
    this.homepageService.getHomepage().subscribe(result => {
      this.url = result.mainVideo
    })
  }
}
