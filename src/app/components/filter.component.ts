import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      filter works!
    </p>
  `,
  styles: [
  ]
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
