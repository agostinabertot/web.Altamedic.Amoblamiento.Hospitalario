import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaburetesComponent } from './taburetes.component';

describe('TaburetesComponent', () => {
  let component: TaburetesComponent;
  let fixture: ComponentFixture<TaburetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaburetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaburetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
