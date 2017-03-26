/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwowaydatabindobjComponent } from './twowaydatabindobj.component';

describe('TwowaydatabindobjComponent', () => {
  let component: TwowaydatabindobjComponent;
  let fixture: ComponentFixture<TwowaydatabindobjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwowaydatabindobjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaydatabindobjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
