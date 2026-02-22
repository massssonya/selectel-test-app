import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTask } from './test-task';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('TestTask', () => {
  let component: TestTask;
  let fixture: ComponentFixture<TestTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestTask],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(TestTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
