import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnoElementComponent } from './techno-element.component';

describe('TechnoElementComponent', () => {
  let component: TechnoElementComponent;
  let fixture: ComponentFixture<TechnoElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnoElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnoElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
