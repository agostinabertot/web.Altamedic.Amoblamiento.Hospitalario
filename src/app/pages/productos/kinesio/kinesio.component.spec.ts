import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinesioComponent } from './kinesio.component';

describe('KinesioComponent', () => {
  let component: KinesioComponent;
  let fixture: ComponentFixture<KinesioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinesioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinesioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
