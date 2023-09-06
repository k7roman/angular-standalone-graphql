import { Component } from '@angular/core';
import { ViewComponent } from './components/view/view.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    ViewComponent
  ]
})
export class AppComponent {
  title = 'angular-standalone-graphql';
}
