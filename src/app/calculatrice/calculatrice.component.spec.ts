import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatriceComponentComponent } from './calculatrice.component';

describe('CalculatriceComponentComponent', () => {
  let component: CalculatriceComponentComponent;
  let fixture: ComponentFixture<CalculatriceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatriceComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalculatriceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
