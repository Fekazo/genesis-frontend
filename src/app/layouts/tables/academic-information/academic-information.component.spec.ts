import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicInformationComponent } from './academic-information.component';

describe('AcademicInformationComponent', () => {
  let component: AcademicInformationComponent;
  let fixture: ComponentFixture<AcademicInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademicInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
