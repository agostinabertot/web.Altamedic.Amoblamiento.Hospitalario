import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortaTubosComponent } from './porta-tubos.component';

describe('PortaTubosComponent', () => {
  let component: PortaTubosComponent;
  let fixture: ComponentFixture<PortaTubosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortaTubosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortaTubosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
