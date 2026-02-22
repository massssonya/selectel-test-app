import { Component, inject, OnInit } from '@angular/core';
import { CheckboxItem } from '../../components/checkbox-item';
import { Header } from '../../components/header';
import { Navigation } from '../../components/navigation';
import { TestTaskStore } from '../../store/test-task/test-task.store';

@Component({
  selector: 'app-test-task',
  standalone: true,
  imports: [Header, Navigation, CheckboxItem],
  templateUrl: './test-task.html',
  styleUrl: './test-task.css',
})
export class TestTask implements OnInit {
  store = inject(TestTaskStore);

  ngOnInit() {
    this.store.loadSections();
  }
}
