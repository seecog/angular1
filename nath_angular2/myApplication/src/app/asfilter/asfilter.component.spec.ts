/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AsfilterComponent } from './asfilter.component';

describe('AsfilterComponent', () => {
  let component: AsfilterComponent;
  let fixture: ComponentFixture<AsfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
