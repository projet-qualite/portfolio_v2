import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceElementComponent } from './experience-element.component';

describe('ExperienceElementComponent', () => {
  let component: ExperienceElementComponent;
  let fixture: ComponentFixture<ExperienceElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
