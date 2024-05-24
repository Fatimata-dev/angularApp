import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NazaComponent } from './naza.component';

describe('NazaComponent', () => {
  let component: NazaComponent;
  let fixture: ComponentFixture<NazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NazaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
