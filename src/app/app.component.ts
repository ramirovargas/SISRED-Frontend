import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) document, r: Renderer2) {
    r.addClass(document.body, 'skin-blue');
  }
  title = 'SISRED-Frontend';
}