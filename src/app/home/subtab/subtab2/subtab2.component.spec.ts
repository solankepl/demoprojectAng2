import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Subtab2Component } from './subtab2.component';

describe('Subtab2Component', () => {
  let component: Subtab2Component;
  let fixture: ComponentFixture<Subtab2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Subtab2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Subtab2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
