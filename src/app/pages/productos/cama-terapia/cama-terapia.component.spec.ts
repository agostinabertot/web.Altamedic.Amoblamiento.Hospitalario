import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaTerapiaComponent } from './cama-terapia.component';

describe('CamaTerapiaComponent', () => {
  let component: CamaTerapiaComponent;
  let fixture: ComponentFixture<CamaTerapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamaTerapiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaTerapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
