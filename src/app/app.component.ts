import { Component } from '@angular/core';
import { FilterComponent } from './components/filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FilterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'client';
}
