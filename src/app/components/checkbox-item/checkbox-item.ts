import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../store/test-task/types';

@Component({
  selector: 'app-checkbox-item',
  standalone: true,
  templateUrl: './checkbox-item.html',
  styleUrl: './checkbox-item.css',
})
export class CheckboxItem {
  @Input() item!: Item;
  @Input() checked = false;

  @Output() checkedChange = new EventEmitter<{
    id: string;
    checked: boolean;
  }>();

  onToggle(event: Event) {
    const input = event.target as HTMLInputElement;

    this.checkedChange.emit({
      id: this.item.id,
      checked: input.checked,
    });
  }
}
