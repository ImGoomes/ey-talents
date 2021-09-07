import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotskillsComponent } from './hotskills.component';

describe('HotskillsComponent', () => {
  let component: HotskillsComponent;
  let fixture: ComponentFixture<HotskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
