import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainChannelComponent } from './main-channel.component';

describe('MainChannelComponent', () => {
  let component: MainChannelComponent;
  let fixture: ComponentFixture<MainChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
