import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationElementComponent } from './formation-element.component';

describe('FormationElementComponent', () => {
  let component: FormationElementComponent;
  let fixture: ComponentFixture<FormationElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
