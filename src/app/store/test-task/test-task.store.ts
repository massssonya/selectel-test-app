import { HttpClient } from '@angular/common/http';
import { computed, Injectable, signal } from '@angular/core';
import { Item, Section } from './types';

@Injectable({ providedIn: 'root' })
export class TestTaskStore {
  constructor(private http: HttpClient) {}

  private sections = signal<Section[]>([]);
  private activeSection = signal<Section | null>(null);
  private selectedBySection = signal<Record<string, Set<string>>>({});

  readonly sections$ = this.sections.asReadonly();
  readonly activeSection$ = this.activeSection.asReadonly();

  readonly currentItems = computed(() => this.activeSection()?.items);

  readonly currentItemsMap = computed(() => {
    const map = new Map<string, Item>();
    this.currentItems()?.forEach((i) => map.set(i.id, i));
    return map;
  });

  readonly currentSectionId = computed(() => this.activeSection()?.id ?? '');

  readonly selectedItems = computed(() => {
    const key = this.currentSectionId();
    return this.selectedBySection()[key] ?? new Set();
  });

  readonly totalValue = computed(() => {
    let total = 0;
    const map = this.currentItemsMap();

    this.selectedItems().forEach((id) => {
      total += map.get(id)?.value ?? 0;
    });

    return total;
  });

  loadSections() {
    this.http.get<Section[]>('data.json').subscribe((data) => {
      this.sections.set(data);
      this.activeSection.set(data[0] ?? null);
    });
  }

  selectSection(section: Section) {
    this.activeSection.set(section);
  }

  isCheckedItem(itemId: string) {
    return this.selectedItems().has(itemId);
  }

  toggleItem(itemId: string, checked: boolean) {
    const key = this.currentSectionId();

    this.selectedBySection.update((state) => {
      const copy = { ...state };
      const set = new Set(copy[key] ?? []);

      if (checked) {
        set.add(itemId);
      } else {
        set.delete(itemId);
      }

      copy[key] = set;
      return copy;
    });
  }
}
