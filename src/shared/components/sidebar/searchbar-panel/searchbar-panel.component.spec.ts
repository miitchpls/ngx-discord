import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarPanelComponent } from './searchbar-panel.component';

describe('SearchbarPanelComponent', () => {
  let component: SearchbarPanelComponent;
  let fixture: ComponentFixture<SearchbarPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbarPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
