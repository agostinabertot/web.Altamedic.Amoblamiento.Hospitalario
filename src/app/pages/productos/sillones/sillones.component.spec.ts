import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SillonesComponent } from './sillones.component';

describe('SillonesComponent', () => {
  let component: SillonesComponent;
  let fixture: ComponentFixture<SillonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SillonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SillonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
