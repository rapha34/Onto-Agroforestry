/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViewPlots2Component } from './view-plots2.component';

describe('ViewPlots2Component', () => {
  let component: ViewPlots2Component;
  let fixture: ComponentFixture<ViewPlots2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPlots2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlots2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
