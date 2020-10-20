import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnmatComponent } from './anmat.component';

describe('AnmatComponent', () => {
  let component: AnmatComponent;
  let fixture: ComponentFixture<AnmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnmatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
