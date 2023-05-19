import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSectionComponent } from './side-section.component';
// Material Styles
import {MatIconModule} from '@angular/material/icon';

describe('SideSectionComponent', () => {
  let component: SideSectionComponent;
  let fixture: ComponentFixture<SideSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideSectionComponent ],
      imports: [ MatIconModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
