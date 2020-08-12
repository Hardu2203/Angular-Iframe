import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Set iframe source';
  url: string = '"https://grafana.wikimedia.org/d-solo/000000605/datacenter-global-overview?orgId=1&from=1597239812218&to=1597250612218&var-datasource=codfw%20prometheus%2Fglobal&var-site=All&panelId=20" width="450" height="200" frameborder="0"';
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}
