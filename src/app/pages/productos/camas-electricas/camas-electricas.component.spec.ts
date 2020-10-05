import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamasElectricasComponent } from './camas-electricas.component';

describe('CamasElectricasComponent', () => {
  let component: CamasElectricasComponent;
  let fixture: ComponentFixture<CamasElectricasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamasElectricasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamasElectricasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
