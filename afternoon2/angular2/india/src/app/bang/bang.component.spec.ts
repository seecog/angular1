/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BangComponent } from './bang.component';

describe('BangComponent', () => {
  let component: BangComponent;
  let fixture: ComponentFixture<BangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
