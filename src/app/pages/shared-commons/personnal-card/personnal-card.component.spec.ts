import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalCardComponent } from './personnal-card.component';

describe('PersonnalCardComponent', () => {
  let component: PersonnalCardComponent;
  let fixture: ComponentFixture<PersonnalCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonnalCardComponent]
    });
    fixture = TestBed.createComponent(PersonnalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
