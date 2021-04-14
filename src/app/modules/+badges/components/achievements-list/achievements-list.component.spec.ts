import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsListComponent } from './achievements-list.component';

describe('AchievementsListComponent', () => {
  let component: AchievementsListComponent;
  let fixture: ComponentFixture<AchievementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AchievementsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
