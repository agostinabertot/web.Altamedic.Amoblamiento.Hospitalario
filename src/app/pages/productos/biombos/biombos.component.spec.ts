import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiombosComponent } from './biombos.component';

describe('BiombosComponent', () => {
  let component: BiombosComponent;
  let fixture: ComponentFixture<BiombosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiombosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiombosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
