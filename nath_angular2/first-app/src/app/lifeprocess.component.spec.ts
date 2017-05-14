/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LifeprocessComponent } from './lifeprocess.component';

describe('LifeprocessComponent', () => {
  let component: LifeprocessComponent;
  let fixture: ComponentFixture<LifeprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
