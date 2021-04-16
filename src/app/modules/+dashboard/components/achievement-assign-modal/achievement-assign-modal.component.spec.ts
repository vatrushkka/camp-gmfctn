import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementAssignModalComponent } from './achievement-assign-modal.component';

describe('AchievementAssignModalComponent', () => {
  let component: AchievementAssignModalComponent;
  let fixture: ComponentFixture<AchievementAssignModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementAssignModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementAssignModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
