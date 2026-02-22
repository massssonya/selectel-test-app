import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() activeSectionName?: string;
  @Input() countSelectedItems = 0;
  @Input() totalValue = 0;
}
