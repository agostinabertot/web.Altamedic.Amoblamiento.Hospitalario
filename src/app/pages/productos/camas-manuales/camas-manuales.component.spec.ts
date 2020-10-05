import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamasManualesComponent } from './camas-manuales.component';

describe('CamasManualesComponent', () => {
  let component: CamasManualesComponent;
  let fixture: ComponentFixture<CamasManualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamasManualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamasManualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
