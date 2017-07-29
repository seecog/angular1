/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegpageComponent } from './regpage.component';

describe('RegpageComponent', () => {
  let component: RegpageComponent;
  let fixture: ComponentFixture<RegpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
