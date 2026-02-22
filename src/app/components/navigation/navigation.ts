import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Section } from '../../store/test-task/types';

@Component({
  selector: 'app-navigation',
  imports: [],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  @Input() sections?: Section[] = [];
  @Input() activeSectionId?: string;
  @Output() selectSection = new EventEmitter<Section>();

  onSelect(section: Section) {
    this.selectSection.emit(section);
  }
}
