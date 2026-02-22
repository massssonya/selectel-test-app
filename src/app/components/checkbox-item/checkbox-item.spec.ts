import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckboxItem } from './checkbox-item';
import { Item } from '../../store/test-task/types';

describe('CheckboxItem', () => {
  let component: CheckboxItem;
  let fixture: ComponentFixture<CheckboxItem>;

  const mockItem: Item = {
    id: '1',
    text: 'Test item',
    value: 10,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxItem);
    component = fixture.componentInstance;

	component.item = mockItem;
    component.checked = false;

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
