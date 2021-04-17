import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementAssignFormComponent } from './achievement-assign-form.component';

describe('AchievementAssignFormComponent', () => {
  let component: AchievementAssignFormComponent;
  let fixture: ComponentFixture<AchievementAssignFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementAssignFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementAssignFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
