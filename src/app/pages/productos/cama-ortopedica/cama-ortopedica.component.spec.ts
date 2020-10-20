import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaOrtopedicaComponent } from './cama-ortopedica.component';

describe('CamaOrtopedicaComponent', () => {
  let component: CamaOrtopedicaComponent;
  let fixture: ComponentFixture<CamaOrtopedicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamaOrtopedicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaOrtopedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
