import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedicuriaComponent } from './pedicuria.component';

describe('PedicuriaComponent', () => {
  let component: PedicuriaComponent;
  let fixture: ComponentFixture<PedicuriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedicuriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedicuriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
