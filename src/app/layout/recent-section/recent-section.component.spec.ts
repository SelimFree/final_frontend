import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentSectionComponent } from './recent-section.component';

describe('RecentSectionComponent', () => {
  let component: RecentSectionComponent;
  let fixture: ComponentFixture<RecentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
