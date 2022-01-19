import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerChannelComponent } from './server-channel.component';

describe('ServerChannelComponent', () => {
  let component: ServerChannelComponent;
  let fixture: ComponentFixture<ServerChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
