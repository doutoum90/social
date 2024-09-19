import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeepComponent } from './beep.component';

describe('BeepComponent', () => {
  let component: BeepComponent;
  let fixture: ComponentFixture<BeepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
