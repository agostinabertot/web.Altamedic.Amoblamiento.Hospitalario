import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortasuerosComponent } from './portasueros.component';

describe('PortasuerosComponent', () => {
  let component: PortasuerosComponent;
  let fixture: ComponentFixture<PortasuerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortasuerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortasuerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
