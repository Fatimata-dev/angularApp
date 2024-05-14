import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildStudentComponent } from './wild-student.component';

describe('WildStudentComponent', () => {
  let component: WildStudentComponent;
  let fixture: ComponentFixture<WildStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WildStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WildStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
