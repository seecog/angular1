/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromisesComponent } from './promises.component';

describe('PromisesComponent', () => {
  let component: PromisesComponent;
  let fixture: ComponentFixture<PromisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromisesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
