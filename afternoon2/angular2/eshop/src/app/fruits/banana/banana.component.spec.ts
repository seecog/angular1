/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BananaComponent } from './banana.component';

describe('BananaComponent', () => {
  let component: BananaComponent;
  let fixture: ComponentFixture<BananaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BananaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
