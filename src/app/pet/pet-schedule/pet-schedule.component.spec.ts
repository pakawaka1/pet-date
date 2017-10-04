import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetScheduleComponent } from './pet-schedule.component';

describe('PetScheduleComponent', () => {
  let component: PetScheduleComponent;
  let fixture: ComponentFixture<PetScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
