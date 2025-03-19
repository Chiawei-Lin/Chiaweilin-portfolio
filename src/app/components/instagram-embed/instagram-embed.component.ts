import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'clp-instagram-embed',
  imports: [],
  templateUrl: './instagram-embed.component.html',
  styleUrl: './instagram-embed.component.scss'
})
export class InstagramEmbedComponent implements OnChanges {
  @Input() url?: string;
  sanitizedUrl?: SafeResourceUrl;

  constructor (private _sanitizer: DomSanitizer, private httpClient: HttpClient) { }


  ngOnChanges (changes: SimpleChanges): void {
    if (changes['url']?.currentValue) {
      this.sanitizedUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.url!);
    }
  }
}
